import * as vscode from 'vscode';
import { BUILTIN_DOCS } from './builtinDocs';
import { scanSymbols, BtSymbol, BtSymbolKind } from './symbols';

const LANG = '010-binary-template';
const MANUAL_BASE = 'https://www.sweetscape.com/010editor/manual/';

const TYPES = [
    'char', 'byte', 'CHAR', 'BYTE', 'int8', 'INT8', 'uchar', 'ubyte', 'UCHAR', 'UBYTE', 'uint8', 'UINT8',
    'short', 'int16', 'SHORT', 'INT16', 'ushort', 'uint16', 'USHORT', 'UINT16', 'WORD',
    'int', 'int32', 'long', 'INT', 'INT32', 'LONG', 'uint', 'uint32', 'ulong', 'UINT', 'UINT32', 'ULONG', 'DWORD',
    'int64', 'quad', 'QUAD', 'INT64', '__int64', 'uint64', 'uquad', 'UQUAD', 'UINT64', 'QWORD', '__uint64',
    'float', 'FLOAT', 'double', 'DOUBLE', 'hfloat', 'HFLOAT', 'void',
    'string', 'wchar_t', 'wstring',
    'DOSDATE', 'DOSTIME', 'FILETIME', 'OLETIME', 'time_t', 'time64_t',
    'GUID', 'Opcode',
];

const KEYWORDS = [
    'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'default', 'break', 'continue', 'return',
    'local', 'const', 'signed', 'unsigned', 'typedef', 'struct', 'union', 'enum',
    'sizeof', 'startof', 'parentof', 'exists', 'function_exists', 'this',
];

const ATTRIBUTES = [
    'read', 'write', 'comment', 'format', 'fgcolor', 'bgcolor', 'style', 'open', 'hidden',
    'name', 'size', 'optimize', 'edit', 'pos', 'localpos', 'disasm', 'warn',
];

const COLOR_CONSTANTS = [
    'cBlack', 'cRed', 'cDkRed', 'cLtRed', 'cGreen', 'cDkGreen', 'cLtGreen',
    'cBlue', 'cDkBlue', 'cLtBlue', 'cPurple', 'cDkPurple', 'cLtPurple',
    'cAqua', 'cDkAqua', 'cLtAqua', 'cYellow', 'cDkYellow', 'cLtYellow',
    'cDkGray', 'cGray', 'cLtGray', 'cSilver', 'cWhite', 'cNone',
];

function builtinMarkdown(name: string): vscode.MarkdownString | undefined {
    const doc = BUILTIN_DOCS[name];
    if (!doc) return undefined;
    const md = new vscode.MarkdownString();
    md.appendCodeblock(doc.protos.join('\n'), 'c');
    md.appendMarkdown(doc.desc + '\n\n');
    md.appendMarkdown(`*${doc.category} function* — [010 Editor Manual](${MANUAL_BASE}${doc.page}#${name})`);
    return md;
}

class BtHoverProvider implements vscode.HoverProvider {
    provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.Hover | undefined {
        const range = document.getWordRangeAtPosition(position, /[A-Za-z_]\w*/);
        if (!range) return undefined;
        const word = document.getText(range);
        const md = builtinMarkdown(word);
        return md ? new vscode.Hover(md, range) : undefined;
    }
}

class BtCompletionProvider implements vscode.CompletionItemProvider {
    private items: vscode.CompletionItem[] = [];
    private attributeItems: vscode.CompletionItem[] = [];

    constructor() {
        for (const [name, doc] of Object.entries(BUILTIN_DOCS)) {
            const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Function);
            item.detail = doc.protos[0];
            const md = builtinMarkdown(name);
            if (md) item.documentation = md;
            this.items.push(item);
        }
        for (const t of TYPES) {
            this.items.push(new vscode.CompletionItem(t, vscode.CompletionItemKind.TypeParameter));
        }
        for (const k of KEYWORDS) {
            this.items.push(new vscode.CompletionItem(k, vscode.CompletionItemKind.Keyword));
        }
        for (const c of COLOR_CONSTANTS) {
            const item = new vscode.CompletionItem(c, vscode.CompletionItemKind.Color);
            item.detail = '010 Editor color constant';
            this.items.push(item);
        }
        for (const a of ATTRIBUTES) {
            const item = new vscode.CompletionItem(a, vscode.CompletionItemKind.Property);
            item.detail = `<${a}=...> variable attribute`;
            item.insertText = new vscode.SnippetString(`${a}=$0`);
            this.attributeItems.push(item);
        }
    }

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
    ): vscode.CompletionItem[] {
        // Inside an unclosed <...> attribute block, offer attribute names first.
        const prefix = document.lineAt(position.line).text.slice(0, position.character);
        const lastOpen = prefix.lastIndexOf('<');
        const inAttr = lastOpen >= 0
            && prefix.indexOf('>', lastOpen) === -1
            && /[\w\)\]\s]<[^<]*$/.test(prefix);
        return inAttr ? [...this.attributeItems, ...this.items] : this.items;
    }
}

const SYMBOL_KIND_MAP: { [K in BtSymbolKind]: vscode.SymbolKind } = {
    'struct': vscode.SymbolKind.Struct,
    'union': vscode.SymbolKind.Struct,
    'enum': vscode.SymbolKind.Enum,
    'enum-member': vscode.SymbolKind.EnumMember,
    'typedef': vscode.SymbolKind.Interface,
    'function': vscode.SymbolKind.Function,
};

class BtDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
    provideDocumentSymbols(document: vscode.TextDocument): vscode.DocumentSymbol[] {
        const toDocSymbol = (s: BtSymbol): vscode.DocumentSymbol => {
            const range = new vscode.Range(
                document.positionAt(s.start),
                document.positionAt(s.end)
            );
            const selection = new vscode.Range(
                document.positionAt(s.nameStart),
                document.positionAt(s.nameEnd)
            );
            const sym = new vscode.DocumentSymbol(
                s.name, s.detail, SYMBOL_KIND_MAP[s.kind], range, selection
            );
            sym.children = s.children.map(toDocSymbol);
            return sym;
        };
        try {
            return scanSymbols(document.getText()).map(toDocSymbol);
        } catch {
            return [];
        }
    }
}

export function activate(context: vscode.ExtensionContext): void {
    const selector: vscode.DocumentSelector = { language: LANG };
    context.subscriptions.push(
        vscode.languages.registerHoverProvider(selector, new BtHoverProvider()),
        vscode.languages.registerCompletionItemProvider(selector, new BtCompletionProvider()),
        vscode.languages.registerDocumentSymbolProvider(selector, new BtDocumentSymbolProvider(), {
            label: '010 Binary Template',
        })
    );
}

export function deactivate(): void {
    // nothing to clean up
}

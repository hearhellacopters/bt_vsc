// Lightweight symbol scanner for 010 Editor Binary Templates.
// Pure module (no vscode imports) so it can be tested in plain node.

export type BtSymbolKind =
    | 'struct'
    | 'union'
    | 'enum'
    | 'enum-member'
    | 'typedef'
    | 'function';

export interface BtSymbol {
    name: string;
    kind: BtSymbolKind;
    detail: string;
    /** offsets into the document text */
    start: number;
    end: number;
    nameStart: number;
    nameEnd: number;
    children: BtSymbol[];
}

/** Replace comment and string interiors with spaces, preserving offsets. */
export function blankCommentsAndStrings(text: string): string {
    const out = text.split('');
    let i = 0;
    const n = text.length;
    while (i < n) {
        const c = text[i];
        const c2 = i + 1 < n ? text[i + 1] : '';
        if (c === '/' && c2 === '/') {
            while (i < n && text[i] !== '\n') out[i++] = ' ';
        } else if (c === '/' && c2 === '*') {
            out[i++] = ' '; out[i++] = ' ';
            while (i < n && !(text[i] === '*' && text[i + 1] === '/')) {
                if (text[i] !== '\n') out[i] = ' ';
                i++;
            }
            if (i < n) { out[i++] = ' '; out[i++] = ' '; }
        } else if (c === '"' || c === '\'') {
            const quote = c;
            i++;
            while (i < n && text[i] !== quote && text[i] !== '\n') {
                if (text[i] === '\\') { out[i] = ' '; i++; if (i < n && text[i] !== '\n') out[i] = ' '; }
                else out[i] = ' ';
                i++;
            }
            if (i < n && text[i] === quote) i++;
        } else {
            i++;
        }
    }
    return out.join('');
}

function findMatchingBrace(blanked: string, openIdx: number): number {
    let depth = 0;
    for (let i = openIdx; i < blanked.length; i++) {
        if (blanked[i] === '{') depth++;
        else if (blanked[i] === '}') {
            depth--;
            if (depth === 0) return i;
        }
    }
    return blanked.length - 1;
}

function findMatchingParen(blanked: string, openIdx: number): number {
    let depth = 0;
    for (let i = openIdx; i < blanked.length; i++) {
        if (blanked[i] === '(') depth++;
        else if (blanked[i] === ')') {
            depth--;
            if (depth === 0) return i;
        }
    }
    return -1;
}

/** Index of next non-whitespace char at or after i, or -1. */
function nextNonWs(blanked: string, i: number): number {
    while (i < blanked.length && /\s/.test(blanked[i])) i++;
    return i < blanked.length ? i : -1;
}

const CONTROL_WORDS = new Set([
    'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'default',
    'return', 'break', 'continue', 'sizeof', 'startof', 'parentof', 'exists',
]);

function enumMembers(blanked: string, bodyStart: number, bodyEnd: number): BtSymbol[] {
    const members: BtSymbol[] = [];
    const body = blanked.slice(bodyStart, bodyEnd);
    const re = /([A-Za-z_]\w*)\s*(=\s*[^,}]*)?(?=,|$|\})/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(body)) !== null) {
        const name = m[1];
        if (!name) continue;
        const at = bodyStart + m.index;
        members.push({
            name,
            kind: 'enum-member',
            detail: (m[2] || '').replace(/\s+/g, ' ').trim(),
            start: at,
            end: at + name.length,
            nameStart: at,
            nameEnd: at + name.length,
            children: [],
        });
        // skip past the value expression so identifiers inside it aren't matched
        re.lastIndex = m.index + m[0].length;
    }
    return members;
}

export function scanSymbols(text: string): BtSymbol[] {
    const blanked = blankCommentsAndStrings(text);
    const flat: BtSymbol[] = [];

    // --- struct/union/enum definitions (named, and anonymous typedef form) ---
    {
        const re = /\b(typedef\s+)?(struct|union|enum)\b(\s*<[^>\n]*>)?(\s+([A-Za-z_]\w*))?/g;
        let m: RegExpExecArray | null;
        while ((m = re.exec(blanked)) !== null) {
            const isTypedef = !!m[1];
            const kind = m[2] as 'struct' | 'union' | 'enum';
            let name = m[5] || '';
            let nameStart = name ? m.index + m[0].lastIndexOf(name) : -1;

            // find the body: next '{' before any ';'
            const afterKeyword = m.index + m[0].length;
            let j = afterKeyword;
            // skip optional argument list: struct NAME( args ) {
            const nn = nextNonWs(blanked, j);
            if (nn !== -1 && blanked[nn] === '(') {
                const close = findMatchingParen(blanked, nn);
                if (close !== -1) j = close + 1;
            }
            let openBrace = -1;
            for (let i = j; i < blanked.length; i++) {
                const ch = blanked[i];
                if (ch === '{') { openBrace = i; break; }
                if (ch === ';' || ch === ',' || ch === ')' || ch === '(') break;
                if (ch === '}') break;
            }
            if (openBrace === -1) continue; // usage/forward decl, not a definition
            const closeBrace = findMatchingBrace(blanked, openBrace);

            // anonymous "typedef struct { ... } NAME" - name follows the close
            if (!name) {
                const after = blanked.slice(closeBrace + 1, closeBrace + 200);
                const nm = after.match(/^\s*([A-Za-z_]\w*)/);
                if (nm && nm[1]) {
                    name = nm[1];
                    nameStart = closeBrace + 1 + after.indexOf(nm[1]);
                } else if (!isTypedef) {
                    continue; // fully anonymous inline struct member, skip
                } else {
                    continue;
                }
            }

            const sym: BtSymbol = {
                name,
                kind,
                detail: isTypedef ? `typedef ${kind}` : kind,
                start: m.index,
                end: closeBrace + 1,
                nameStart,
                nameEnd: nameStart + name.length,
                children: [],
            };
            if (kind === 'enum') {
                sym.children = enumMembers(blanked, openBrace + 1, closeBrace);
            }
            flat.push(sym);
            if (kind === 'enum') re.lastIndex = closeBrace; // don't scan enum body
        }
    }

    // --- simple typedefs: typedef uint64 FILESIZE_T <attrs>; ---
    {
        const re = /\btypedef\s+(?!struct\b|union\b|enum\b)([A-Za-z_]\w*(?:\s+[A-Za-z_]\w*)*?)\s+([A-Za-z_]\w*)\s*((?:\[[^\]\n]*\]\s*)?(?:<[^>\n]*>\s*)?);/g;
        let m: RegExpExecArray | null;
        while ((m = re.exec(blanked)) !== null) {
            const name = m[2];
            const nameStart = m.index + m[0].indexOf(name, 'typedef'.length + m[1].length);
            flat.push({
                name,
                kind: 'typedef',
                detail: `typedef ${m[1].replace(/\s+/g, ' ')}`,
                start: m.index,
                end: m.index + m[0].length,
                nameStart,
                nameEnd: nameStart + name.length,
                children: [],
            });
        }
    }

    // --- function definitions: retType Name( args ) { ... } ---
    {
        const re = /^[ \t]*([A-Za-z_]\w*(?:[ \t]+[A-Za-z_]\w*)*)[ \t]+([A-Za-z_]\w*)[ \t]*\(/gm;
        let m: RegExpExecArray | null;
        while ((m = re.exec(blanked)) !== null) {
            const retType = m[1];
            const name = m[2];
            const firstWord = retType.split(/[ \t]+/)[0];
            if (CONTROL_WORDS.has(firstWord) || CONTROL_WORDS.has(name)) continue;
            if (firstWord === 'struct' || firstWord === 'union' || firstWord === 'enum' || firstWord === 'typedef') continue;
            const openParen = m.index + m[0].length - 1;
            const closeParen = findMatchingParen(blanked, openParen);
            if (closeParen === -1) continue;
            const after = nextNonWs(blanked, closeParen + 1);
            if (after === -1 || blanked[after] !== '{') continue; // declaration/instance, not a body
            const closeBrace = findMatchingBrace(blanked, after);
            const nameStart = m.index + m[0].indexOf(name, retType.length);
            flat.push({
                name,
                kind: 'function',
                detail: `${retType.replace(/\s+/g, ' ')} ${name}(${blanked.slice(openParen + 1, closeParen).replace(/\s+/g, ' ').trim()})`,
                start: m.index,
                end: closeBrace + 1,
                nameStart,
                nameEnd: nameStart + name.length,
                children: [],
            });
        }
    }

    // --- nest by containment ---
    flat.sort((a, b) => a.start - b.start || b.end - a.end);
    const roots: BtSymbol[] = [];
    const stack: BtSymbol[] = [];
    for (const sym of flat) {
        while (stack.length > 0 && sym.start >= stack[stack.length - 1].end) stack.pop();
        if (stack.length > 0 && sym.end <= stack[stack.length - 1].end) {
            stack[stack.length - 1].children.push(sym);
        } else {
            roots.push(sym);
        }
        stack.push(sym);
    }
    return roots;
}

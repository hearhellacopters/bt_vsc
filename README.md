# 010 Editor Binary Template — VS Code Extension (Unofficial)

Syntax highlighting and language support for [010 Editor](https://www.sweetscape.com/010editor/) Binary Template (`.bt`) files.

> **Disclaimer:** This is an **unofficial, community-made** extension. It is not affiliated with, endorsed by, or supported by SweetScape Software Inc. "010 Editor" is a product of SweetScape Software; all trademarks belong to their respective owners. This extension only provides editor language support for the `.bt` file format — function documentation shown on hover is derived from the [public online manual](https://www.sweetscape.com/010editor/manual/).

## Features

- **Full syntax highlighting** via a TextMate grammar (`source.010-bt`) using standard scopes, so it works out of the box with Dark+, Light+, Monokai, and every other VS Code theme:
  - C-style syntax: preprocessor directives, control flow, structs/unions/enums/typedefs, operators, numbers (hex, binary, octal, float, `1234h` style)
  - All 010 Editor data types and their aliases (`byte`/`ubyte`/`BYTE`, `WORD`/`DWORD`/`QWORD`, `int64`/`quad`, `hfloat`, `string`/`wstring`/`wchar_t`, `DOSDATE`, `DOSTIME`, `FILETIME`, `OLETIME`, `time_t`, `time64_t`, `GUID`, …)
  - Template-specific keywords: `local`, `const`, `sizeof`, `startof`, `parentof`, `exists`, `function_exists`, `this`
  - Variable attributes in angle brackets: `<read=…>`, `<write=…>`, `<format=hex>`, `<fgcolor=…>`, `<bgcolor=…>`, `<comment=…>`, `<name=…>`, `<open=…>`, `<hidden=…>`, `<size=…>`, `<optimize=…>`, `<style=…>`, `<edit=…>`, `<pos=…>`, `<localpos=…>`, `<disasm=…>`, `<warn=…>` — with attribute names, values, and expressions each scoped separately
  - ~350 built-in functions from the official manual (interface, I/O, math, string, and tool functions), e.g. `FSeek`, `FTell`, `ReadUInt`, `Printf`, `SPrintf`, `Checksum`, `FindAll`, `SetBackColor`
  - Built-in color constants (`cLtBlue`, `cDkRed`, `cNone`, …) and style constants (`sHeading1`, `sData`, …)
  - Comments, strings (incl. wide `L"…"` strings), escape sequences, and printf-style format placeholders
- **Language configuration**: comment toggling (`Ctrl+/`, `Shift+Alt+A`), auto-closing and surrounding brackets/quotes, indentation rules, `// region` folding markers
- **Hover documentation**: hover any of the ~390 built-in functions to see its real prototype and description extracted from the official manual, with a deep link to the relevant manual page
- **Completion**: built-in functions (with prototypes and docs), data types, keywords, color constants — and attribute names when the cursor is inside an unclosed `<...>` attribute block
- **Outline / breadcrumbs**: structs, unions, enums (with members), typedefs, and functions appear in the Outline view, breadcrumb bar, and `Ctrl+Shift+O`
- **Snippets**: template header block, `struct`/`tstruct`/`astruct`/`union`/`enum`, `tread` (custom type with read/write functions), `attr`, control-flow skeletons, `weof` (read-until-EOF loop)
- **Markdown embedding**: ` ```bt ` (or ` ```010editor `) fenced code blocks in Markdown files are highlighted with the full grammar

## Project layout

```
├── package.json                        Extension manifest — registers the
│                                       "010-binary-template" language for .bt
├── language-configuration.json         Brackets, comments, indent/fold rules
├── syntaxes/
│   ├── 010editor-bt.tmLanguage.json    TextMate grammar
│   └── markdown-bt-injection.json      Highlights ```bt fences in Markdown
├── snippets/010-bt.json                Snippets
├── src/
│   ├── extension.ts                    Hover, completion, outline providers
│   ├── builtinDocs.ts                  Generated: prototypes + descriptions
│   │                                   for ~390 built-ins, from the manual
│   └── symbols.ts                      Symbol scanner for the Outline view
├── images/icon.png                     Extension icon
├── .vscode/launch.json                 F5 debug target (Extension Dev Host)
└── samples/                            Real-world .bt templates for testing
    └── SyntaxShowcase.bt               Synthetic file exercising every rule
```

Build with `npm install` then `npm run compile` (or `npm run watch` during development).

## Try it

1. Open this folder in VS Code and run `npm install && npm run compile`.
2. Press `F5` (Run → Start Debugging) to launch an **Extension Development Host** window.
3. In the new window, open any file from `samples/` — e.g. `SyntaxShowcase.bt`, `PNG.bt`, or `ELF.bt`.
4. Hover a built-in like `FSeek` or `Printf`, press `Ctrl+Space` for completion, and `Ctrl+Shift+O` for the outline.
5. Use *Developer: Inspect Editor Tokens and Scopes* from the Command Palette to verify individual token scopes.

## Install locally

Package it with [vsce](https://code.visualstudio.com/api/working-with-extensions/publishing-extension):

```bash
npm install -g @vscode/vsce
```

```bash
vsce package
```

Then install the generated `.vsix` via *Extensions: Install from VSIX…* in the Command Palette, or:

```bash
code --install-extension 010-binary-template-0.1.0.vsix
```

> **Note:** before publishing to the Marketplace, change the `publisher` field in `package.json` to your own publisher ID.

## References

- [010 Editor — Introduction to Templates](https://www.sweetscape.com/010editor/manual/IntroTemplates.htm)
- [Data Types](https://www.sweetscape.com/010editor/manual/DataTypes.htm)
- [Template Variable Attributes](https://www.sweetscape.com/010editor/manual/TemplateVariables.htm)
- Function references: [Interface](https://www.sweetscape.com/010editor/manual/FuncInterface.htm), [I/O](https://www.sweetscape.com/010editor/manual/FuncIO.htm), [Math](https://www.sweetscape.com/010editor/manual/FuncMath.htm), [String](https://www.sweetscape.com/010editor/manual/FuncString.htm), [Tools](https://www.sweetscape.com/010editor/manual/FuncTools.htm)

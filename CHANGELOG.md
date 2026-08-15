# Changelog

## 0.2.0 — 2026-08-14

- Hover documentation for ~390 built-in functions: real prototypes and descriptions
  extracted from the official 010 Editor manual, with deep links to the manual pages
- Completion for built-in functions, data types, keywords, color constants, and
  attribute names (attribute names are prioritized inside unclosed `<...>` blocks)
- Outline / breadcrumbs / Go to Symbol: structs, unions, enums (with members),
  typedefs, and functions
- Snippets: template header, struct/union/enum variants, custom read/write typedef,
  attribute block, control-flow skeletons
- Markdown injection grammar: ` ```bt ` fenced code blocks are highlighted
- Extension icon

## 0.1.0 — 2026-08-14

- Initial release
- TextMate grammar for 010 Editor Binary Template (`.bt`) files
  - Full data type list (and aliases) from the official manual
  - Angle-bracket variable attributes (`<read=…>`, `<bgcolor=…>`, …)
  - ~350 built-in functions (interface, I/O, math, string, tools)
  - Color and style constants
- Language configuration: comment toggling, auto-closing pairs, indentation, folding

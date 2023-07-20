<p align="center" width="100%">
    <img src="https://github.com/r8/logseq-chess/raw/main/icon.png" alt="logseq-chess" width="128" height="128">
</p>

# Logseq Chess

A Logseq plugin for rendering chessboards

> 🛠 In development

### Usage

#### Chess Positions

Create chess fenced code block in your document and supply positions with `fen` property:

````markdown
```chess
fen: rnbqkbnr/pppp1ppp/8/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR b KQkq - 1 2
```
````

You can also draw the arrows on the board:

````markdown
```chess
fen: r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1
arrows: f3->e5 b5->c6
```
````

### Inspired by

- [Logseq Fenced Code Plus](https://github.com/xyhp915/logseq-fenced-code-plus)
- [Chess Viewer for VSCode](https://github.com/eronnen/vscode-markdown-chess)

### Icon

by [Izaz Mahmud Sakib / Noun Project](https://thenounproject.com/icon/chess-knight-4208923/)

### Licence

MIT

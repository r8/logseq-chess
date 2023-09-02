<p align="center" width="100%">
    <img src="https://github.com/r8/logseq-chess/raw/main/icon.png" alt="logseq-chess" width="128" height="128">
</p>

# Logseq Chess

A Logseq plugin for rendering chessboards

> 🛠 In development

## Usage

### Chess Positions

Create a chess fenced code block in your document and supply the positions with `fen` property:

````markdown
```chess
fen: rnbqkbnr/pppp1ppp/8/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR b KQkq - 1 2
```
````

You can also draw some arrows on the board, mark some squares and highlight the last move:

````markdown
```chess
fen: r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1
arrows: f3->e5 b5->c6
squares: g5 f7
lastMove: f1 b5
```
````

#### Properties

You can set various properties inside the code block, each one on a separate line in the format `name: value`.

| **Property**    | **Description**                                 | **Possible values**  | **Default**                                |
|-----------------|-------------------------------------------------|----------------------|--------------------------------------------|
| **fen**         | Chess position                                  | Any valid FEN string | Initial chess position                     |
| **arrows**      | Series of arrows to draw                        | e2->e4 d2->d4        | Empty                                      |
| **squares**     | Series of squares to mark                       | e5 d5                | Empty                                      |
| **lastMove**    | Highlight last move                             | e2 e4                | Undefined                                  |
| **size**        | Board width/height size in pixels or percents   | `400`, `50%`         | 280 pixels, overridable in plugin settings |
| **orientation** | Which side should be at the bottom of the board | `white` / `black`    | `white`                                    |
| **showToolbar** | Enables toolbar with orientation change control | `true` / `false`     | `false`                                    |

### Chess Moves

If you supply start position and `moves` property to the chess code block, it will become a move browser instead of static chessboard render.

In this case arrows and squares will be applied only to the starting position. And toolbar will be always visible, ignoring `showToolbar` value.

````markdown
``` chess
fen: r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4
moves: Ba4 Nf6 O-O b5 Bb3 Be7 Re1 d6
arrows: f3->e5 b5->c6
lastMove: f1 b5
startFrom: last
```
````

#### Properties

| **Property**    | **Description**                                                    | **Possible values**       | **Default**                                |
|-----------------|--------------------------------------------------------------------|---------------------------|--------------------------------------------|
| **fen**         | Initial position for the chain of moves                            | Any valid FEN string      | Initial chess position                     |
| **moves**       | The chain of valid moves                                           | Ba4 Nf6 O-O               | Empty                                      |
| **startFrom**   | Number of the move that should be set as current on initial render | `1`, `3`, `first`, `last` | Empty                                      |
| **arrows**      | Series of arrows to draw on the initial position                   | e2->e4 d2->d4             | Empty                                      |
| **squares**     | Series of squares to mark on the initial position                  | e5 d5                     | Empty                                      |
| **lastMove**    | Highlight last move on the initial position                        | e2 e4                     | Undefined                                  |
| **size**        | Board width/height size in pixels or percents                      | `400`, `50%`              | 280 pixels, overridable in plugin settings |
| **orientation** | Which side should be at the bottom of the board                    | `white` / `black`         | `white`                                    |

## Support

<a href="https://www.buymeacoffee.com/reight"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=reight&button_colour=40DCA5&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a>

## Inspired by

- [Logseq Fenced Code Plus](https://github.com/xyhp915/logseq-fenced-code-plus)
- [Chess Viewer for VSCode](https://github.com/eronnen/vscode-markdown-chess)

## Icon

by [Izaz Mahmud Sakib / Noun Project](https://thenounproject.com/icon/chess-knight-4208923/)

## Licence

[MIT](https://raw.githubusercontent.com/r8/logseq-chess/main/LICENSE)

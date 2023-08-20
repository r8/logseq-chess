import {
  BoardOrientation,
  Square,
} from "react-chessboard/dist/chessboard/types";
import { ARROW_SEPARATOR } from "../../constants/config";
import { Position } from "../../types";
import { Chess } from "chess.js";

class ChessConfig {
  private fen?: string;
  private arrows?: Square[][];
  private squares?: Square[];
  private lastMove?: Square[];
  private moves: string[] = [];

  public size?: string;
  public orientation: BoardOrientation = "white";
  public showToolbar: boolean = false;
  public positions: Position[] = [];

  constructor(content: string) {
    this.parse(content);
  }

  private parse = (content: string) => {
    const lines = content.split(/(\r\n|\n|\r)/);

    lines.forEach(this.parseLine);

    this.fillPositions();

    if (this.positions.length > 1) {
      this.showToolbar = true;
    }
  };

  private parseLine = (line: string) => {
    if (!line.trim()) {
      return;
    }

    const parts = line.split(":").map((item) => item.trim());
    const token = parts[0].toLowerCase().replace("_", "");
    const value = parts[1];

    switch (token) {
      case "fen":
        this.fen = value;
        break;
      case "arrows":
        this.arrows = this.parseArrows(value);
        break;
      case "squares":
        this.squares = this.parseSquares(value);
        break;
      case "lastmove":
        this.lastMove = this.parseSquares(value, 2);
        break;
      case "size":
        this.size = value;
        break;
      case "orientation":
        this.orientation = this.parseOrientation(value);
        break;
      case "showtoolbar":
        this.showToolbar = this.parseBoolean(value);
        break;
      case "moves":
        this.moves = this.parseMoves(value);
        break;
    }
  };

  private parseArrows = (line: string) => {
    const arrows = [];

    const items = line.split(" ").map((item) => item.trim());

    items.forEach((item) => {
      const parts = item.split(ARROW_SEPARATOR);
      arrows.push(parts as Square[]);
    });

    return arrows;
  };

  private parseSquares = (line: string, limit: number = null): Square[] => {
    let items = line.split(" ").map((item) => item.trim() as Square);

    if (limit) {
      return items.slice(0 - limit);
    }

    return items;
  };

  private parseOrientation = (line: string): BoardOrientation => {
    return line == "black" ? "black" : "white";
  };

  private parseBoolean = (line: string): boolean => {
    return line == "true";
  };

  private parseMoves = (line: string): string[] => {
    return line.split(" ").map((item) => item.trim());
  };

  private fillPositions() {
    this.positions = [
      {
        fen: this.fen,
        arrows: this.arrows,
        squares: this.squares,
        lastMove: this.lastMove,
      },
    ];

    const chess = new Chess(this.fen);

    this.moves.forEach((move) => chess.move(move));

    chess.history({ verbose: true }).forEach((step) => {
      this.positions.push({
        fen: step.after,
        lastMove: [step.from, step.to],
      });
    });
  }
}

export default ChessConfig;

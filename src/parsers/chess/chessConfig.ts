import { Square } from "react-chessboard/dist/chessboard/types";
import { ARROW_SEPARATOR } from "../../constants/config";

class ChessConfig {
  public fen?: string;
  public arrows?: Square[][];
  public squares?: Square[];
  public lastMove?: Square[];
  public size?: string;

  constructor(content: string) {
    this.parse(content);
  }

  private parse = (content: string) => {
    const lines = content.split(/(\r\n|\n|\r)/);

    lines.forEach(this.parseLine);
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
}

export default ChessConfig;

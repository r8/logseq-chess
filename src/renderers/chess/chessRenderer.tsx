import React from "react";
import Chessboard from "../../components/chessboard/chessboard";
import ChessConfig from "../../parsers/chess/chessConfig";
import Renderer from "../renderer";
import { ISettings } from "../../settingsSchema";

class ChessRenderer extends Renderer {
  supports = "chess";

  render = (settings: ISettings, props: { content: string }) => {
    const { content } = props;
    let size: number | string = settings.boardSize;

    const chessConfig = new ChessConfig(content);

    if (chessConfig.size) {
      size = chessConfig.size;
    }

    if (typeof size == "string" && Number.parseInt(size).toString() === size) {
      size = Number.parseInt(size);
    }

    return (
      <div style={{ width: size }}>
        <Chessboard
          position={chessConfig.fen}
          customArrows={chessConfig.arrows}
          markSquares={chessConfig.squares}
        />
      </div>
    );
  };
}

export default ChessRenderer;

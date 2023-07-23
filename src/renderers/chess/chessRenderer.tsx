import "@logseq/libs";
import React from "react";
import { Chessboard } from "react-chessboard";
import ChessConfig from "../../parsers/chess/chessConfig";
import Renderer from "../renderer";
import { ISettings } from "../../settingsSchema";

class ChessRenderer extends Renderer {
  supports = "chess";

  render = (props: { content: string }) => {
    const { content } = props;
    let size: number | string = this.settings.boardSize;

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
        />
      </div>
    );
  };
}

export default ChessRenderer;

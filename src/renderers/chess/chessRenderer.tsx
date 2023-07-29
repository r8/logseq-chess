import React from "react";
import Chessboard from "../../components/chessboard/chessboard";
import ChessConfig from "../../parsers/chess/chessConfig";
import Renderer from "../renderer";
import { ISettings } from "../../settingsSchema";
import { ARROW_COLOR } from "../../constants/colors";
import { Provider } from "jotai";
import SizeWatcher from "../../components/layout/sizeWatcher";

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
        <Provider>
          <SizeWatcher>
            <Chessboard
              position={chessConfig.fen}
              customArrows={chessConfig.arrows}
              customArrowColor={ARROW_COLOR}
              markSquares={chessConfig.squares}
              highlightSquares={chessConfig.lastMove}
            />
          </SizeWatcher>
        </Provider>
      </div>
    );
  };
}

export default ChessRenderer;

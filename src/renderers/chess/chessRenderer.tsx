import React from "react";
import Chessboard from "../../components/chessboard/chessboard";
import ChessConfig from "../../parsers/chess/chessConfig";
import Renderer from "../renderer";
import { ISettings } from "../../settingsSchema";
import { Provider } from "jotai";
import SizeWatcher from "../../components/observers/sizeWatcher";
import ThemeWatcher from "../../components/observers/themeWatcher";
import HydrateAtoms from "../../store/hydrateAtoms";
import { boardOrientationAtom } from "../../store/boardOrientationAtom";
import Toolbar from "../../components/toolbar/toolbar";
import { positionsAtom } from "../../store/positions/positionsAtom";
import { currentPositionIndexAtom } from "../../store/positions/currentPositionIndexAtom";

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
          <HydrateAtoms
            initialValues={[
              [boardOrientationAtom, chessConfig.orientation],
              [positionsAtom, chessConfig.positions],
              [currentPositionIndexAtom, chessConfig.initialPosition],
            ]}
          >
            <ThemeWatcher />
            <SizeWatcher>
              <Chessboard />
              {chessConfig.showToolbar && <Toolbar />}
            </SizeWatcher>
          </HydrateAtoms>
        </Provider>
      </div>
    );
  };
}

export default ChessRenderer;

import "@logseq/libs";
import { LSPluginBaseInfo } from "@logseq/libs/dist/LSPlugin";
import ChessRenderer from "~/renderers/chess/chessRenderer";
import Renderer from "~/renderers/renderer";

function main(baseInfo: LSPluginBaseInfo) {
  const renderers: Renderer[] = [new ChessRenderer()];

  for (const renderer of renderers) {
    logseq.Experiments.registerFencedCodeRenderer(renderer.supports, {
      edit: false,
      render: renderer.render,
    });
  }
}

logseq.ready(main).catch(console.error);

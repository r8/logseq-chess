import "@logseq/libs";
import { LSPluginBaseInfo } from "@logseq/libs/dist/LSPlugin";
import ChessRenderer from "./renderers/chess/chessRenderer";
import Renderer from "./renderers/renderer";
import { settingsSchema, ISettings } from "./settingsSchema";

function main(baseInfo: LSPluginBaseInfo) {
  const { settings } = baseInfo;

  const renderers: Renderer[] = [new ChessRenderer(settings as ISettings)];

  for (const renderer of renderers) {
    logseq.Experiments.registerFencedCodeRenderer(renderer.supports, {
      edit: true,
      render: renderer.render,
    });
  }
}

logseq.useSettingsSchema(settingsSchema).ready(main).catch(console.error);

import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin";
import { DEFAULT_BOARD_SIZE } from "./constants/config";

export const settingsSchema: Array<SettingSchemaDesc> = [
  {
    key: "boardSize",
    type: "string",
    title: "Board size",
    description: "Size in pixels or percentage. Default: 280",
    default: DEFAULT_BOARD_SIZE,
  },
];

export interface ISettings {
  disabled: boolean;
  boardSize: string;
}

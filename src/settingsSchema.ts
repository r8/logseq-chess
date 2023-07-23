import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin";

export const settingsSchema: Array<SettingSchemaDesc> = [
  {
    key: "boardSize",
    type: "string",
    title: "Board size",
    description: "Size in pixels or percentage. Default: 280",
    default: 280,
  },
];

export interface ISettings {
  disabled: boolean;
  boardSize: string;
}

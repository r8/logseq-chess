import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin";

export default [
  {
    key: "boardSize",
    type: "string",
    title: "Board size",
    description: "Size in pixels or percentage. Default: 280",
    default: 280,
  },
] as Array<SettingSchemaDesc>;

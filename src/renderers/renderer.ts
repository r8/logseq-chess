import { ISettings } from "../settingsSchema";

abstract class Renderer {
  readonly settings: ISettings;

  public abstract supports: string;

  constructor(settings: ISettings) {
    this.settings = settings;
  }

  public abstract render: (props: { content: string }) => JSX.Element;
}

export default Renderer;

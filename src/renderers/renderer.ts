import { ISettings } from "../settingsSchema";

abstract class Renderer {
  public abstract supports: string;
  public abstract render: (
    settings: ISettings,
    props: { content: string },
  ) => JSX.Element;
}

export default Renderer;

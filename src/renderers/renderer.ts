abstract class Renderer {
  public abstract supports: string;
  public abstract render: (props: { content: string }) => JSX.Element;
}

export default Renderer;

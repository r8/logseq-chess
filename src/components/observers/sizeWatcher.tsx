import { useEffect, useRef } from "react";
import { useSetAtom } from "jotai";
import { containerSizeAtom } from "../../store/containerSizeAtom";

const SizeWatcher = (props) => {
  const { children } = props;

  const setContainerSize = useSetAtom(containerSizeAtom);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref?.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver((event) => {
      const size = event[0].contentBoxSize[0].inlineSize;

      setContainerSize(size);
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default SizeWatcher;

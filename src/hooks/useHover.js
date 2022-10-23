import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleHoverMouseOver = () => {
      setHovered(true);
    };
    const handleHoverMouseOut = () => {
      setHovered(false);
    };
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleHoverMouseOver);
      dom.addEventListener("mouseout", handleHoverMouseOut);
    }
    return () => {
      dom.removeEventListener("mouseover", handleHoverMouseOver);
      dom.removeEventListener("mouseout", handleHoverMouseOut);
    };
  }, []);
  return {
    hovered,
    nodeRef,
  };
}

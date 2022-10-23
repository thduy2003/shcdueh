import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleMouseOver = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <div>
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span
        className="font-semibold"
        ref={nodeRef}
        onMouseOver={handleMouseOver}
      >
        {text}
      </span>
    </div>
  );
  function TooltipContent({ children, coords }) {
    return ReactDOM.createPortal(
      <p
        className="absolute inline-block p-3 text-white -translate-y-full -translate-x-2/4 bg-black rounded-xl max-w-[200px]"
        style={{
          left: coords.left + coords.width / 2,
          top: coords.top - coords.height / 2 + window.scrollY,
        }}
      >
        {children}
      </p>,
      document.querySelector("body")
    );
  }
};

export default Tooltip;

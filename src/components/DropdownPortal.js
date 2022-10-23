import React, { useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import ReactDOM from "react-dom";

const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [coords, setCoords] = useState({});
  const handleClick = (e) => {
    console.log(nodeRef.current.getBoundingClientRect());
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div className="relative w-full max-w-[400px] " ref={nodeRef}>
      <div
        onClick={handleClick}
        className="w-full p-5 border border-gray-300 rounded-lg cursor-pointer "
      >
        Slected
      </div>
      {show && <DropDownList coords={coords}></DropDownList>}
    </div>
  );
};
function DropDownList({ coords }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="absolute left-0 w-full bg-white border border-gray-200 rounded-lg top-full"
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY,
        width: coords.width,
      }}
    >
      <div className="p-5 cursor-pointer">Javascript</div>
      <div className="p-5 cursor-pointer">ReactJs</div>
      <div className="p-5 cursor-pointer">VueJs</div>
    </div>,
    document.querySelector("body")
  );
}

export default DropdownPortal;

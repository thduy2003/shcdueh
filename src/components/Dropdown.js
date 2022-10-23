import React from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const Dropdown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative w-full max-w-[400px] ">
      <div
        ref={nodeRef}
        onClick={() => setShow(!show)}
        className="w-full rounded-lg border border-gray-300 cursor-pointer p-5 "
      >
        Slected
      </div>
      {show && (
        <div className="border border-gray-200 absolute top-full left-0 w-full rounded-lg bg-white">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJs</div>
          <div className="p-5 cursor-pointer">VueJs</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

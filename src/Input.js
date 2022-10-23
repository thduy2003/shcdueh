import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return (
    <div className="div-ref">
      <input
        ref={inputRef}
        type="text"
        placeholder="auto focus"
        className="inline-block p-5 border border-gray-200 focus:border-blue-400 outline-none"
      />
    </div>
  );
};

export default Input;

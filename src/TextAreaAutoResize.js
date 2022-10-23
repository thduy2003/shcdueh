import React, { useEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("demo");
  const [heightTextArea, setHeightTextArea] = useState("auto");
  const textAreaRef = useRef(null);

  const handleChange = (e) => {
    // ở đây setAuto vì nếu mà bỏ cái đoạn `${textAreaRef?.current?.scrollHeight}px` vô đây thì khi mình xóa thì nó set chiều cao nó thu nhỏ lại lun
    setHeightTextArea("auto");
    setText(e.target.value);
  };
  useEffect(() => {
    setHeightTextArea(`${textAreaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5">
      <textarea
        placeholder="Text area auto resize"
        className="transition-all resize-none leading-normal w-full max-w-[500px] p-5 border border-gray-300 focus:border-blue-300 rounded-lg overflow-hidden"
        ref={textAreaRef}
        value={text}
        onChange={handleChange}
        style={{ height: heightTextArea }}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;

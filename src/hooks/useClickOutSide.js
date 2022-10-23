import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    const handleClickOutSide = (e) => {
      //Kiểm tra xem tồn tại Ref không nếu có thì kiểm tra tiếp xem nó không chứa cái mình bấm vào thì tắt show ra
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  });
  return {
    show,
    setShow,
    nodeRef,
  };
}

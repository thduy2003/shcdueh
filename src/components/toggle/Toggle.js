import React, { useState } from "react";
import "./ToggleStyle.css";
function Toggle() {
  const [on, setOn] = useState(false);
  function handleToggle() {
    setOn((on) => !on);
  }
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
}
export default Toggle;

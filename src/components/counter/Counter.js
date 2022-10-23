import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    firstName: "DUY",
    lastName: "HOANG",
  });
  useEffect(() => {
    console.log("info more");
  }, [info.firstName]);
  return (
    <div className="flex p-5 items-center gap-x-4">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
      />
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 text-white bg-green-400"
      >
        Increment
      </button>
    </div>
  );
}
export default Counter;

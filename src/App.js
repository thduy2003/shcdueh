import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.scss";
import { cauhoi } from "./data/cauhoi";

function App() {
  const [value, setValue] = useState([]);
  const [question, setQuestion] = useState("");
  useEffect(() => {
    setValue(cauhoi);
  }, []);
  return (
    <div className="w-full max-w-[1000px] mx-auto shadow-md p-10 mt-10">
      <h1 className="flex justify-center items-center">SHCD UEH 2022</h1>
      <h4 className="flex justify-center items-center">By Tran Hoang Duy </h4>
      <input
        className="w-full mb-5 border border-gray-600 outline-0 p-5"
        type="text"
        name="question"
        placeholder="Search câu hỏi ở đây nha"
        onChange={(e) => setQuestion(e.target.value)}
      />
      {question.length > 0 &&
        value.map((e, i) => (
          <>
            <div key={i}>
              {e.question.toLowerCase().includes(question.toLowerCase()) ? (
                <div>Câu hỏi: {e.question}</div>
              ) : (
                ""
              )}
            </div>
            <div className="text-green-600" key={e.id}>
              {e.question.toLowerCase().includes(question.toLowerCase()) ? (
                <div>Đáp án: {e.answer}</div>
              ) : (
                ""
              )}
            </div>
          </>
        ))}
    </div>
  );
}

export default App;

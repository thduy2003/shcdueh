import React, { useReducer } from "react";
const initialState = {
  jobs: [],
  inputValue: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE": {
      return {
        ...state,
        inputValue: action.payload,
      };
    }

    case "ADD_JOB": {
      return {
        ...state,

        jobs: [...state.jobs, action.payload],
      };
    }
    case "DELETE_JOB": {
      const newJob = [...state.jobs];
      newJob.splice(action.payload, 1);
      return {
        ...state,
        jobs: [...newJob],
      };
    }
    case "DONE_JOB": {
      const doneJob = [...state.jobs];
      const newDoneJob = doneJob.map((job, index) =>
        index === action.payload ? { ...job, isCompleted: true } : job
      );
      console.log(newDoneJob);
      return {
        ...state,
        jobs: [...newDoneJob],
      };
    }
    default:
      break;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { jobs, inputValue } = state;
  // const { isCompleted } = jobs;
  const handleAddJobs = (input) => {
    dispatch({
      type: "ADD_JOB",
      payload: {
        isCompleted: false,
        nameJobs: input,
      },
    });
    dispatch({
      type: "SET_INPUT_VALUE",
      payload: "",
    });
  };
  const handleDeleteJob = (index) => {
    dispatch({
      type: "DELETE_JOB",
      payload: index,
    });
  };
  const handleDoneJob = (index) => {
    dispatch({
      type: "DONE_JOB",
      payload: index,
    });
  };

  return (
    <div className="w-1/4 mx-auto">
      <div className="flex mt-5 w-full shadow-md">
        <input
          type="text"
          value={inputValue}
          className="outline-none w-full border-green-400  border-2"
          onChange={(e) => {
            dispatch({
              type: "SET_INPUT_VALUE",
              payload: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            handleAddJobs(inputValue);
          }}
          className="bg-blue-400 text-white font-semibold p-2"
        >
          Add
        </button>
      </div>
      <div className="w-full bg-white shadow-lg">
        {jobs.map((item, index) => (
          <div className="flex justify-between w-full p-2 ">
            <button
              className={`${item.isCompleted ? "line-through" : ""}`}
              key={index}
            >
              {item.nameJobs}
            </button>
            <div>
              <span
                onClick={() => handleDoneJob(index)}
                className={
                  "border-2 p-1 mr-1 border-green-200 content-center hover:bg-green-400"
                }
              >
                Đã làm
              </span>
              <span
                onClick={() => {
                  handleDeleteJob(index);
                }}
                className="border-2 p-1 border-red-200 content-center hover:bg-red-400"
              >
                Xóa
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

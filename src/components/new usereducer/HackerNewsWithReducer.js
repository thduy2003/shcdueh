import React, { useEffect, useReducer, useRef } from "react";
import axios from "axios";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }
    default:
      break;
  }
};
const HackerNewsWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { hits, query, loading, errorMessage, url } = state;
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(url);
      dispatch({
        type: "SET_DATA",

        payload: response.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_ERROR",
        payload: `The error ${error}`,
      });
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return (
    <div className="bg-white rounded-lg mt-5 mb-5 p-5 shadow-md mx-auto w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-lg focus:border-blue-400 transition-all outline-none"
          placeholder="Typing your keyword"
          defaultValue={query}
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
        />
        <button
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${query}`,
            })
          }
          disabled={state.loading}
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
          style={{
            opacity: state.loading ? "0.25" : "1",
          }}
        >
          Fetching
        </button>
      </div>

      {loading && (
        <div className="loading w-10 h-10 rounded-full border-green-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-4"></div>
      )}
      {!loading && errorMessage && <p>{errorMessage}</p>}

      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h2 key={index} className="bg-gray-100 p-3 rounded-md">
                {item.title}
              </h2>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithReducer;

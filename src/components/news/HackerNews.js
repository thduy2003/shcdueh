import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// import lodash from "lodash";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuerry] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  const isMounted = useRef(true);
  useEffect(() => {
    // unmounted
    return () => {
      isMounted.current = false;
    };
  });
  const handleFetchData = useRef({});
  handleFetchData.current = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setTimeout(() => {
        if (isMounted.current) {
          setHits(response.data?.hits);
          setLoading(false);
        }
      }, 3000);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error ${error}`);
    }
  };
  //   const handleUpdateQuerry = lodash.debounce((e) => {
  //     setQuerry(e.target.value);
  //   }, 1000);
  useEffect(() => {
    handleFetchData.current();
  }, [url]); // Truyền url ở đây tức là nó lấy query dưới lên rồi nên không cần truyền tham số cho handleFetchData
  return (
    <div className="bg-white rounded-lg mt-5 mb-5 p-5 shadow-md mx-auto w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-lg focus:border-blue-400 transition-all outline-none"
          placeholder="Typing your keyword"
          defaultValue={query}
          onChange={(e) => {
            setQuerry(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
          }}
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
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

export default HackerNews;

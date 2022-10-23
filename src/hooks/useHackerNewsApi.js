import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsApi(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(initialUrl);
  const isMounted = useRef(true);
  useEffect(() => {
    // unmounted
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  const handleFetchData = useRef({});
  handleFetchData.current = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (isMounted.current) {
        setData(response.data || []);
        setLoading(false);
      }
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
  return {
    loading,
    setUrl,
    errorMessage,
    data,
  };
}

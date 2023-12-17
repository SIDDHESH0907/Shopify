// useFetchApi.js
import { useState, useEffect } from "react";

const useFetchApi = (initialUrl) => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(initialUrl);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, setUrl };
};

export default useFetchApi;

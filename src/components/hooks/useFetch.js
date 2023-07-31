import { useEffect, useState } from "react";

const useFetch = ( url, option ) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, option);
        const resData = await response.json();
        setData(resData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;

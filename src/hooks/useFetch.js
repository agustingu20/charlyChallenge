import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const axiosFunction = async () => {
    const { data } = await axios(url);
    setDataFetch({
      loading: false,
      data,
    });
  };
  useEffect(() => {
    axiosFunction();
  }, [url]);
  return dataFetch;
};

export default useFetch;

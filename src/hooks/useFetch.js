import { useState, useEffect } from 'react';
import request from '../api/request';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    request
      .get(url)
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [isLoading, isError, data];
};

export default useFetch;

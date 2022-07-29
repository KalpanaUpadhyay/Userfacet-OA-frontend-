import { useState, useEffect } from "react";

import got from "../API/got";

const useFetch = () => {
  const [data, setData] = useState({
    slug: "",
    results: []
  });

  useEffect(() => {
    if (data.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await got.get(`/${data.slug}`);
            setData({ AbortSignal, results: res.data });
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data.slug]); //coming dependency error in my system due to which it is not able to render the API

  return { data, setData };
};

export default useFetch;

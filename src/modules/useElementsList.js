import { useEffect, useState } from "react";
import { getList } from "./getList";

export const useElementsList = (route) => {
  const [list, setList] = useState(
    sessionStorage.list ? JSON.parse(sessionStorage.list) : []
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchElements();
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(route, JSON.stringify(list));
  }, [list]);

  function fetchElements() {
    getList(route)
      .then(setList)
      .then(() => {
        setLoading(true);
      });
  }

  return { list, loading, fetchElements };
};

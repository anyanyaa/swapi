import { useEffect, useState } from "react";
import { getPeopleList } from "../services/peopleService";

export const usePeople = () => {
  const [list, setList] = useState(
    sessionStorage.list ? JSON.parse(sessionStorage.list) : []
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPeople();
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  function fetchPeople() {
    console.log("onemore");
    getPeopleList()
      .then(setList)
      .then(() => {
        setLoading(true);
      });
  }

  return { list, loading, fetchPeople };
};

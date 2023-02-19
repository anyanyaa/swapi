import { useEffect, useState } from "react";
import { getPeopleList } from "../services/peopleService";

export const usePeople = () => {
  const [list, setList] = useState(
    sessionStorage.list ? JSON.parse(sessionStorage.list) : []
  );

  useEffect(() => {
    fetchPeople();
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  function fetchPeople() {
    getPeopleList().then(setList);
  }

  return { list, fetchPeople };
};

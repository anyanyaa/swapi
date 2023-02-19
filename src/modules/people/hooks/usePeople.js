import { useEffect, useState } from "react";
import { getPeopleList } from "../services/peopleService";

export const usePeople = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  function fetchPeople() {
    getPeopleList().then(setList);
  }

  return { list, fetchPeople };

  // function fetchPeople() {
  //     getPeopleList()
  //         .then((data) => {
  //             console.log(data)
  //             setList(data)
  //         })
  // }
};

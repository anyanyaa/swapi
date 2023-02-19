//?

import { useEffect, useState } from "react";
import { getPersonDetails } from "../services/peopleService";

export const usePersonDetails = (id) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetchPerson();
  }, [id]);

  function fetchPerson() {
    getPersonDetails(id).then(setDetails);
  }

  return { details };
};

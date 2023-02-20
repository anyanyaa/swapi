import { useEffect, useState } from "react";
import { getPersonDetails } from "../services/peopleService";

export const usePersonDetails = (id) => {
  const [details, setDetails] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.sessionStorage.setItem("details", JSON.stringify(details));
  }, [details]);

  useEffect(() => {
    fetchPerson();
  }, [id]);

  function fetchPerson() {
    getPersonDetails(id)
      .then(setDetails)
      .then(() => {
        setLoading(true);
      });
  }

  return { details, loading };
};

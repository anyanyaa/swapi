import { useEffect, useState } from "react";
import { getPersonDetails } from "../services/peopleService";
import { useCustomNavigate } from "../../common/hooks/useCustomNavigate";

export const usePersonDetails = (id) => {
  const [details, setDetails] = useState({});

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const navigate = useCustomNavigate();

  useEffect(() => {
    if (error === true) {
      return navigate.navigateToPage("/notfound");
    }
  }, [error]);

  useEffect(() => {
    window.sessionStorage.setItem("details", JSON.stringify(details));
  }, [details]);

  useEffect(() => {
    fetchPerson();
  }, [id]);

  function fetchPerson() {
    getPersonDetails(id, setError)
      .then(setDetails)
      .then(() => {
        setLoading(true);
      });
  }

  return { details, loading, error };
};

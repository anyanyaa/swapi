import { useEffect, useState } from "react";
import { useCustomNavigate } from "./common/hooks/useCustomNavigate";
import { getElementDetails } from "./getList";

export const useDetails = (id) => {
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
    fetchElement();
  }, [id]);

  function fetchElement() {
    getElementDetails("films", id, setError)
      .then(setDetails)
      .then(() => {
        setLoading(true);
      });
  }

  return { details, loading, error };
};

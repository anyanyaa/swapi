import { useEffect, useState } from "react";
import { useCustomNavigate } from "./common/hooks/useCustomNavigate";
import { getElementDetails } from "./getList";

export const useDetails = (id, route) => {
  const [details, setDetails] = useState(
    sessionStorage[`${route}${id}`]
      ? JSON.parse(sessionStorage[`${route}${id}`])
      : []
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useCustomNavigate();

  useEffect(() => {
    if (error === true) {
      return navigate.navigateToPage("/notfound");
    }
  }, [error]);

  useEffect(() => {
    window.sessionStorage.setItem(`${route}${id}`, JSON.stringify(details));
  }, [details]);

  useEffect(() => {
    fetchElement();
  }, [id]);

  function fetchElement() {
    getElementDetails(route, id, setError)
      .then(setDetails)
      .then(() => {
        setLoading(true);
      });
  }

  return { details, loading, error };
};

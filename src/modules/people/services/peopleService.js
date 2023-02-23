import api from "../../../api";

export const getPeopleList = () => {
  return api.get("people").then((response) => {
    return response.data.results;
  });
};

export const getPersonDetails = (id, setError) => {
  return api
    .get(`people/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err) {
        console.log(err.message);
        setError(true);
        return err;
      }
    });
};

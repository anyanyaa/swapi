import api from "../../../api";

export const getPeopleList = () => {
  return api.get("people").then((response) => {
    return response.data.results;
  });
};

//?

export const getPersonDetails = (id) => {
  return api.get(`people/${id}`).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

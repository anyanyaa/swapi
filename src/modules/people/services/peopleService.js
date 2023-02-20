import api from "../../../api";
import React from "react";

export const getPeopleList = () => {
  return api.get("people").then((response) => {
    return response.data.results;
  });
};

export const getPersonDetails = (id) => {
  return api
    .get(`people/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err) {
        console.log("404 error");
        console.log(document.location);
        return;
      }
    });
};

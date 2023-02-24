import api from "../api";

export const getList = (route) => {
  return api.get(`${route}`).then((response) => {
    return response.data.results;
  });
};

export const getElementDetails = (route, id, setError) => {
  console.log("getelementsdet");
  return api
    .get(`${route}/${id}`)
    .then((response) => {
      console.log(response.data);
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

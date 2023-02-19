import axios from "axios";

const API_URL = "https://swapi.dev/api/";

export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

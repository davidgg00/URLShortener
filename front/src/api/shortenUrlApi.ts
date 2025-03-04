import axios from "axios";

const shortenUrlApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "/api/shorten",
});

export default shortenUrlApi;

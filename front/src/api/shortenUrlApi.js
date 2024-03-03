import axios from "axios";

const shortenUrlApi = axios.create({
  baseURL: /* import.meta.env.VUE_APP_API_URL + */ "http://localhost:8000/api/shorten",
});

export default shortenUrlApi;

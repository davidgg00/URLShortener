import axios from "axios";

const shortenUrlApi = axios.create({
  baseURL: process.env.VUE_APP_API_URL + "/api/shorten",
});

export default shortenUrlApi;

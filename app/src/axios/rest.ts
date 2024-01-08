import axios from "axios";

const rest = axios.create({
  baseURL: "http://localhost:5107/rest/v1/",
  timeout: 1000,
});

export default rest;

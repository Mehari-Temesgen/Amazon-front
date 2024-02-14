import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://amazon-server-vqks.onrender.com",
});

export default instance;

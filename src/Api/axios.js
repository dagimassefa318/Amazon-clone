import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-4c255/us-central1/api",

  baseURL: "(http://127.0.0.1:5001/clone-b9284/us-central1/api)",
  // local amazon api serer

  // deployed version of firebase function
  //   baseURL:
});

export { axiosInstance };

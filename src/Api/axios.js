import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-4c255/us-central1/api",

  baseURL: "https://amazon-backend-9xop.onrender.com",
  // local amazon api serer

  // deployed version of firebase function
  //   baseURL:

  //   // deployed version of amazon server on render.com
  //   // baseURL:
});

export { axiosInstance };

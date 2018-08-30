import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-f30c3.firebaseio.com/"
});

export default instance;

import axios from "axios";

const Instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "34d9d42ba8d4e2ea7e50a13c3d6eda0b",
  },
});
export default Instance;

import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-movie-recommender-backend-1.onrender.com/api",
});

export default API;
import axios from "axios";

export const api = axios.create({
  baseURL: "https://graphqlzero.almansi.me/api",
  headers: {
    "Content-Type": "application/json",
  },
});

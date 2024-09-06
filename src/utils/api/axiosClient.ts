import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://5fc9346b2af77700165ae514.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

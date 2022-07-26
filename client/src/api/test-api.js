import axios from "axios";

export const fetchTestData = () => {
  return axios.get("http://api/test");
};

import axios from "axios";
const secureAxios = axios.create({
  baseURL: ["http://localhost:5000"],
  withCredentials: true,
});

const useSecureAxios = () => {
  return secureAxios;
};

export default useSecureAxios;

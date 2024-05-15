import axios from "axios";
const secureAxios = axios.create({
  baseURL: "https://b9a11-server-side-shahin-hossain-dev.vercel.app",
  withCredentials: true,
});

const useSecureAxios = () => {
  return secureAxios;
};

export default useSecureAxios;

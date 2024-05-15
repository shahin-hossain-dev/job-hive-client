import axios from "axios";

const commonAxios = axios.create({
  baseURL: "https://b9a11-server-side-shahin-hossain-dev.vercel.app",
});

const useCommonAxios = () => {
  return commonAxios;
};

export default useCommonAxios;

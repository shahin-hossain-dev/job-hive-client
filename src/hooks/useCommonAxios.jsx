import axios from "axios";

const commonAxios = axios.create({
  baseURL: "http://localhost:5000",
});

const useCommonAxios = () => {
  return commonAxios;
};

export default useCommonAxios;

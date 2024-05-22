import axios from "axios";
export const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-iota-pied.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;

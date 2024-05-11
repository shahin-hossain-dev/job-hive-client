import axios from "axios";
import TabAllJob from "./TabAllJob";
import { useQuery } from "@tanstack/react-query";
const TabAllJobs = () => {
  const url = "http://localhost:5000/jobs";
  const {
    data: jobs,
    isPending,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });
  // console.log(jobs);
  // console.log(isPending);
  // console.log(isLoading);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {jobs.map((job) => (
        <TabAllJob key={job._id} job={job}></TabAllJob>
      ))}
    </div>
  );
};

export default TabAllJobs;

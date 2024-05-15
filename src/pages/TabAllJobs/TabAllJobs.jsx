// import axios from "axios";
import TabAllJob from "./TabAllJob";
import { useQuery } from "@tanstack/react-query";
import useCommonAxios from "../../hooks/useCommonAxios";

const TabAllJobs = () => {
  const commonAxios = useCommonAxios();
  // const url = "https://b9a11-server-side-shahin-hossain-dev.vercel.app/jobs";
  const { data: jobs, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await commonAxios.get("/jobs");
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-6 mt-12">
      {jobs.map((job) => (
        <TabAllJob key={job._id} job={job}></TabAllJob>
      ))}
    </div>
  );
};

export default TabAllJobs;

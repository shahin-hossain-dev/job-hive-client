import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import OnSiteJobCard from "./OnSiteJobCard";

const OnSiteJob = () => {
  // On Site
  const url = "http://localhost:5000/job?type=On Site";
  const { data: jobs, isLoading } = useQuery({
    queryKey: ["remoteJob"],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });
  //   console.log(jobs);

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
        <OnSiteJobCard key={job._id} job={job}></OnSiteJobCard>
      ))}
    </div>
  );
};

export default OnSiteJob;

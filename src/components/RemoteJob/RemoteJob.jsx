import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RemoteJobCard from "./RemoteJobCard";

const RemoteJob = () => {
  // On Site
  const url = "http://localhost:5000/job?type=Remote";
  const { data: jobs, isLoading } = useQuery({
    queryKey: ["onSiteJob"],
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
        <RemoteJobCard key={job._id} job={job}></RemoteJobCard>
      ))}
    </div>
  );
};

export default RemoteJob;

import { useQuery } from "@tanstack/react-query";
import CategoryJobCard from "../components/CategoryJobCard/CategoryJobCard";
import useCommonAxios from "./useCommonAxios";

const CategoryJobs = ({ type, queryKey }) => {
  const commonAxios = useCommonAxios();
  // On Site
  const url = `/job?type=${type}`;
  const { data: jobs, isLoading } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await commonAxios.get(url);
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
      {jobs.map((job) => (
        <CategoryJobCard key={job._id} job={job}></CategoryJobCard>
      ))}
    </div>
  );
};

export default CategoryJobs;

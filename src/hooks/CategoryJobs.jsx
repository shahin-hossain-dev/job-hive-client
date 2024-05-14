import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CategoryJobCard from "../components/CategoryJobCard/CategoryJobCard";

const CategoryJobs = ({ type, queryKey }) => {
  // On Site
  const url = `http://localhost:5000/job?type=${type}`;
  const { data: jobs, isLoading } = useQuery({
    queryKey: [queryKey],
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
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12"
      data-aos="fade-up"
      data-aos-duration="300"
    >
      {jobs.map((job) => (
        <CategoryJobCard key={job._id} job={job}></CategoryJobCard>
      ))}
    </div>
  );
};

export default CategoryJobs;

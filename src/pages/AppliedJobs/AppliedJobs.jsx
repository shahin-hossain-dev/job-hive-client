import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../hooks/useSecureAxios";
import useAuth from "../../hooks/useAuth";
import coverImg from "../../assets/img3.jpg";
import { useState } from "react";

const background = {
  backgroundImage: `linear-gradient(to right, #000000CC, #000000CC),url(${coverImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const AppliedJobs = () => {
  const { user } = useAuth();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const secureAxios = useSecureAxios();

  const url = `/applied-jobs?email=${user?.email}`;

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const res = await secureAxios.get(url);
      setAppliedJobs(res.data);
      return res.data;
    },
    queryKey: ["applied-data"],
  });

  const handleJobsFilter = (e) => {
    const query = e.target.value;
    if (query === "On Site") {
      const onSiteJobs = data.filter((job) => job.job_category === "On Site");
      setAppliedJobs(onSiteJobs);
    } else if (query === "Remote") {
      const onSiteJobs = data.filter((job) => job.job_category === "Remote");
      setAppliedJobs(onSiteJobs);
    } else if (query === "Hybrid") {
      const onSiteJobs = data.filter((job) => job.job_category === "Hybrid");
      setAppliedJobs(onSiteJobs);
    } else if (query === "Part-Time") {
      const onSiteJobs = data.filter((job) => job.job_category === "Part-Time");
      setAppliedJobs(onSiteJobs);
    } else {
      setAppliedJobs(data);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div
        className="w-full h-[200px] md:h-[300px] relative "
        style={background}
      >
        <div className="w-full font-exo text-center text-2xl md:text-3xl text-white absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
          <p className="mb-5 font-medium"> All Applied Job</p>
        </div>
      </div>

      <div className="w-[90%] md:w-[90%] lg:w-[85%] mx-auto mt-12 mb-12">
        <div className="flex justify-center">
          {" "}
          <select
            onChange={handleJobsFilter}
            className="select  select-bordered rounded-md w-full max-w-xs"
          >
            <option defaultValue={"selected"} value={"Filter Job"}>
              Filter Job
            </option>
            <option value={"On Site"}>On Site</option>
            <option value={"Remote"}>Remote</option>
            <option value={"Hybrid"}>Hybrid</option>
            <option value={"Part-Time"}>Part-Time</option>
          </select>
        </div>
        {/* table */}
        <div className="overflow-x-auto mt-12">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Job Title</th>
                <th>Job Category</th>
                <th>Resume</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {appliedJobs.map((job, idx) => (
                <tr key={job._id}>
                  <th>{idx + 1}</th>
                  <td>{job.job_title}</td>
                  <td>{job.job_category}</td>
                  <td>{job.resumeLink}</td>
                  <td>{job.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;

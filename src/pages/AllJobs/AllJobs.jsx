import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../hooks/useAuth";
import coverImg from "../../assets/img3.jpg";
import useCommonAxios from "../../hooks/useCommonAxios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SalaryRangeSearch from "../../components/SalaryRangeSearch/SalaryRangeSearch";

const background = {
  backgroundImage: `linear-gradient(to right, #000000CC, #000000CC),url(${coverImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const AppliedJobs = () => {
  // const { user } = useAuth();
  const [allJobs, setAllJobs] = useState([]);

  const commonAxios = useCommonAxios();

  //   enter page to view from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: jobs, isLoading } = useQuery({
    queryFn: async () => {
      const res = await commonAxios.get("/jobs");

      setAllJobs(res.data);
      return res.data;
    },
    queryKey: ["applied-data"],
  });
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;

    const searchJob = jobs.filter((job) =>
      job.job_title.toLowerCase().includes(searchText.toLowerCase())
    );
    setAllJobs(searchJob);
  };

  const handleRangeSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const minRange = parseInt(form.minRange.value);
    const maxRange = parseInt(form.maxRange.value);
    console.log(minRange, maxRange);

    const { data } = await commonAxios.get(
      `/job-range?min=${minRange}&max=${maxRange}`
    );
    if (!minRange && !maxRange) {
      return setAllJobs(jobs);
    }
    setAllJobs(data);

    // const rangeSearch = await data.filter(
    //   (job) => job.min_range >= minRange && job.max_range <= maxRange
    // );
    // setAllJobs(data);
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
          <p className="mb-5 font-medium"> All Posted Jobs</p>
        </div>
      </div>

      <div className="w-[90%] md:w-[90%] lg:w-[85%] mx-auto mt-12 mb-12">
        {/* jo */}
        <form onSubmit={handleSearch}>
          <fieldset className="form-control w-full">
            <label className="label flex justify-center md:justify-start mb-2 ">
              <span className="text-xl font-semibold">
                Search with job title
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                name="search"
                placeholder="search your job"
                className=" outline-none px-3 w-full md:w-1/2 join-item rounded-md border border-[#56F09F]"
              />
              <button
                type="submit"
                className="btn  join-item border-[#56F09F] hover:border-[#56F09F]"
              >
                Search
              </button>
            </div>
          </fieldset>
        </form>
        {/* salary range search */}
        <SalaryRangeSearch handleRangeSearch={handleRangeSearch} />

        {/* table */}
        <div className="overflow-x-auto mt-12">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Salary Range</th>
                <th>Job Posting Date</th>
                <th>Job Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allJobs.map((job) => (
                <tr key={job._id}>
                  <td>{job.job_title}</td>
                  <td>
                    {" "}
                    <span>${job.min_range}</span> -{" "}
                    <span>${job.max_range}</span>{" "}
                  </td>
                  <td>{job.job_posting_date}</td>
                  <td>{job.application_deadline}</td>
                  <td>
                    <Link to={`/job-details/${job._id}`}>
                      <button
                        className={`
                          relative
                          rounded-md
                          btn
                          hover:bg-white
                          border border-[#56F09F]
                          flex items-center gap-3  px-5 py-2 
                          before:scale-x-0
                          before:origin-right
                          before:transition
                          before:duration-500
                          hover:before:scale-x-100
                          hover:before:origin-left
                          hover:text-neutral
                          hover:rounded-md
                          before:hover:rounded-md
                          hover:before:bg-[#56F09F]
                          before:absolute 
                          before:inset-0`}
                      >
                        <span className="relative flex gap-2 items-center   ">
                          View Details
                        </span>
                      </button>
                    </Link>
                  </td>
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

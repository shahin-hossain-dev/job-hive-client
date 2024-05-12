import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../hooks/useSecureAxios";
import useAuth from "../../hooks/useAuth";
import useCommonAxios from "../../hooks/useCommonAxios";
import coverImg from "../../assets/img3.jpg";

const background = {
  backgroundImage: `linear-gradient(to right, #000000CC, #000000CC),url(${coverImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const AppliedJobs = () => {
  const { user } = useAuth();
  const secureAxios = useSecureAxios();
  const commonAxios = useCommonAxios();

  const url = `/applied-jobs?email=${user?.email}`;

  const { data: appliedJobs, isLoading } = useQuery({
    queryFn: async () => {
      const res = await commonAxios.get(url);
      return res.data;
    },
    queryKey: ["applied-data"],
  });

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
          <select className="select  select-bordered w-full max-w-xs">
            <option defaultValue={"selected"} disabled>
              Select One
            </option>
            <option>On Site</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>Part-Time</option>
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

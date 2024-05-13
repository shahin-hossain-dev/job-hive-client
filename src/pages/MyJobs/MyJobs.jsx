import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import coverImg from "../../assets/img3.jpg";
import useCommonAxios from "../../hooks/useCommonAxios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import useSecureAxios from "../../hooks/useSecureAxios";

const background = {
  backgroundImage: `linear-gradient(to right, #000000CC, #000000CC),url(${coverImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const MyJobs = () => {
  const { user } = useAuth();
  const [allJobs, setAllJobs] = useState([]);
  const commonAxios = useCommonAxios();
  const secureAxios = useSecureAxios();

  const url = `/my-jobs?email=${user?.email}`;

  const { data, isLoading, refetch } = useQuery({
    queryFn: async () => {
      const res = await secureAxios.get(url);
      setAllJobs(res.data);
      return res.data;
    },
    queryKey: ["applied-data"],
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const res = await commonAxios.delete(`/job/${id}`);
      return res.data;
    },
    onSuccess: (res) => {
      refetch();
      if (res.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutateAsync(id);
      }
    });
    // const remainingJobs = data.filter();
    // console.log(id);
    // setAllJobs(remainingJobs);
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
                  <td>{job.job_category}</td>
                  <td>{job.application_deadline}</td>
                  <td>
                    <div className="flex gap-3">
                      <Link to={`/job-update/${job._id}`}>
                        <FaEdit className="text-2xl text-warning hover:rotate-180 duration-300 hover:duration-300" />
                      </Link>
                      <button onClick={() => handleDelete(job._id)}>
                        <FaRegTrashCan className="text-2xl text-error hover:rotate-180 duration-300 hover:duration-300" />
                      </button>
                    </div>
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

export default MyJobs;

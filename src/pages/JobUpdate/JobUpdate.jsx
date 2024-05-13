import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import buttonSetting from "../../components/Button/Button";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useMutation, useQuery } from "@tanstack/react-query";
import useCommonAxios from "../../hooks/useCommonAxios";
import { useParams } from "react-router-dom";
const JobUpdate = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const commonAxios = useCommonAxios();
  const [deadlineDate, setDeadlineDate] = useState(new Date());
  const { id } = useParams();

  //fetch id data

  const { data: job, isLoading } = useQuery({
    queryFn: async () => {
      const res = await commonAxios.get(`/job/${id}`);
      return res.data;
    },
    queryKey: ["update-job"],
  });

  //   update job function

  const { mutateAsync } = useMutation({
    mutationFn: async (updatedJob) => {
      const res = await commonAxios.put(`/job/${id}`, updatedJob);
      return res.data;
    },
    onSuccess: (res) => {
      if (res.modifiedCount > 0) {
        Swal.fire({
          title: "Job Updated Successfully",
          icon: "success",
        });
      }
    },
    onError: () => {
      Swal.fire({
        title: "Something Wrong",
        icon: "error",
      });
    },
  });

  const handlePostJob = async (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const jobDescription = form.jobDescription.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const minRange = form.minRange.value;
    const maxRange = form.maxRange.value;
    const imageURL = form.imageURL.value;
    const jobCategory = form.jobCategory.value;
    const applicationDeadline = moment(deadlineDate).format("YYYY-MM-DD");

    setError("");
    if (isNaN(parseInt(minRange)) || isNaN(parseInt(maxRange))) {
      return setError("Please give number value");
    }
    // console.log(moment(deadlineDate).format("YYYY-MM-DD"));

    const updatedJob = {
      jobTitle,
      jobDescription,
      userEmail,
      userName,
      minRange,
      maxRange,
      imageURL,
      jobCategory,
      applicationDeadline,
    };

    await mutateAsync(updatedJob);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  const {
    job_title,
    application_deadline,
    min_range,
    max_range,
    job_banner_url,
    job_category,
    job_description,
  } = job;

  return (
    <div>
      <div className=" min-h-screen w-[90%] md:w-[90%] lg:w-[85%] mx-auto border border-[#33CC77] my-12 px-0 md:p-5">
        <div className="flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-center pt-3">
              Update <span className="text-[#56F09F]"> Your Job</span>
            </h1>
          </div>
          <div className=" shrink-0 w-full ">
            <form onSubmit={handlePostJob} className="card-body">
              {/* row 1 */}
              <div className="md:flex items-center gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Job Title</span>
                  </label>
                  <input
                    defaultValue={job_title}
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Job Description</span>
                  </label>
                  <input
                    defaultValue={job_description}
                    type="text"
                    name="jobDescription"
                    placeholder="Job Description"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* row 2 */}

              {/* row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 w-full">
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="form-control  w-full ">
                    <label className="label">
                      <span className="label-text">Salary Range (From)</span>
                    </label>
                    <input
                      defaultValue={min_range}
                      type="text"
                      name="minRange"
                      placeholder="Salary Range from"
                      className={
                        error
                          ? "input input-bordered border-red-600"
                          : "input input-bordered"
                      }
                      required
                    />
                    <p className="text-red-600">{error}</p>
                  </div>

                  <div className="form-control  w-full ">
                    <label className="label">
                      <span className="label-text">Salary Range (To)</span>
                    </label>
                    <input
                      defaultValue={max_range}
                      type="text"
                      name="maxRange"
                      placeholder="Salary Range to"
                      className={
                        error
                          ? "input input-bordered border-red-600"
                          : "input input-bordered"
                      }
                      required
                    />
                    <p className="text-red-600">{error}</p>
                  </div>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    defaultValue={job_banner_url}
                    type="text"
                    name="imageURL"
                    placeholder="image URL"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* row 4 */}
              <div className="md:flex items-center gap-5 w-full">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Job Category</span>
                  </label>
                  <select
                    defaultValue={job_category}
                    name="jobCategory"
                    required
                    className="select select-bordered w-full "
                  >
                    <option value={"On Site"}>On Site</option>
                    <option value={"Remote"}>Remote</option>
                    <option value={"Part-Time"}>Part-Time</option>
                    <option value={"Hybrid"}>Hybrid</option>
                  </select>
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Application Deadline </span>
                  </label>
                  <ReactDatePicker
                    selected={application_deadline}
                    dateFormat="yyyy-MM-dd"
                    onChange={(date) => setDeadlineDate(date)}
                    className=" input flex items-center input-bordered w-full"
                  />
                </div>
              </div>

              <div className="md:flex items-center gap-5 w-full"></div>
              {/* row 5 */}
              <div className="md:flex items-center gap-5">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    title="Read Only"
                    type="text"
                    name="userName"
                    defaultValue={user?.displayName}
                    placeholder="User Name"
                    className="input input-bordered "
                    required
                    disabled
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="email"
                    name="userEmail"
                    defaultValue={user?.email}
                    placeholder="User Email"
                    className="input input-bordered"
                    title="Read Only"
                    required
                    disabled
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className={buttonSetting()}>
                  <span className="relative  text-base font-semibold">
                    Update Job
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobUpdate;

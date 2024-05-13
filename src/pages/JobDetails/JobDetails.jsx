import { useLoaderData } from "react-router-dom";
import sideImage from "../../assets/side.jpg";
import buttonSetting from "../../components/Button/Button";
import ApplyModal from "../../components/ApplyModal/ApplyModal";
import { useMutation } from "@tanstack/react-query";
import useCommonAxios from "../../hooks/useCommonAxios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";

const JobDetails = () => {
  const job = useLoaderData();
  const [applicantCount, setApplicantCount] = useState(job.job_applicants);
  const commonAxios = useCommonAxios();
  const { user } = useAuth();

  const background = {
    backgroundImage: `linear-gradient(to right, #00000066, #00000066),url(${job.job_banner_url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const {
    _id,
    job_title,
    job_description,
    min_range,
    max_range,
    job_applicants,
    job_category,
    application_deadline,
  } = job;

  // const {
  //   data: job,
  //   isPending,
  //   isError,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["jobs"],
  //   queryFn: async () => {
  //     const res = await commonAxios.get(``);
  //     return res.data;
  //   },
  // });

  const { mutateAsync } = useMutation({
    mutationFn: async (appliedJob) => {
      const post = await commonAxios.post("/applied", appliedJob);
      return post;
    },
    onSuccess: (res) => {
      // console.log(res.data);
      document.getElementById("apply").close();
      Swal.fire({
        title: "Job Post Successfully",
        icon: "success",
        confirmButtonColor: "#56F09F",
      });
    },
  });

  const handleApplyJob = async (e) => {
    e.preventDefault();
    const form = e.target;
    const resumeLink = form.resumeLink.value;

    const appliedJob = {
      job_title,
      resumeLink,
      job_category,
      user: user.displayName,
      email: user.email,
    };
    const newApplicants = {
      newCount: job_applicants + 1,
    };

    try {
      const res = await commonAxios.patch(`/job/${_id}`, newApplicants);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }

    const deadline = Date.parse(application_deadline);
    const dateNow = Date.now();

    if (deadline < dateNow) {
      document.getElementById("apply").close();
      return Swal.fire({
        title: "Apply Date Expired",
        icon: "error",
        confirmButtonColor: "#56F09F",
      });
    }

    await mutateAsync(appliedJob);
    setApplicantCount(job_applicants + 1);
  };

  //   console.log(job);
  return (
    <div>
      <div
        className="w-full h-[200px] md:h-[300px] relative "
        style={background}
      >
        <div className="w-full text-center text-2xl md:text-3xl text-white absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
          <p className="mb-5 font-medium"> Job Details</p>

          <p className=" font-semibold">{}</p>
        </div>
      </div>
      {/* job details */}
      <div className="w-[90%] md:w-[90%] lg:w-[85%] mx-auto pb-24 mt-12 md:mt-24">
        <div className="grid grid-col-1 md:grid-cols-2 gap-10  place-items-center">
          <div>
            <img src={sideImage} className="w-full rounded-md" alt="" />
          </div>
          <div>
            <div className="card relative rounded-md  shadow-xl border border-[#8BF0B3]">
              <div className="absolute top-5 right-5 font-semibold">
                <span className="bg-[#8BF0B366]  font-bold rounded-md px-3 py-1 ">
                  <small>{job_category}</small>
                </span>
              </div>
              <div className="card-body space-y-3 p-4">
                <h2 className="card-title">{job_title}</h2>
                <p>
                  <span className="font-semibold">Description:</span>{" "}
                  {job_description}
                </p>
                <div className="flex  items-center gap-2">
                  <span className="font-semibold">Salary Range:</span>
                  <p>
                    ${min_range} - ${max_range}
                  </p>
                </div>
                <div className="flex  items-center gap-2">
                  <span className="font-semibold">Deadline:</span>
                  <p>{application_deadline}</p>
                </div>
                <div>
                  <span className="bg-[#8BF0B366] rounded-md px-3 py-1 ">
                    <small>Applicants: {applicantCount}</small>
                  </span>
                </div>
                <button
                  onClick={() => document.getElementById("apply").showModal()}
                  className={buttonSetting()}
                >
                  <span className="relative  text-base font-semibold">
                    <small>Apply Now</small>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Apply Modal */}
        <ApplyModal handleApplyJob={handleApplyJob} />
      </div>
      ;
    </div>
  );
};

export default JobDetails;

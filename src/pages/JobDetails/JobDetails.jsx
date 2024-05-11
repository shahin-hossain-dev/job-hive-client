import { useLoaderData } from "react-router-dom";
import sideImage from "../../assets/side.jpg";
import buttonSetting from "../../components/Button/Button";
import ApplyModal from "../../components/ApplyModal/ApplyModal";

const JobDetails = () => {
  const job = useLoaderData();
  const background = {
    backgroundImage: `linear-gradient(to right, #00000066, #00000066),url(${job.job_banner_url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const {
    job_banner_url,
    _id,
    job_title,
    job_description,
    min_range,
    max_range,
    job_applicants,
    job_category,
  } = job;

  console.log(job);
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
                <p>{job_description}</p>
                <div className="flex  items-center gap-2">
                  <span className="font-semibold">Salary Range:</span>
                  <p>
                    ${min_range} - ${max_range}
                  </p>
                </div>
                <div>
                  <span className="bg-[#8BF0B366] rounded-md px-3 py-1 ">
                    <small>Applicants: {job_applicants}</small>
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
        <ApplyModal />
      </div>
      ;
    </div>
  );
};

export default JobDetails;

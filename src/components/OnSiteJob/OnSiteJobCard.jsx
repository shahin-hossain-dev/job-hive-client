import { FaRegUser } from "react-icons/fa6";
import buttonSetting from "../../components/Button/Button";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const OnSiteJobCard = ({ job }) => {
  const {
    _id,
    job_title,
    user_name,
    job_posting_date,
    application_deadline,
    min_range,
    max_range,
    job_applicants,
  } = job;

  return (
    <div>
      <div
        className="card shadow-xl rounded-md hover:-translate-y-1 duration-[400ms] border border-base-200 hover:border-[#56F09F]"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <div className="card-body p-4">
          <h2 className="card-title">{job_title}</h2>

          <div className="flex  items-center gap-2">
            <span>
              <small className="font-semibold">Posting Date:</small>
            </span>
            <p>
              <small> {job_posting_date}</small>
            </p>
          </div>
          <div className="flex  items-center gap-2">
            <span className="font-semibold">
              <small>Deadline: </small>
            </span>
            <p>
              <small> {application_deadline}</small>
            </p>
          </div>
          <div className="flex  items-center gap-2">
            <span className="font-semibold">
              <small>Salary Range: </small>
            </span>
            <p>
              <small> ${min_range}</small> - <small> ${max_range}</small>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex  items-center gap-2">
              <small>
                <FaRegUser />
              </small>
              <p className="font-semibold">
                <small> {user_name}</small>
              </p>
            </div>
            <div>
              <span className="bg-[#8BF0B366] rounded-md px-3 py-1 ">
                <small>Applicants: {job_applicants}</small>
              </span>
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/job-details/${_id}`} className="w-full">
              <button className={buttonSetting()}>
                <span className="relative  text-base font-semibold">
                  <small>View Details</small>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnSiteJobCard;

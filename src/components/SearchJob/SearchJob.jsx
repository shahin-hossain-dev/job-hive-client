import buttonSetting from "../Button/Button";
import imgJob from "../../assets/img4.png";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

const SearchJob = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mt-24">
      <img src={imgJob} alt="" data-aos="fade-right" data-aos-duration="300" />
      <div className="space-y-4" data-aos="fade-left" data-aos-duration="500">
        <h2 className="text-4xl font-semibold">
          Millions Of <span className="text-[#56F09F]">Jobs.</span>{" "}
        </h2>
        <h2 className="text-5xl font-bold " style={{ lineHeight: "60px" }}>
          Find The One <br /> That’s{" "}
          <span className="text-[#56F09F]">Right</span> For You
        </h2>
        <p>
          Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 600,000 companies worldwide. The
          right job is out there.
        </p>
        <div className="w-1/2 lg:w-1/3">
          <Link to={"/all-jobs"}>
            <button className={buttonSetting()}>
              <span className="relative  text-base font-semibold">
                <small>Search Job</small>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchJob;

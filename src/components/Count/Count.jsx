import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "../ScrollTrigger/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Count = () => {
  const [counterOn, setCounterOn] = useState(false);
  //   console.log(counterOn);
  return (
    <div>
      <div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onLeave={() => setCounterOn(false)}
        >
          <div
            className="grid grid-cols-1 place-items-center gap-10 lg:gap-0 md:grid-cols-2 lg:grid-cols-4 justify-between shadow-lg p-10 rounded-md mt-24 "
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <div>
              <h1 className="text-5xl font-bold text-[#56F09F] mb-3">
                {counterOn && <CountUp delay={0} end={3000} duration={3} />}
                <span>+</span>
              </h1>
              <h2 className="text-2xl font-bold">Live Jobs</h2>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-[#56F09F] mb-3">
                {counterOn && <CountUp delay={0} end={600} duration={3} />}
                <span>+</span>
              </h1>
              <h2 className="text-2xl font-bold">Companies</h2>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-[#56F09F] mb-3">
                {counterOn && <CountUp delay={0} end={300} duration={3} />}
                <span>+</span>
              </h1>
              <h2 className="text-2xl font-bold">Candidates</h2>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-[#56F09F] mb-3">
                {counterOn && <CountUp delay={0} end={100} duration={3} />}
                <span>+</span>
              </h1>
              <h2 className="text-2xl font-bold">New Jobs</h2>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Count;

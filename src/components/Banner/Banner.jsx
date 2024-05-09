// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
      >
        <div className="absolute top-0 left-0 z-10 text-white  lg:mt-0  h-[100%] w-[100%]  bg-gradient-to-r   from-[#00000099] to-[#00000099] ">
          <div className=" flex justify-center text-center items-center flex-col  h-full  px-10 md:px-16">
            <h2 className="text-2xl md:text-4xl space-y-4 md:space-y-8 text-center lg:text-6xl font-Jakarta font-bold mb-5 ">
              <p>
                Welcome to{" "}
                <span className="text-[#56F09F]">
                  <Typewriter
                    words={["Job Hive", "Your Future", "Your Career"]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={200}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </p>
              <p>Where Every Career Journey Begins!</p>
            </h2>
            <p className="md:w-1/2 lg:mt-5">
              Connecting talent with opportunities for career growth and
              success. Welcome to your hive of endless possibilities!
            </p>
          </div>
        </div>
        <SwiperSlide>
          <img
            src={img1}
            className="h-[300px] md:h-[400px] lg:h-full object-cover object-center w-full"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            className="h-[300px] md:h-[400px] lg:h-full object-cover object-center w-full"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            className="h-[300px] md:h-[400px] lg:h-full object-cover object-center w-full"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

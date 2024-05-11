import Banner from "../../../components/Banner/Banner";
import JobTabs from "../JobTabs/JobTabs";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="relative">
        <div className="w-[100px] h-[100px] left-1/2 -translate-x-1/2 bg-[#56F09F] blur-[10rem] opacity-50 absolute top-0 z-50"></div>
      </div>
      <div className="w-[90%] md:w-[90%] lg:w-[85%] mx-auto pb-24">
        <JobTabs />
      </div>
    </div>
  );
};

export default Home;

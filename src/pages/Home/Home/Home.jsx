import Banner from "../../../components/Banner/Banner";
import Count from "../../../components/Count/Count";
import SearchJob from "../../../components/SearchJob/SearchJob";
import JobTabs from "../JobTabs/JobTabs";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="relative">
        <div className="w-[150px] h-[150px] left-1/2 -translate-x-1/2 bg-[#56F09F] blur-[10rem]  absolute top-0 -z-0"></div>
      </div>
      <div className="w-[90%] md:w-[90%] lg:w-[85%] mx-auto pb-24">
        <JobTabs />
        <Count />
        <SearchJob />
      </div>
    </div>
  );
};

export default Home;

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./JobTabs.css";
import TabAllJobs from "../../TabAllJobs/TabAllJobs";

const JobTabs = () => {
  return (
    <div className="mt-24">
      <div className="mt-12 md:mt-24 text-center space-y-4 md:w-1/2 mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold font-exo">
          Job By <span className="text-[#56F09F]">Category</span>
        </h2>
        <p className="px-10">
          Explore diverse career paths across industries with our comprehensive
          job category listings.
        </p>
      </div>
      <Tabs>
        <TabList>
          <div className="flex flex-wrap gap-5 md:gap-2">
            <Tab>All Jobs</Tab>
            <Tab>On-Site Job</Tab>
            <Tab>Remote Job</Tab>
            <Tab>Hybrid</Tab>
            <Tab>Part-Time</Tab>
          </div>
        </TabList>

        <TabPanel>
          <TabAllJobs />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobTabs;

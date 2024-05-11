import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./JobTabs.css";
import TabAllJobs from "../../TabAllJobs/TabAllJobs";
import OnSiteJob from "../../../components/OnSiteJob/OnSiteJob";
import RemoteJob from "../../../components/RemoteJob/RemoteJob";
import CategoryJobs from "../../../hooks/CategoryJobs";
import { useState } from "react";

const JobTabs = () => {
  const [tabIndex, setTabIndex] = useState(() => {
    const tabIndex = localStorage.getItem("tabIndex");
    return parseInt(tabIndex) || 0;
  });

  // console.log(tabIndex);

  const handleActive = (index) => {
    setTabIndex(index);
    localStorage.setItem("tabIndex", index);
  };

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
      <Tabs selectedIndex={tabIndex} onSelect={(index) => handleActive(index)}>
        <TabList>
          <div className="flex flex-wrap gap-5 md:gap-2">
            <Tab>All Jobs</Tab>
            <Tab>On-Site Job</Tab>
            <Tab>Remote Job</Tab>
            <Tab>Hybrid</Tab>
            <Tab>Part-Time</Tab>
          </div>
        </TabList>
        {/* All Jobs */}
        <TabPanel>
          <TabAllJobs />
        </TabPanel>
        {/* On-Site Job */}
        <TabPanel>
          <OnSiteJob />
        </TabPanel>
        <TabPanel>
          <RemoteJob />
        </TabPanel>
        <TabPanel>
          <CategoryJobs type={"Hybrid"} key={"hybridJobs"} />
        </TabPanel>
        <TabPanel>
          <CategoryJobs type={"Part-Time"} key={"partTimeJobs"} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobTabs;

import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="font-Jakarta relative">
      <div className="sticky top-0 z-20 ">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;

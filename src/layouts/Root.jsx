import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import { motion, useScroll } from "framer-motion";
import "./Root.css";
const Root = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="font-Jakarta relative">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div className="sticky top-0 z-10 ">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

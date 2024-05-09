import { Link } from "react-router-dom";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import "./Navbar.css";
const Navbar = () => {
  const links = (
    <>
      <ActiveLink to={"/"} className="hover:nav-item">
        <span className="nav-underline">Home</span>
      </ActiveLink>
      <ActiveLink to={"/all-jobs"}>
        <span className="nav-underline">All Jobs</span>
      </ActiveLink>
      <ActiveLink to={"/applied-jobs"}>
        <span className="nav-underline">Applied Jobs</span>
      </ActiveLink>
      <ActiveLink to={"/add-job"}>
        <span className="nav-underline">Add A Job</span>
      </ActiveLink>
      <ActiveLink to={"/my-job"}>
        <span className="nav-underline">My Jobs</span>
      </ActiveLink>
    </>
  );
  return (
    <div className=" w-full py-5 shadow-lg">
      <div className="md:px-5">
        <div className="navbar">
          <div className="navbar-start ">
            <div className="dropdown me-5 md:me-0">
              <div tabIndex={0} role="button" className=" md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-neutral"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu  space-y-4 menu-sm dropdown-content mt-3 z-20 p-5 shadow bg-white w-[200px] rounded-box "
              >
                {links}
              </ul>
            </div>
            <div>
              <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-neutral">
                Job<span className="text-[#56F09F]">hive</span>
              </h1>
            </div>
          </div>
          <div className="gap-5 items-center navbar-center hidden md:flex">
            {links}
          </div>
          <div className="navbar-end">
            <div className="flex gap-3">
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

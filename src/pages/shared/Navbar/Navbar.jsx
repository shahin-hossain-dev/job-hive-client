import { Link } from "react-router-dom";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import { FaRegUserCircle } from "react-icons/fa";
import "./Navbar.css";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import logo_1 from "../../../assets/logo_1.png";
import logo_2 from "../../../assets/logo_2.png";

const Navbar = () => {
  const { user, logOut } = useAuth();
  // console.log(user);

  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  // console.log(darkMode);
  const handleDarkMood = (e) => {
    const toggle = e.target.checked;
    if (toggle === true) {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    }
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successfully",
          icon: "success",
          confirmButtonColor: "#33CC77",
        });
      })
      .catch((error) => error.message);
  };
  const links = (
    <>
      <ActiveLink to={"/"} className="hover:nav-item">
        <span className="nav-underline">Home</span>
      </ActiveLink>
      <ActiveLink to={"/all-jobs"}>
        <span className="nav-underline">All Jobs</span>
      </ActiveLink>
      {user && (
        <>
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
      )}
      <ActiveLink to={"/blogs"}>
        <span className="nav-underline">Blogs</span>
      </ActiveLink>
    </>
  );
  return (
    <div
      className={`w-full py-2 shadow-lg ${
        darkMode ? "bg-[#11111A]" : "bg-white"
      }`}
    >
      <div className="md:px-5">
        <div className="navbar">
          <div className="navbar-start ">
            <div className="dropdown me-5 md:me-0">
              <div tabIndex={0} role="button" className=" md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6  ${
                    darkMode ? "text-white" : "text-neutral"
                  }`}
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
                className={`menu  space-y-4 menu-sm dropdown-content mt-3 z-20  p-5 shadow w-[200px] rounded-box  ${
                  darkMode ? "bg-[#11111A] text-white" : "bg-white text-neutral"
                }`}
              >
                {links}
              </ul>
            </div>
            <div>
              {/* <h1
                className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
                  darkMode ? "text-white" : "text-neutral"
                }`}
              >
                Job<span className="text-[#56F09F]">hive</span>
              </h1> */}
              {darkMode ? (
                <img src={logo_1} className="w-[150px] md:w-1/2" />
              ) : (
                <img src={logo_2} className="w-[150px]  md:w-1/2" />
              )}
            </div>
          </div>
          <div className="gap-5 items-center navbar-center hidden md:flex">
            {links}
          </div>
          <div className="navbar-end">
            <label className="cursor-pointer me-3 label">
              {darkMode ? (
                <input
                  type="checkbox"
                  className="toggle border border-[#33CC77]"
                  onChange={handleDarkMood}
                  defaultChecked={true}
                />
              ) : (
                <input
                  type="checkbox"
                  className="toggle border text-[#56F09F] border-[#33CC77]"
                  onChange={handleDarkMood}
                  defaultChecked={false}
                />
              )}
            </label>

            {user ? (
              <div className="flex ">
                {/* user */}
                <div className="dropdown dropdown-end me-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn hover:bg-[#56F09F] border-0 btn-circle flex justify-center items-center  avatar tooltip before:bg-[#56F09F] before:text-neutral tooltip-bottom dropdown dropdown-hover "
                    data-tip={user.displayName}
                  >
                    <div className="w-10 rounded-full">
                      <img alt="User Image" src={user && user?.photoURL} />
                    </div>
                    {user && (
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[10] top-0 -left-32 md:hidden  text-neutral menu  shadow bg-base-100 rounded-lg w-32"
                      >
                        <li>
                          <button
                            className={
                              darkMode
                                ? "text-white border border-[#56F09F]"
                                : "text-neutral border border-[#56F09F]"
                            }
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
                {/* user */}
                <button
                  onClick={handleLogout}
                  className={`
                  hidden
              relative
              rounded-md
              btn
              hover:bg-white
              border border-[#56F09F]
              md:flex items-center gap-3  px-5 py-2 
              before:scale-x-0
              before:origin-right
              before:transition
              before:duration-500
              hover:before:scale-x-100
              hover:before:origin-left
              hover:text-neutral
              hover:rounded-md
              before:hover:rounded-md
              hover:before:bg-[#56F09F]
              before:absolute 
              before:inset-0`}
                >
                  <span
                    className={`relative flex gap-2 items-center ${
                      darkMode ? "text-white" : "text-neutral"
                    }`}
                  >
                    <FaRegUserCircle className="text-xl" />
                    Logout
                  </span>
                </button>
              </div>
            ) : (
              <Link to={"/login"}>
                <button
                  className={`
            relative
            rounded-md
            btn
            hover:bg-white
            border border-[#56F09F]
            flex items-center gap-3  px-5 py-2 
            before:scale-x-0
            before:origin-right
            before:transition
            before:duration-500
            hover:before:scale-x-100
            hover:before:origin-left
            hover:text-neutral
            before:hover:rounded-md
            hover:rounded-md
            hover:before:bg-[#56F09F]
            before:absolute 
            before:inset-0`}
                >
                  <span className="relative flex gap-2 items-center   ">
                    <FaRegUserCircle className="text-xl" />
                    Login
                  </span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

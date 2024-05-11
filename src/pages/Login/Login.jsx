import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import Swal from "sweetalert2";
import buttonSetting from "../../components/Button/Button";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { googleLogin, userLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    if (password.length < 6) {
      return setError("Password should be at least 6 characters");
    }
    userLogin(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Login Successfully",
            icon: "success",
          });
          navigate(from);
        }
      })
      .catch((error) => {
        if (error.message.includes("invalid")) {
          Swal.fire({
            icon: "error",
            title: "Invalid Email or Password",
          });
        } else {
          setError(error.message);
        }
      });
  };

  // handle Google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Login Successfully",
            icon: "success",
          });
          navigate(from);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className=" flex justify-center items-center px-5 md:px-0 mt-8 lg:mt-16  pb-5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl  border border-[#45c380]">
          <h1 className="text-2xl font-exo mt-5 text-center font-bold  ">
            Please Login
          </h1>
          <form onSubmit={handleLogin} className="card-body  pt-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className={buttonSetting()}>
                <span className="relative uppercase text-base font-semibold">
                  <small>Login</small>
                </span>
              </button>
            </div>
          </form>
          <p className="label-text-alt text-center ">
            Don&apos;t have any account? please{" "}
            <Link to={"/register"} className=" link link-primary link-hover ">
              Register
            </Link>
          </p>
          <div className="form-control mt-6 mx-8">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-info text-white "
            >
              <FaGoogle />
              Continue With Google
            </button>
          </div>
          <div className="mb-6 mx-8">
            <p className="text-red-600 font-semibold text-center">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

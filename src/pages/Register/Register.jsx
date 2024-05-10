import buttonSetting from "../../components/Button/Button";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { userCreate, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [eyeShow, setEyeShow] = useState(false);
  const navigate = useNavigate("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    if (!/^(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)) {
      return setError("At least one Uppercase & Lowercase character");
    }
    // create user with firebase
    userCreate(email, password)
      .then((result) => {
        // const loggedUser = result.user;
        updateUserProfile(name, photoURL).then(() => {
          signOut(auth);
          navigate("/login");
        });

        if (result.user) {
          Swal.fire({
            title: "Account Created Successfully",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        if (error.message.includes("email-already")) {
          setError("This email already been used");
        } else {
          setError(error.message);
        }
      });
  };

  return (
    <div>
      <div className=" flex justify-center items-center px-5 md:px-0 min-h-screen mt-8 lg:mt-16 pb-5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl border border-[#45c380]">
          <h1 className="text-2xl my-5 font-exo text-center font-bold ">
            Register an Account
          </h1>
          <form onSubmit={handleRegister} className="card-body  pt-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                type={passwordShow ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={(e) => setEyeShow(e.target.value)}
                className="input input-bordered"
                required
              />
              {/* eye button */}
              {eyeShow && (
                <span
                  onClick={() => setPasswordShow(!passwordShow)}
                  className="text-2xl cursor-pointer absolute right-3 top-1/2 translate-y-1 "
                >
                  {passwordShow ? <FaEyeSlash /> : <FaEye />}
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className={buttonSetting()}>
                <span className="relative uppercase text-base font-semibold">
                  <small>Register</small>
                </span>
              </button>
            </div>
          </form>
          <p className="label-text-alt text-center mb-5">
            Have an account? please{" "}
            <Link to={"/login"} className=" link link-primary link-hover ">
              Login
            </Link>
          </p>
          <div className="mb-6 mx-8">
            <p className="text-red-600 font-semibold text-center">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

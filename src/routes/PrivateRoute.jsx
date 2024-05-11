import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    if (location.pathname.includes("job-details")) {
      Swal.fire({
        title: "Login Warning",
        text: "You have to log in first to view details",
        icon: "warning",
        confirmButtonColor: "#33CC77",
      });
    }
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  return children;
};

export default PrivateRoute;

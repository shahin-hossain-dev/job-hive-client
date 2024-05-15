import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import AddJob from "../pages/AddJob/AddJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import AllJobs from "../pages/AllJobs/AllJobs";
import JobUpdate from "../pages/JobUpdate/JobUpdate";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-jobs",
        element: <AllJobs />,
      },
      {
        path: "/applied-jobs",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-job",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/job-details/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`),
      },
      {
        path: "/job-update/:id",
        element: <JobUpdate />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default router;

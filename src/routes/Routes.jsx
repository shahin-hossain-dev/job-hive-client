import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import AddJob from "../pages/AddJob/AddJob";
import MyJobs from "../pages/MyJobs/MyJobs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-jobs",
        element: <div>All jobs</div>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/add-job",
        element: <AddJob />,
      },
      {
        path: "/my-job",
        element: <MyJobs />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;

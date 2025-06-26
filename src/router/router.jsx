import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignInUser";
import JobDetails from "../pages/JobDetails";
import { Loader } from "lucide-react";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: "/",
        Component: Home,
      },
      {
        path: "/about",
        element: <p>About Page</p>,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        hydrateFallbackElement: <Loader />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/job-apply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoute>
            <MyApplications />
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
        path: "/jobsByEmailAddress",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/applications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/job/${params.job_id}`),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
    ],
  },
]);

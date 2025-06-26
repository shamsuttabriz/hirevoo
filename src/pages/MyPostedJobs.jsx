import React, { Suspense } from "react";
import JobLists from "./Shared/JobLists";
import { Loader } from "lucide-react";
import { jobCreatedByPromise } from "../api/jobsapi";
import useAuth from "../hooks/useAuth";

function MyPostedJobs() {
  const { user } = useAuth();
  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-3xl py-4">My Posted Jobs</h3>
      <Suspense fallback={<Loader />}>
        <JobLists jobCreatedByPromise={jobCreatedByPromise(user.email)} />
      </Suspense>
    </div>
  );
}

export default MyPostedJobs;

import React, { use } from "react";
import JobCard from "./Shared/JobCard";

function HotJobs({ jobsPromise }) {
const jobs = use(jobsPromise);
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold mt-5 mb-10">All Jobs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default HotJobs;

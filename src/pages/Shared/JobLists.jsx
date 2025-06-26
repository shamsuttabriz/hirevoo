import React, { use } from "react";
import { Link } from "react-router";

function JobLists({ jobCreatedByPromise }) {
  const jobs = use(jobCreatedByPromise);
  console.log(jobs);
  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold">jobs {jobs.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Job title</th>
                <th>Dadeline</th>
                <th>View Applications</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {jobs.map((job) => (
                <tr key={job._id}>
                  <th>1</th>
                  <td>{job.title}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>
                    <Link to={`/applications/${job._id}`}>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default JobLists;

import React, { use } from "react";
import JobApplicationrow from "./JobApplicationrow";

function ApplicationList({ myApplicationsPromise }) {
  const applications = use(myApplicationsPromise);
  console.log(applications);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application, index) => (
              <JobApplicationrow
                key={application._id}
                index={index}
                application={application}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ApplicationList;

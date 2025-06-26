import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

function ViewApplications() {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) => {
     console.log(e.target.value, app_id);

     axios.patch(`http://localhost:3000/applications/${app_id}`, {status: e.target.value})
     .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Status Successfully modified",
                showConfirmButton: false,
                timer: 2000
              });
        }
     })
     .catch(error => {
        console.log(error)
     })
  }

  return (
    <div className="max-w-6xl mx-auto my-12">
      <h2 className="text-3xl font-bold">
        {applications.length} Application for : {job_id}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {applications.map((app, index) => (
                <tr key={app._id}>
                  <th>{index + 1}</th>
                  <td>{app.applicant}</td>
                  <td>Quality and Control status</td>
                  <td>
                    <select onChange={e => handleStatusChange(e, app._id)} defaultValue={app.status} className="select">
                      <option disabled={true}>Updated Status</option>
                      <option>Pending</option>
                      <option>Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
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

export default ViewApplications;

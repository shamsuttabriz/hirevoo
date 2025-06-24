import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

function JobApply() {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  console.log(jobId, user);

  const handleUserJobSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries());
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin, github, resume);

    const application = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      resume,
    };

    console.log(application);

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if(res.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your application is successfully submitted",
                showConfirmButton: false,
                timer: 1500
              });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 my-10 bg-white shadow-blue-300 shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
        Job Application Form{" "}
        <Link to={`/jobs/${jobId}`} className="text-slate-800 underline">
          Details
        </Link>
      </h2>
      <form onSubmit={handleUserJobSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            placeholder="Enter your linkedin profile"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Github</label>
          <input
            type="url"
            name="github"
            placeholder="Enter your github profile"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="text"
            name="phone"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div> */}

        {/* <div>
          <label className="block text-sm font-medium">
            Position Applying For
          </label>
          <input
            type="text"
            name="position"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div> */}

        <div>
          <label className="block text-sm font-medium">
            Upload Resume (PDF)
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf"
            required
            className="w-full border text-sm px-4 py-1 rounded"
          />
        </div>

        {/* <div>
          <label className="block text-sm font-medium">
            Cover Letter / Message
          </label>
          <textarea
            name="coverLetter"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write a brief message..."
          ></textarea>
        </div> */}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default JobApply;

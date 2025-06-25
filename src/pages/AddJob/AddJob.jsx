import React from "react";
import useAuth from "../../hooks/useAuth";

function AddJob() {
  const { user } = useAuth();

  const handleAddAJob = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Process Salary Range
    const { min, max, currency, ...newJob } = data;
    console.log(newJob);
    newJob.salaryRange = {
      min,
      max,
      currency,
    };

    // Process Requirements
    newJob.job_requirement = newJob.job_requirement
      .split(",")
      .map((req) => req.trim());

    // Process Responsibilities
    newJob.job_responsibilities = newJob.job_responsibilities
      .split(",")
      .map((res) => res.trim());
  };
  return (
    <div className="max-w-6xl mx-auto flex justify-center my-12">
      <form onSubmit={handleAddAJob}>
        {/* Basic Info  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend text-base">
            Basic Informaiton
          </legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="job_title"
            className="input w-full"
            placeholder="Enter job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input w-full"
            placeholder="Company name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input w-full"
            placeholder="Company location"
          />
        </fieldset>

        {/* Job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend text-base">Job type</legend>
          <div className="filter flex">
            <input
              className="btn filter-reset w-full"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="On-Site"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* Company Logo */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend text-base">Company Logo</legend>
          <input
            type="url"
            name="company_logo"
            className="input w-full"
            placeholder="Company Logo URL"
          />
        </fieldset>

        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend text-base">Job Category</legend>
          <select
            defaultValue="Job Category"
            name="job_category"
            className="select w-full"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Real Estate</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Applicaton Date */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend text-base">
            Application date
          </legend>
          <input type="date" name="date" className="input w-full" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4 grid grid-cols-1 lg:grid-cols-3 gap-2 ">
          <legend className="fieldset-legend text-base">Salary Range</legend>

          <div>
            <label className="label">Maximum Salary</label>
            <input
              type="text"
              name="max"
              className="input w-full"
              placeholder="Maximum Salary"
            />
          </div>

          <div>
            <label className="label">Minimum Salary</label>
            <input
              type="text"
              name="min"
              className="input w-full"
              placeholder="Minimum Salary"
            />
          </div>

          <div>
            <label className="label">Currency</label>
            <select
              defaultValue="Currency"
              name="currency"
              className="select w-full"
            >
              <option disabled={true}>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EU</option>
            </select>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend text-base">Job Description</legend>
          <textarea
            name="job_description"
            className="textarea w-full resize-none "
            placeholder="Job description"
          ></textarea>
        </fieldset>

        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend text-base">
            Job Requirements
          </legend>
          <textarea
            name="job_requirement"
            className="textarea w-full resize-none"
            placeholder="Job Requirements (Seperate by comma)"
          ></textarea>
        </fieldset>

        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend text-base">
            Job Responsibilities
          </legend>
          <textarea
            name="job_responsibilities"
            className="textarea w-full resize-none"
            placeholder="Job Responsivilities (Seperate by comma)"
          ></textarea>
        </fieldset>

        {/* Job Status */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend text-base">Job Status</legend>
          <select
            defaultValue="Job Status"
            name="status"
            className="select w-full"
          >
            <option disabled={true}>Job Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </fieldset>

        {/* HR Name */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend text-base">HR Name</legend>
          <input
            type="text"
            name="hr_name"
            className="input w-full"
            placeholder="HR name"
          />
        </fieldset>

        {/* HR Email */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend text-base">HR Email</legend>
          <input
            type="text"
            defaultValue={user.email}
            name="hr_email"
            className="input w-full"
            placeholder="HR email"
          />
        </fieldset>

        <input
          type="submit"
          value="Add Job"
          className="btn btn-primary w-full my-3"
        />
      </form>
    </div>
  );
}

export default AddJob;

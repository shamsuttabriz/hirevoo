import React from "react";
import { Link, useLoaderData } from "react-router";

function JobDetails() {
  const { _id, company, title } = useLoaderData();

  return (
    <div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p>{company}</p>
      <Link to={`/job-apply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
}

export default JobDetails;

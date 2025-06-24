import { MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router";

function JobCard({ job }) {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    salaryRange,
    requirements,
    description,
    company,
    company_logo,
  } = job;
  return (
    <div className="card bg-base-100 shadow-md border-2 border-blue-300 p-3">
      <div className="flex gap-3">
        <figure>
          <img
            className="w-20 h-20 object-contain"
            src={company_logo}
            alt={company}
          />
        </figure>
        <div>
          <h3 className="text-3xl font-bold">{company}</h3>
          <p className="text-gray-600 flex gap-1 items-center">
            <MapPin size={16} />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-gray-700">
          <span className="font-bold">Salary:</span> {salaryRange.min} -{" "}
          {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description.slice(0, 80)}...</p>
        <div className="card-actions my-2">
          {requirements.slice(0, 2).map((req, index) => (
            <div
              key={index}
              className="badge-xs border border-blue-300 rounded-2xl text-blue-600 badge-outline text-xs"
            >
              {req}
            </div>
          ))}
        </div>
        <div className="card-actions">
          <Link to={`/jobs/${_id}`} className="btn btn-sm btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;

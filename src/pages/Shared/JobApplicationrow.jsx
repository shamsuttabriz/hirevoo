import React from "react";

function JobApplicationrow({ application, index }) {
  const { title, company, applicant, company_logo } = application;
  return (
    <tr>
      <th>
        {index + 1}
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={company_logo}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{company}</div>
          </div>
        </div>
      </td>
      <td>
        <span>{applicant}</span>
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
}

export default JobApplicationrow;

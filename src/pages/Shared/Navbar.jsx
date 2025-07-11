import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user, signOutUser } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {/* For applicant links. Check roles as well */}
      {user && (
        <>
          <li>
            <NavLink to="/my-applications">My Applications</NavLink>
          </li>
          <li>
            <NavLink to="/jobsByEmailAddress">My Posted Jobs</NavLink>
          </li>
        </>
      )}
      {/* For recruiter links. Check role as well */}
      {
        user && <>
          <li>
            <NavLink to="/add-job">Add Job</NavLink>
          </li>
        </>
      }
    </>
  );

  const handleSignOut = () => {
    // SignOut
    signOutUser()
      .then((res) => {
        if (res) {
          console.log("User Successfully Signout", res.user);
        }
      })
      .catch((err) => {
        console.log("ERROR: ", err.message);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-xl font-extrabold">
          HIREVOO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-6">
        {user ? (
          <button onClick={handleSignOut} className="cursor-pointer">
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/signin">Login</NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;

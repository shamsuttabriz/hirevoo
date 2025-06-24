import React, { Suspense } from "react";
import ApplicationStats from "./Shared/ApplicationStats";
import ApplicationList from "./Shared/ApplicationList";
import { Loader } from "lucide-react";
import useAuth from "../hooks/useAuth";
import { myApplicationsPromise } from "../api/applications";

function MyApplications() {
  const { user } = useAuth();
  return (
    <div className="max-w-6xl mx-auto">
      <ApplicationStats />
      <Suspense fallback={<Loader />}>
        <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)} />
      </Suspense>
    </div>
  );
}

export default MyApplications;

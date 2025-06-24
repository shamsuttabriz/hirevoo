import React, { Suspense, useEffect, useState } from "react";
import Banner from "./Shared/Banner";
import HotJobs from "./HotJobs";

function Home() {
  const jobPromise = fetch("http://localhost:3000/jobs").then((res) =>
    res.json()
  );

  return (
    <div>
      <Banner />
      <div className="max-w-6xl mx-auto">
        <Suspense fallback={<p>Loading...</p>}>
          <HotJobs jobsPromise={jobPromise} />
        </Suspense>
      </div>
    </div>
  );
}

export default Home;

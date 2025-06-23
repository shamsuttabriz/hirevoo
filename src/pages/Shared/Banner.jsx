import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

function Banner() {

 

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{
              y: [80, 120, 80],
              transition: { duration: 5, repeat: Infinity },
            }}
            src={team1}
            className="max-w-sm border-s-8 border-b-8 border-blue-600 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
          <motion.img
            animate={{
              x: [100, 150, 100],
              transition: { duration: 10, delay: 5, repeat: Infinity },
            }}
            src={team2}
            className="max-w-sm border-s-8 border-b-8 border-blue-600 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            className="text-5xl font-extrabold"
          >
            Find Your{" "}
            <motion.span animate={{ color: "#0000ff" }}>Dream Job</motion.span>{" "}
            with Hirevoo
          </motion.h1>
          <p className="py-6">
            Explore thousands of job listings tailored to your skills and
            passion. With Hirevoo, getting hired has never been easier—apply
            directly, track your progress, and connect with top employers in
            just a few clicks.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

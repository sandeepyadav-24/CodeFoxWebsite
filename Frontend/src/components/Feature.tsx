import React from "react";
import ShimmerButton from "./magicui/shimmer-button";

const Feature = () => {
  return (
    <div className="">
      {/** Her eWe have A FIrst  feature Section  */}
      <div className="feature-1 flex flex-col md:flex-row px-3 md:px-32 py-20 bg-gradient-to-r from-[#EFF7FD] to-[#FEFCEF] ">
        <div className="md:w-1/2">
          <h1 className="text-[#1C4980] text-xl md:text-6xl font-bold">
            Stay Ahead with Upcoming Company Visits
          </h1>
          <h3 className="text-[#747474] my-5">
            Get all the details about the companies visiting our campus soon.
            From company profiles to preparation tips and recruitment rounds,
            we’ve got you covered.
          </h3>
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Upcoming Visit
            </span>
          </ShimmerButton>
        </div>
        <div className="md:w-1/2">
          <img
            className="h-72 w-[600px]"
            src="https://www.propeers.in/images/full-time-mentorship/1.svg"
            alt=""
          />
        </div>
      </div>
      {/** Here We have A second Feature Section  */}
      <div className="feature-2 flex flex-col  md:flex-row m-5 md:m-20">
        <div className="md:w-1/2 bg-[#FEDD80] rounded-3xl pl-20 ">
          <img
            className="h-60 w-[560px] "
            src="https://www.propeers.in/images/full-time-mentorship/5.svg"
            alt=""
          />
        </div>
        <div className="md:w-1/2 px-10">
          <h1 className="text-[#1C4980] text-xl md:text-6xl font-bold">
            Explore Past Company Visits
          </h1>
          <h3 className="text-[#747474] my-5  ">
            Dive into our archive of past company visits, including detailed
            profiles, course relevance, and event dates. Learn from the past to
            prepare for the future.
          </h3>
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Past Visit
            </span>
          </ShimmerButton>
        </div>
      </div>
      {/** Here We have A third Feature  Scetion  */}
      <div className="feature-3 flex flex-col md:flex-row p-5 md:p-20 my-20  bg-gradient-to-r from-[#EFF7FD] to-[#FEFCEF]">
        <div className="headline md:w-1/2 flex flex-row">
          <div className="">
            <h1 className="text-[#1C4980] text-xl md:text-6xl font-bold">
              Compete and Shine on the Leaderboard
            </h1>
            <h3 className="text-[#747474] my-5">
              Participate in our weekly/biweekly DSA tests and see how you rank
              among your peers. Track your progress and aim for the top.
            </h3>
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                LeaderBoard
              </span>
            </ShimmerButton>
          </div>
        </div>
        <div className="card-ui md:w-1/2">
          <img
            className=" md:ml-20 w-[450px] h-60"
            src="https://www.propeers.in/_next/image?url=%2Fimages%2Ffor-companies-11.png&w=1920&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;

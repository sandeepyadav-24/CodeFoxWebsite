import React from "react";
import ShimmerButton from "./magicui/shimmer-button";
import { Swiper, SwiperSlide } from "swiper/react";
import AvatarCircles from "./magicui/avatar-circles";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];

  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex flex-col lg:flex-row mx-5 md:mx-20">
        {/* Left Section */}
        <div className="lg:w-1/2 py-10 lg:py-40 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            Your Ultimate{" "}
            <span className="text-[#1C4980] px-2">
              College Placement Preparation
            </span>{" "}
            Hub
          </h1>
          <AvatarCircles avatarUrls={avatarUrls} />
          <h3 className="text-[#787878] text-lg md:text-xl my-5">
            Your go-to platform for upcoming company visits, preparation tips,
            past visit archives, and DSA test leaderboards.
          </h3>
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Join CodeFox
            </span>
          </ShimmerButton>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 py-10 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Community Card */}
            <div className="bg-[#E9FBF1] rounded-xl p-5 flex flex-row items-center hover:shadow-lg transition-shadow">
              <div className="w-2/3">
                <p className="font-semibold">Community</p>
                <p className="text-sm">Connect with 500+ peers</p>
              </div>
              <div className="w-1/3">
                <img
                  src="https://www.propeers.in/images/small-card-3.svg"
                  alt="Community"
                  className="w-full"
                />
              </div>
            </div>

            {/* Ask Anything Card */}
            <div className="bg-[#FFCCF6] rounded-xl p-5 flex flex-row items-center hover:shadow-lg transition-shadow">
              <div className="w-2/3">
                <p className="font-semibold">Ask Anything</p>
                <p className="text-sm">& we find you a mentor</p>
              </div>
              <div className="w-1/3">
                <img
                  src="https://www.propeers.in/images/rafiki.svg"
                  alt="Ask Anything"
                  className="w-full"
                />
              </div>
            </div>

            {/* Jobs Card */}
            <div className="bg-[#FEF4E5] rounded-xl p-5 flex flex-row items-center hover:shadow-lg transition-shadow">
              <div className="w-2/3">
                <p className="font-semibold">Jobs</p>
                <p className="text-sm">Explore latest Opportunities</p>
              </div>
              <div className="w-1/3">
                <img
                  src="https://www.propeers.in/images/Mentors-cuate.svg"
                  alt="Jobs"
                  className="w-full"
                />
              </div>
            </div>

            {/* Roadmaps Card */}
            <div className="bg-[#FFE5E5] rounded-xl p-5 flex flex-row items-center hover:shadow-lg transition-shadow">
              <div className="w-2/3">
                <p className="font-semibold">Roadmaps</p>
                <p className="text-sm">Solve skill-based roadmaps</p>
              </div>
              <div className="w-1/3">
                <img
                  src="https://www.propeers.in/images/big-card-2.svg"
                  alt="Roadmaps"
                  className="w-full"
                />
              </div>
            </div>

            {/* Mentors Card */}
            <div className="bg-[#E4EDFE] rounded-xl p-5 flex flex-row items-center hover:shadow-lg transition-shadow">
              <div className="w-2/3">
                <p className="font-semibold">Mentors</p>
                <p className="text-sm">20+ Mentors, 1000+ Queries resolved</p>
              </div>
              <div className="w-1/3">
                <img
                  src="https://www.propeers.in/images/big-card-1.svg"
                  alt="Mentors"
                  className="w-full"
                />
              </div>
            </div>

            {/* Feed Card */}
            <div className="bg-[#94A3B8] rounded-xl p-5 flex flex-row items-center hover:shadow-lg transition-shadow">
              <div className="w-2/3">
                <p className="font-semibold">Feed</p>
                <p className="text-sm">Skill-based posts</p>
              </div>
              <div className="w-1/3">
                <img
                  src="https://www.propeers.in/images/cuate.svg"
                  alt="Feed"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Veteran Section */}
      <div className="flex flex-col lg:flex-row mx-5 md:mx-20 my-10">
        <div className="lg:w-1/5">
          <h1 className="text-[#1C4980] text-2xl font-semibold my-4">
            Industry Veteran
          </h1>
        </div>
        <div className="lg:w-4/5">
          {/* Add content for Industry Veteran section */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

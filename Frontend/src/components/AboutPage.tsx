import React from "react";
import AboutCard from "./AboutCard";

const AboutPage = () => {
  return (
    <div className="mx-5 md:mx-20 lg:mx-40">
      {/* Header Section */}
      <div className="text-center my-10">
        <h1 className="text-4xl md:text-6xl font-bold my-5">We do it all!</h1>
        <h2 className="text-xl md:text-3xl text-[#616B6F] my-5">
          Well, most of it.
        </h2>
        <h3 className="text-[#616B6F] my-5 text-sm md:text-md">
          You have the potential to build something that can change the world.
          We make sure that you get at least one shot at doing so.
        </h3>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <AboutCard
          name="Sandeep Yadav"
          imageLink="https://avatars.githubusercontent.com/u/103882286?v=4"
          linkedinLink="#"
          githubLink="#"
          emailLink="#"
        />
        <AboutCard
          name="Moh Faizan"
          imageLink="https://avatars.githubusercontent.com/u/117738645?v=4"
          linkedinLink="https://www.linkedin.com/in/moh-faizan-505319229/"
          githubLink="https://github.com/Faizanusmani06"
          emailLink="faizanusmani06@gmail.com"
        />
        <AboutCard
          name="Harsh Kumar Patel"
          imageLink="https://avatars.githubusercontent.com/u/126771343?v=4"
          linkedinLink="https://www.linkedin.com/in/harsh-kumar-patel-032388230"
          githubLink="https://github.com/harshkumarpatelh"
          emailLink="codeharsh13@gmail.com"
        />
      </div>
    </div>
  );
};

export default AboutPage;

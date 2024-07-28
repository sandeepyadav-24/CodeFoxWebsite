import React from "react";
import AboutCard from "./AboutCard";

const AboutPage = () => {
  return (
    <div className="mx-40">
      <div className=" text-center my-10">
        <h1 className="text-6xl font-bold my-5">We do it all!</h1>
        <h2 className="text-3xl text-[#616B6F] my-5">Well, most of it.</h2>
        <h3 className="text-[#616B6F] my-5 text-md">
          You have the potential to build something that can change the world.
          We make sure that you get at least one shot at doing so.
        </h3>
      </div>
      <div className="flex flex-row">
        <AboutCard
          name="Sandeep Yadav "
          imageLink="https://avatars.githubusercontent.com/u/103882286?v=4"
        />
        <AboutCard
          name="Moh. Faizan "
          imageLink="https://avatars.githubusercontent.com/u/117738645?v=4"
          linkedinLink="https://www.linkedin.com/in/moh-faizan-505319229/"
          githubLink="https://github.com/Faizanusmani06"
          emailLink="faizanusmani06@gmail.com"
        />
      </div>
    </div>
  );
};

export default AboutPage;

import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <div className="relative p-5 md:p-20  bg-transparent">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 text-5xl mx font-bold pr-44 mb-10 md:mb-0">
            We love <span className="text-[#81A2EF]">software</span> and the{" "}
            <span className="text-[#EEB17B]">people</span> who build them
          </div>
          <div className="md:w-1/2 flex flex-row md:pl-40">
            <div className="community md:mx-10">
              <h1 className="text-[#616B6F] font-medium">COMMUNITY</h1>
              <h3>Organize a hackathon</h3>
              <h3>Explore Hackathons</h3>
              <h3>Clubs</h3>
            </div>
            <div className="company mx-10">
              <h1 className="text-[#616B6F] font-medium">COMPANY</h1>
              <h3>Blog</h3>
              <h3>Contact us</h3>
            </div>
          </div>
        </div>
        <hr className="my-10 bg-black text-black" />
        <div className="flex flex-col md:flex-row">
          <div className="text-[#2F4AE3] md:w-1/2 text-3xl font-semibold mb-10 md:mb-0">
            Codefox
          </div>
          <div className="md:w-1/2 text-[#808684]">
            Built in the <span className="text-[#3670FF]">college Dorm</span>.
            Made with{" "}
            <a href="https://ui.shadcn.com/" className="text-[#3670FF]">
              ShadcnUi
            </a>
            ,
            <a href="https://magicui.design" className="text-[#3670FF]">
              MagicUi
            </a>
            and a bunch of other libraries that help make beautiful things on
            the internet possible. We are forever in your debt.
          </div>
        </div>
      </div>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full absolute bottom-0 left-0 -z-10"
        >
          <path
            fill="#F0EACF"
            fillOpacity="1"
            d="M0,96L34.3,101.3C68.6,107,137,117,206,133.3C274.3,149,343,171,411,186.7C480,203,549,213,617,197.3C685.7,181,754,139,823,133.3C891.4,128,960,160,1029,176C1097.1,192,1166,192,1234,160C1302.9,128,1371,64,1406,32L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
        <div className="relative z-10 bg-[#F0EACF] text-center py-5">
          © 2024 Codefox. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

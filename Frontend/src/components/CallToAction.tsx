import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-[#F3F1FF] flex flex-col md:flex-row mx-5 md:mx-20 rounded-3xl p-5 md:p-10">
      <div className="md:w-3/5">
        <div className="text-4xl md:text-6xl font-bold">
          <h1>Don't</h1>
          <h1>Just Be Good.</h1>
          <h1 className="text-[#6548EE]">Be Great. Be Pro.</h1>
        </div>
        <h3 className="text-[#383838] my-10 ">Ready to Ace Your Placements?</h3>
      </div>
      <div className="md:w-2/5 ">
        <img
          className="h-96 w-96 md:mr-40"
          src="https://www.propeers.in/_next/image?url=%2Fimages%2Fseek-guidance-illustration.png&w=640&q=75"
          alt=""
        />
      </div>
    </div>
  );
};

export default CallToAction;

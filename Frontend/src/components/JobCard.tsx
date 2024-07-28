import React from "react";

const JobCard = (props: any) => {
  return (
    <div className="border-[1px] border-[#CFCFCF] my-10 mx-3 rounded-2xl p-2 w-80  ">
      <div className={`coloredPart bg-[#FFE1CC] rounded-2xl p-4 h-48  `}>
        <span className="date bg-white px-3 rounded-2xl py-1  ">
          {props.date}
        </span>

        <div className="flex flex-row justify-between my-4">
          <div className="text-xl font-medium">{props.companyName}</div>

          <img
            src={`${props.logoLink}`}
            alt="amazon-logo"
            className="w-8 h-8 rounded-full bg-white"
          />
        </div>
        <div className="my-2">
          {props.roles.map((role: string, index: number) => {
            return (
              <span className="border-[1px] text-sm border-[#9AB2AC] mx-1 rounded-2xl px-2">
                {role}
              </span>
            );
          })}
        </div>
      </div>
      <div className="details flex justify-between mt-3 ">
        <div className="text-">{props.location}</div>
        <div className="bg-black text-white px-2 py-1 rounded-3xl">Details</div>
      </div>
    </div>
  );
};

export default JobCard;

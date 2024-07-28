import React from "react";
import JobCard from "./JobCard";

const VisitedCompany = () => {
  const color = ["FFE1CC", "D4F6EC", "E3DAFA", "DFF2FE", "FBE2F4", "ECEFF4"];
  const randomNumber = () => {
    return Math.floor(Math.random() * 6);
  };
  const company = [
    {
      companyName: "Afford Medical",
      date: "20 May, 2024",
      logoLink:
        "https://pbs.twimg.com/profile_images/1058752590773608448/ScCr6E-e_200x200.png",
      color: color[randomNumber()],
      roles: ["Frontend Developer", "Software Developer"],
      location: "Hyderabad",
    },
    {
      companyName: "Josh Technology",
      date: "5 June, 2024",
      logoLink:
        "https://s3.amazonaws.com/jtg-marcomm/wp-content/uploads/2019/08/09103837/jtg-logo.png",
      color: color[randomNumber()],
      roles: ["software tester", "Software Developer", "Frontend Developer"],
      location: "Gurgaon",
    },
    {
      companyName: "Mediology",
      date: "9 July, 2024",
      logoLink:
        "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/65597caf367e9e00017f9d71/picture",
      color: color[randomNumber()],
      roles: ["Software Developer"],
      location: "Gurgaon",
    },
  ];

  return (
    <div className=" px-20 bg-[#F9F9F9] ">
      <div className="flex flex-row font-bold">
        <h1 className=" py-10 text-5xl ">All Visited Companies</h1>
        <span className="my-12 px-5 mx-5 text-3xl border-[1px] border-[#BBBBBB] rounded-3xl ">
          {company.length}
        </span>
      </div>

      <div className="flex flex-wrap mx-20">
        {company.map((job, index) => {
          return (
            <JobCard
              companyName={job.companyName}
              date={job.date}
              logoLink={job.logoLink}
              color={job.color}
              roles={job.roles}
              location={job.location}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VisitedCompany;

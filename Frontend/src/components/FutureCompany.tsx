import React from "react";
import JobCard from "./JobCard";

const FutureCompany = () => {
  const company = [
    {
      companyName: "MoonDrive",
      date: "12 July, 2024",
      logoLink:
        "https://lh3.googleusercontent.com/p/AF1QipMQNO9riMlDAtMO5ReVry7Chlxm5yKlvKTmHvWz=s1360-w1360-h1020",
      color: "DFF2FE",
      roles: ["Ui/Ux Developer"],
      location: "Noida",
    },
    {
      companyName: "TailNode",
      date: "20 July, 2024",
      logoLink:
        "https://media.licdn.com/dms/image/C4D0BAQFIJD1b95XKXQ/company-logo_200_200/0/1630514748445?e=1728518400&v=beta&t=eqErUEzf-GDVblelMpZelSjvbAdN8q34Qr8ppbMf0hQ",
      color: "ECEFF4",
      roles: [
        "Frontend Developer",
        "Backend Developer",
        "Android Developer",
        "Associate Developer",
      ],
      location: "Delhi",
    },
    {
      companyName: "DeltaX",
      date: "17 July, 2024",
      logoLink:
        "https://media.licdn.com/dms/image/C4D0BAQFIJD1b95XKXQ/company-logo_200_200/0/1630514748445?e=1728518400&v=beta&t=eqErUEzf-GDVblelMpZelSjvbAdN8q34Qr8ppbMf0hQ",
      color: "ECEFF4",
      roles: ["Software Developer"],
      location: "Gurgaon",
    },

    {
      companyName: "Lutron",
      date: "25 July, 2024",
      logoLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1swE1GmASv4WfyCOiR8xTjz0RkaInsZ_Dsw&s",
      color: "ECEFF4",
      roles: ["Software Developer"],
      location: "Gurgaon",
    },

    {
      companyName: "ArGo Soft",
      date: "28 July, 2024",
      logoLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1swE1GmASv4WfyCOiR8xTjz0RkaInsZ_Dsw&s",
      color: "ECEFF4",
      roles: ["Software Developer"],
      location: "Gurgaon",
    },
  ];
  return (
    <main className=" px-20 bg-[#F9F9F9] ">
      <div className="flex flex-ro font-bold">
        <h1 className=" py-10  text-5xl ">All Upcoming Companies</h1>
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
              color={job.color}
              roles={job.roles}
              location={job.location}
              logoLink={job.logoLink}
            />
          );
        })}
      </div>
    </main>
  );
};

export default FutureCompany;

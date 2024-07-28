import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

const AboutCard = (props: any) => {
  return (
    <div className="rounded-2xl border-2 border-red mx-5 p-2  ">
      <div>
        <img
          src={props.imageLink}
          alt="Profile Picture"
          className="rounded-full h-40 w-40 "
        />

        <h1 className="name bg-[#3670FF] text-white rounded-lg px-2 py-1 text-center">
          {props.name}
        </h1>
        <h1 className="font-semibold text-center">Developer</h1>
      </div>
      <div className="links flex flex-row  text-[#759EF0] px-5  my-10">
        {/**<div className="email bg-[#EBEEFE] text-[#759EF0] rounded-full p-2 mx-1">
          <Link href={props.linkedinLink}>
            <FaLinkedinIn />
          </Link>
        </div>

        <div className="email bg-[#EBEEFE] text-[#759EF0] rounded-full p-2 mx-1">
          <Link href={props.githubLink}>
            <FiGithub />
          </Link>
        </div>
        <div className="email bg-[#EBEEFE] text-[#759EF0] rounded-full p-2 mx-1">
          <Link href={`mailto:${props.emailLink}`}>
            <CgMail />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default AboutCard;

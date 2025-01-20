import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

const AboutCard = (props: any) => {
  return (
    <div className="rounded-xl bg-white border border-[#E4EAEB] p-6 text-center hover:shadow-xl transition-shadow transform hover:-translate-y-1 w-full md:w-80">
      {/* Profile Picture */}
      <img
        src={props.imageLink}
        alt="Profile Picture"
        className="rounded-full h-32 w-32 mx-auto border-4 border-[#3670FF] p-1"
      />

      {/* Name and Role */}
      <h1 className="text-2xl font-bold text-[#2F4AE3] mt-5">{props.name}</h1>
      <h2 className="text-lg text-[#616B6F] mt-2">Developer</h2>

      {/* Social Media Links */}
      <div className="flex flex-row justify-center gap-6 mt-6">
        {props.linkedinLink && (
          <Link
            href={props.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-[#759EF0] hover:text-[#2F4AE3] transition-colors">
              <FaLinkedinIn size={24} />
            </div>
          </Link>
        )}
        {props.githubLink && (
          <Link
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-[#759EF0] hover:text-[#2F4AE3] transition-colors">
              <FiGithub size={24} />
            </div>
          </Link>
        )}
        {props.emailLink && (
          <Link href={`mailto:${props.emailLink}`}>
            <div className="text-[#759EF0] hover:text-[#2F4AE3] transition-colors">
              <CgMail size={24} />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AboutCard;

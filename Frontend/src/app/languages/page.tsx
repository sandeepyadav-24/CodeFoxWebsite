"use client";
{
  /**import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const Languages = () => {
  const cpp = [
    {
      source: "codeHelp - Love Babbar",
      courseName: "A Complete C++ Placement Course",
      imageLink: "https://i3.ytimg.com/vi/WQoB2z67hvY/maxresdefault.jpg",
      moveLink: "/languages/cpp",
    },
    {
      source: "codeWithHarry - Harry",
      courseName: "C++ Tutorials",
      imageLink: "https://i3.ytimg.com/vi/j8nAHeVKL08/maxresdefault.jpg",
      moveLink: "/languages/cpp",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Banner Section }
      <div className="Banner flex flex-col md:flex-row bg-gradient-to-r from-[#4150D3] to-[#965AD1] p-10 md:p-20">
        {/* Text Section }
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h1 className="font-semibold text-3xl md:text-4xl my-3">
            A Complete Preparation Guide for Your Coding
          </h1>
          <h3 className="text-lg text-gray-200">Preparation is the key!</h3>
          <p className="text-gray-200 mt-2 text-sm md:text-base">
            This is what exactly this guide will help you with. We have curated
            a complete preparation guide for you to prepare in a structured
            manner.
          </p>
        </div>

        {/* Image Section /}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/RrfSCfjQ3K-no-background-UyymGjHtYGIugnDGdf6YYsvqVgYjtz.png"
            alt="fox_image"
            width={200}
            height={200}
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
          />
        </div>
      </div>

      {/* Guided Path Section /}
      <div className="bg-[#FFFCEE]">
        <h1 className="text-3xl font-semibold py-10 text-center md:text-left md:mx-20">
          Explore Guided Path Categories
        </h1>

        <div className="mx-5 md:mx-20 my-5 bg-white rounded-lg shadow-lg">
          {/* Tabs /}
          <div className="flex flex-row bg-[#FFFCEE] text-[#757575] text-lg md:text-2xl">
            <div className="mx-2 md:mx-5 bg-white px-3 py-2 rounded-t-lg cursor-pointer hover:bg-gray-100 transition-colors">
              C++
            </div>
            <div className="mx-2 md:mx-5 bg-white px-3 py-2 rounded-t-lg cursor-pointer hover:bg-gray-100 transition-colors">
              Java
            </div>
          </div>

          {/* Course Cards /}
          <div className="border-[#7533B6] border-t-2 flex flex-col md:flex-row flex-wrap justify-center md:justify-start p-5">
            {cpp.map((e, index) => (
              <div
                key={index}
                className="my-5 mx-2 md:mx-5 bg-[#EEB07B] rounded-md p-4 hover:shadow-lg transition-shadow cursor-pointer w-full md:w-[45%] lg:w-[30%]"
              >
                <Link href={e.moveLink}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={e.imageLink}
                      alt="Thumbnail"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <h1 className="font-semibold text-xl md:text-2xl my-3">
                    {e.source}
                  </h1>
                  <p className="text-sm md:text-base">{e.courseName}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Languages;


 */
}
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

// Define the type for a single guided path
type GuidedPath = {
  source: string;
  courseName: string;
  imageLink: string;
  moveLink: string;
};

// Define the type for the guidedPaths object
type GuidedPaths = {
  languages: GuidedPath[];
  webDevelopment: GuidedPath[];
  mobileDevelopment: GuidedPath[];
};

const Languages = () => {
  const [activeTab, setActiveTab] = useState<keyof GuidedPaths>("languages"); // State to manage active tab

  // Sample data for guided paths
  const guidedPaths: GuidedPaths = {
    languages: [
      {
        source: "codeHelp - Love Babbar",
        courseName: "A Complete C++ Placement Course",
        imageLink: "https://i3.ytimg.com/vi/WQoB2z67hvY/maxresdefault.jpg",
        moveLink: "/languages/cpp",
      },
      {
        source: "codeWithHarry - Harry",
        courseName: "C++ Tutorials",
        imageLink: "https://i3.ytimg.com/vi/j8nAHeVKL08/maxresdefault.jpg",
        moveLink: "/languages/cpp",
      },
      {
        source: "freeCodeCamp",
        courseName: "Python for Beginners",
        imageLink: "https://i3.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg",
        moveLink: "/languages/python",
      },
      {
        source: "Traversy Media",
        courseName: "JavaScript Crash Course",
        imageLink: "https://i3.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg",
        moveLink: "/languages/javascript",
      },
    ],
    webDevelopment: [
      {
        source: "Academind",
        courseName: "React.js - The Complete Guide",
        imageLink: "https://i3.ytimg.com/vi/DLX62G4lc44/maxresdefault.jpg",
        moveLink: "/web-development/react",
      },
      {
        source: "The Net Ninja",
        courseName: "Node.js Crash Course",
        imageLink: "https://i3.ytimg.com/vi/zb3Qk8SG5Iw/maxresdefault.jpg",
        moveLink: "/web-development/node",
      },
      {
        source: "Dennis Ivy",
        courseName: "Django for Beginners",
        imageLink: "https://i3.ytimg.com/vi/F5mRW0jo-U4/maxresdefault.jpg",
        moveLink: "/web-development/django",
      },
      {
        source: "Amigoscode",
        courseName: "Spring Boot Tutorial",
        imageLink: "https://i3.ytimg.com/vi/9SGDpanrc8U/maxresdefault.jpg",
        moveLink: "/web-development/spring-boot",
      },
    ],
    mobileDevelopment: [
      {
        source: "CodeWithChris",
        courseName: "Swift for Beginners",
        imageLink: "https://i3.ytimg.com/vi/comQ1-x2a1Q/maxresdefault.jpg",
        moveLink: "/mobile-development/swift",
      },
      {
        source: "The Net Ninja",
        courseName: "Flutter Tutorial",
        imageLink: "https://i3.ytimg.com/vi/1ukSR1GRtMU/maxresdefault.jpg",
        moveLink: "/mobile-development/flutter",
      },
      {
        source: "Academind",
        courseName: "React Native Crash Course",
        imageLink: "https://i3.ytimg.com/vi/0-S5a0eXPoc/maxresdefault.jpg",
        moveLink: "/mobile-development/react-native",
      },
      {
        source: "Coding in Flow",
        courseName: "Kotlin for Beginners",
        imageLink: "https://i3.ytimg.com/vi/F9UC9DY-vIU/maxresdefault.jpg",
        moveLink: "/mobile-development/kotlin",
      },
    ],
  };

  return (
    <div className="bg-[#F9FAFB]">
      <Navbar />

      {/* Banner Section */}
      <div className="Banner flex flex-col md:flex-row bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] p-10 md:p-20">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-5xl my-3">
            Your Ultimate Coding Preparation Hub
          </h1>
          <h3 className="text-lg text-gray-200 mt-4">
            Master coding with structured learning paths, curated resources, and
            expert guidance.
          </h3>
          <button className="mt-6 bg-white text-[#1E3A8A] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/RrfSCfjQ3K-no-background-UyymGjHtYGIugnDGdf6YYsvqVgYjtz.png"
            alt="fox_image"
            width={300}
            height={300}
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
          />
        </div>
      </div>

      {/* Guided Path Section */}
      <div className="bg-white py-10">
        <h1 className="text-3xl font-bold text-center text-[#1E3A8A]">
          Explore Guided Path Categories
        </h1>

        {/* Tabs */}
        <div className="flex flex-row justify-center mt-8">
          <button
            onClick={() => setActiveTab("languages")}
            className={`mx-4 px-6 py-2 rounded-full font-semibold ${
              activeTab === "languages"
                ? "bg-[#1E3A8A] text-white"
                : "bg-gray-100 text-[#1E3A8A] hover:bg-gray-200"
            } transition-colors`}
          >
            Languages
          </button>
          <button
            onClick={() => setActiveTab("webDevelopment")}
            className={`mx-4 px-6 py-2 rounded-full font-semibold ${
              activeTab === "webDevelopment"
                ? "bg-[#1E3A8A] text-white"
                : "bg-gray-100 text-[#1E3A8A] hover:bg-gray-200"
            } transition-colors`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveTab("mobileDevelopment")}
            className={`mx-4 px-6 py-2 rounded-full font-semibold ${
              activeTab === "mobileDevelopment"
                ? "bg-[#1E3A8A] text-white"
                : "bg-gray-100 text-[#1E3A8A] hover:bg-gray-200"
            } transition-colors`}
          >
            Mobile Development
          </button>
        </div>

        {/* Course Cards */}
        <div className="mx-5 md:mx-20 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidedPaths[activeTab].map((e, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <Link href={e.moveLink}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={e.imageLink}
                      alt="Thumbnail"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h1 className="font-bold text-xl text-[#1E3A8A]">
                      {e.source}
                    </h1>
                    <p className="text-gray-600 mt-2">{e.courseName}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Languages;

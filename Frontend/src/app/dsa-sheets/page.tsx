{
  /**import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const page = () => {
  const striver = [
    { name: "Striver A2z Sheet" },
    { name: "Striver SDE Sheet" },
    { name: "Striver 79 Sheet" },
    { name: "Blind 75 Sheet" },
  ];
  return (
    <div>
      <Navbar />
      <div className=" Banner flex flex-row bg-gradient-to-r from-[#4150D3] to-[#965AD1] p-20">
        <div className="w-1/2 text-white  ">
          <h1 className="font-semibold text-4xl my-3">
            A Complete preparattion guide for your coding
          </h1>
          <h3>Preparation is the key!</h3>
          <h3>
            This is what exactly this guide will help you with. We have curated
            a complete preparation guide for you to prepare in a structured
            manner
          </h3>
        </div>
        <div className="w-1/2 px-40">
          <Image
            src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/RrfSCfjQ3K-no-background-UyymGjHtYGIugnDGdf6YYsvqVgYjtz.png"
            alt="fox_image"
            width={300}
            height={300}
          ></Image>
        </div>
      </div>
      <div className=""></div>
      <div className="mx-40">
        <div className="my-20">
          <h1>Love Babbar - CodeHelp</h1>
          <div className="border-black border-2 border-dashed my-5">
            450 Question Sheet
          </div>
        </div>
        <div className="my-20">
          <h1>Striver - takeyouforward</h1>
          <div className="flex flex-row my-5">
            {striver.map((e) => {
              return (
                <div className="border-black border-2 border-dashed mx-3">
                  {e.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page; */
}

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const Page = () => {
  const striver = [
    { name: "Striver A2Z Sheet", icon: "📘" },
    { name: "Striver SDE Sheet", icon: "💻" },
    { name: "Striver 79 Sheet", icon: "📊" },
    { name: "Blind 75 Sheet", icon: "👨‍💻" },
  ];

  return (
    <div>
      <Navbar />
      {/* Banner Section */}
      <div className="Banner flex flex-col md:flex-row bg-gradient-to-r from-[#4150D3] to-[#965AD1] p-10 md:p-20">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h1 className="font-semibold text-3xl md:text-4xl my-3">
            A Complete Preparation Guide for Your Coding Journey
          </h1>
          <h3 className="text-lg text-gray-200">
            Preparation is the key to success!
          </h3>
          <p className="text-gray-200 mt-2 text-sm md:text-base">
            This guide is curated to help you prepare in a structured and
            efficient manner. Choose from the best DSA sheets and start your
            coding journey today.
          </p>
        </div>

        {/* Image Section */}
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
      {/** <div className="Banner flex flex-row bg-gradient-to-r from-[#4150D3] to-[#965AD1] p-20">
        <div className="w-1/2 text-white">
          <h1 className="font-semibold text-4xl my-3">
            A Complete Preparation Guide for Your Coding Journey
          </h1>
          <h3 className="text-lg text-gray-200">
            Preparation is the key to success!
          </h3>
          <p className="text-gray-200 mt-2">
            This guide is curated to help you prepare in a structured and
            efficient manner. Choose from the best DSA sheets and start your
            coding journey today.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/RrfSCfjQ3K-no-background-UyymGjHtYGIugnDGdf6YYsvqVgYjtz.png"
            alt="fox_image"
            width={300}
            height={300}
          />
        </div>
      </div>*/}

      {/* DSA Sheets Section */}
      <div className="mx-10 lg:mx-40 my-20">
        {/* Love Babbar Section */}
        <div className="my-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-5">
            Love Babbar - CodeHelp
          </h1>
          <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-gray-700">
              450 Question Sheet
            </h2>
            <p className="text-gray-500 mt-2">
              A comprehensive sheet covering all important DSA topics.
            </p>
          </div>
        </div>

        {/* Striver Section */}
        <div className="my-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-5">
            Striver - takeUforward
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {striver.map((sheet, index) => (
              <div
                key={index}
                className="border-2 border-dashed border-gray-300 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-4">{sheet.icon}</div>
                <h2 className="text-xl font-semibold text-gray-700">
                  {sheet.name}
                </h2>
                <p className="text-gray-500 mt-2">
                  A curated list of problems to master DSA.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;

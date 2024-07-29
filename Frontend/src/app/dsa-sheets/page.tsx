import React from "react";
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

export default page;

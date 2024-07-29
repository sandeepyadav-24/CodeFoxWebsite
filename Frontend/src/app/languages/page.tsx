import React from "react";
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
      {/* Banner Languages Section  */}
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
      <div className=" bg-[#FFFCEE]">
        <h1 className="text-3xl font-semibold py-10 mx-20">
          Explore Guided path categories
        </h1>
        <div className="mx-20 my-5 bg-white">
          <div className="flex flex-row bg-[#FFFCEE] text-[#757575] text-2xl">
            <div className="mx-5 bg-white px-5 py-2">C++</div>
            <div className="mx-5 bg-white px-5 py-2">Java</div>
          </div>
          <div className="border-[#7533B6] border-t-2 first-line flex flex-row pb-10">
            {cpp.map((e) => {
              return (
                <div className="my-5 mx-10 bg-[#EEB07B] rounded-md p-2">
                  <Link href={e.moveLink}>
                    <div className="">
                      <Image
                        src={e.imageLink}
                        alt="Thumbnail"
                        height={300}
                        width={300}
                      ></Image>
                    </div>
                    <h1 className="font-semibold text-2xl my-5">{e.source}</h1>
                    <h1>{e.courseName}</h1>
                  </Link>
                </div>
              );
            })}
          </div>
          {/** <div className="flex flex-row justify-center">
            <div className="my-10 mx-5 p-4 border-black border-dashed border-2">
              <Link href={"/languages/cpp"}>Choose C++</Link>
            </div>
            <div className="my-10 mx-5 p-4 border-black border-dashed border-2">
              <Link href={"/languages/java"}>Choose Java</Link>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Languages;

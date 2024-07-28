import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Languages = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className="my-10 mx-5 p-4 border-black border-dashed border-2">
          <Link href={"/languages/cpp"}>Choose C++</Link>
        </div>
        <div className="my-10 mx-5 p-4 border-black border-dashed border-2">
          <Link href={"/languages/java"}>Choose Java</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Languages;

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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

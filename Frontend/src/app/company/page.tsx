"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import MultiStepForm from "../../components/MultiForm";

const page = () => {
  return (
    <main>
      <Navbar />
      <MultiStepForm />
      {/**<Company /> */}
      <Footer />
    </main>
  );
};

export default page;

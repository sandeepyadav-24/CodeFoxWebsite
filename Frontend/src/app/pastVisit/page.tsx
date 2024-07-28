import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import VisitedCompany from "../../components/VisitedCompany";

const pastVisit = () => {
  return (
    <main>
      <Navbar />
      <VisitedCompany />
      <Footer />
    </main>
  );
};

export default pastVisit;

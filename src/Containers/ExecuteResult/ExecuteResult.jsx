import Footer from "../../Components/Footer/Footer";
import MainNavbar from "../../Components/Navbar/MainNavbar";
import Results from "../Results/Results";
import "./ExecuteResult.css";

import React from "react";

const ExecuteResult = () => {
  return (
    <>
      <MainNavbar />
      <div className="executedResultPage">
        <Results />
      </div>
      <Footer />
    </>
  );
};

export default ExecuteResult;

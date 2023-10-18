import "./Analyze.css";
import React, { useState } from "react";
import Results from "../../Containers/Results/Results";
import MainNavbar from "../../Components/Navbar/MainNavbar";
import Footer from "../../Components/Footer/Footer";
import EntitiesText from "../../Containers/EntitiesText/EntitiesText";

const Analyze = () => {
  const [entitiesVisible, setEntitiesVisible] = useState(true);
  const [resultsVisible, setResultsVisible] = useState(false);

  const showEntities = () => {
    setEntitiesVisible(true);
    setResultsVisible(false);
  };

  const showResults = () => {
    setEntitiesVisible(false);
    setResultsVisible(true);
  };

  return (
    <>
      <MainNavbar />
      <div className="analyzePage">
        <div className="analyzeBttnsContainer">
          <button className="analyzeBttns" onClick={showEntities}>
            <span style={{ color: entitiesVisible ? "#0158f4" : "#000" }}>
              Entities
            </span>
          </button>
          <button className="analyzeBttns" onClick={showResults}>
            <span style={{ color: resultsVisible ? "#0158f4" : "#000" }}>
              SNOMED-CT Concepts
            </span>
          </button>
        </div>
        {entitiesVisible && <EntitiesText />}
        {resultsVisible && <Results />}
      </div>
      <Footer />
    </>
  );
};

export default Analyze;

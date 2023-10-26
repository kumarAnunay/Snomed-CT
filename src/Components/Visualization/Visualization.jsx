import React, { useEffect, useState } from "react";
import "./Visualization.css";

const Visualization = ({ data }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    let text = localStorage.getItem("freeText");
    if (text) {
      setWords(text.split(" "));
    }
  }, []);

  return (
    <div className="visualizeArrows">
      {data.map((item, index) => (
        <div className="arcContainer">
          <div className="halfCircle">
            <div className="arrowhead" />
          </div>
          <div key={index} className="textArrowContainer">
            <p>{words[item.start]}</p>
            <p>{words[item.end]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Visualization;

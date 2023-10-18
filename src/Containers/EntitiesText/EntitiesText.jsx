import axios from "axios";
import "./EntitiesText.css";
import { useEffect, useState } from "react";

const EntitiesText = () => {
  const [responseText, setResponseText] = useState([]);
  const [loading, setLoading] = useState(true);

  const analyzeText = async () => {
    try {
      const response = await axios.post(
        "http://kaushal.ogtech.in:8001/api/analyze",
        {
          free_text: localStorage.getItem("freeText"),
        }
      );
      setResponseText(response.data.words);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    analyzeText();
  }, []);

  return (
    <div className="entitiesTextPage">
      <h3>Analyzed Text</h3>

      <div className="analyzedTextContainer">
        {loading ? (
          <div className="loaderContainer">
            <div className="loader"></div>
          </div>
        ) : (
          responseText.length > 0 &&
          responseText.map((item, index) =>
            item.tag === "NOUN" || item.tag === "PROPN" ? (
              <span key={index} className="matchedText">
                {item.text}
              </span>
            ) : (
              <span key={index} style={{ margin: "0 5px" }}>
                {item.text}
              </span>
            )
          )
        )}
      </div>
    </div>
  );
};

export default EntitiesText;

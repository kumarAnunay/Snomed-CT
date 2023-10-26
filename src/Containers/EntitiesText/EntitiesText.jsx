import axios from "axios";
import "./EntitiesText.css";
import { useEffect, useState } from "react";
// import Visualization from "../../Components/Visualization/Visualization";

const EntitiesText = () => {
  const [responseText, setResponseText] = useState([]);
  // const [responseArcs, setResponseArcs] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [freeText, setFreeText] = useState("");

  const analyzeText = async () => {
    try {
      const response = await axios.post(
        "http://kaushal.ogtech.in:8001/api/analyze",
        {
          free_text: localStorage.getItem("freeText"),
        }
      );
      setResponseText(response.data.words);
      // setResponseArcs(response.data.arcs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    analyzeText();
  }, []);

  // useEffect(() => {
  //   let text = localStorage.getItem("freeText");
  //   if (text) {
  //     setFreeText(text.split(" "));
  //   }
  // }, []);

  return (
    <div className="entitiesTextPage">
      <h3>Analyzed Text</h3>

      <div className="analyzedTextContainer">
        {loading ? (
          <div className="loaderContainer">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            <div className="contentContainers">
              <h5
                style={{
                  marginBottom: "12px",
                }}
                className="contentTitle"
              >
                Visualized Entities:
              </h5>
              <div>
                {responseText.length > 0 ? (
                  responseText.map((item, index) => (
                    <span
                      key={index}
                      className={
                        item.tag === "NOUN" || item.tag === "PROPN"
                          ? "matchedText"
                          : ""
                      }
                    >
                      {item.text}
                      {item.tag === "NOUN" || item.tag === "PROPN" ? (
                        <sub className="supEntity">M.ENTITY</sub>
                      ) : (
                        ""
                      )}
                    </span>
                  ))
                ) : (
                  <div className="noReponseText">No Data Found !!!</div>
                )}
              </div>
            </div>
            <div className="contentContainers">
              <h5 className="contentTitle">Term & their Type TABLE :</h5>
              <div className="visualizeTableContainer">
                <table className="resultsTable visualizeTextTable">
                  <thead className="visualizeTableHeader">
                    <tr>
                      <th>Term</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {responseText?.length ? (
                      responseText.map((item, index) => (
                        <tr key={index}>
                          <td>{item.text}</td>
                          <td>{item.tag}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} style={{ textAlign: "center" }}>
                          No Data Found !!!
                        </td>
                      </tr>
                    )} */}
                    <tr>
                      <th>severe</th>
                      <th>modifier</th>
                    </tr>
                    <tr>
                      <th>pain</th>
                      <th>clinical finding</th>
                    </tr>
                    <tr>
                      <th>right knee</th>
                      <th>finding site</th>
                    </tr>
                    <tr>
                      <th>diabetes</th>
                      <th>observable entity</th>
                    </tr>
                    <tr>
                      <th>stomach</th>
                      <th>body structure</th>
                    </tr>
                    <tr>
                      <th>pneumonia</th>
                      <th>disorder</th>
                    </tr>
                    <tr>
                      <th>right knee</th>
                      <th>body structure</th>
                    </tr>
                    <tr>
                      <th>cancer</th>
                      <th>morphologic abnormality</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* <Visualization data={responseArcs} /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default EntitiesText;

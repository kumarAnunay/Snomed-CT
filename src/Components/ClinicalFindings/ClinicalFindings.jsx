import React, { useContext, useEffect, useState } from "react";
import "./ClinicalFindings.css";
import { data } from "../../utils/Constants/ClinicalFindings";

let timerId;

const ClinicalFindings = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const freeText = localStorage.getItem("freeText");
    const searchText = freeText.toLowerCase().split(" ");
    let filteredData = data;

    filteredData = filteredData.filter((item) => {
      return searchText.some((text) => {
        return item.preferredTerm.toLowerCase().includes(text);
      });
    });

    console.log("data", filteredData);

    timerId = setTimeout(() => {
      setTableData(filteredData);
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="clinicalFindings">
      <h3>Clinical Findings</h3>
      <div>
        {loading ? (
          <table>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index}>
                  <td className="skeleton-cell"></td>
                  <td className="skeleton-cell"></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : tableData.length ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Preferred Term</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.preferredTerm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table>
            <tbody>
              <tr>
                <td colSpan={2} style={{ textAlign: "center" }}>
                  No Data Found !!!
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ClinicalFindings;

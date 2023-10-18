import React, { useContext, useEffect, useState } from "react";
import "./ClinicalFindings.css";
import axios from "axios";

// let timerId;

const ClinicalFindings = ({ loading, tableData }) => {
  // const [tableData, setTableData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const filterData = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://kaushal.ogtech.in:8001/api/get_ecl_query",
  //       {
  //         free_text: JSON.stringify(localStorage.getItem("freeText")),
  //       }
  //     );
  //     setTableData(response.data.results);
  //     // console.log("Free Text Response:- ", tableData);
  //     localStorage.setItem("query", response.data.query);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching data from the API:", error);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   filterData();
  // }, []);

  // useEffect(() => {
  //   const freeText = localStorage.getItem("freeText");
  //   const searchText = freeText.toLowerCase().split(" ");
  //   let filteredData = data;

  //   filteredData = filteredData.filter((item) => {
  //     return searchText.some((text) => {
  //       return item.preferredTerm.toLowerCase().includes(text);
  //     });
  //   });

  //   console.log("data", filteredData);

  //   timerId = setTimeout(() => {
  //     setTableData(filteredData);
  //     setLoading(false);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, []);

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
                <th>Concept ID</th>
                <th>Preferred Term</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.concept_id}</td>
                  <td>{item.entitiy}</td>
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

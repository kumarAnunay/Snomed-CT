import { useContext, useEffect, useState } from "react";
import "./Results.css";
import axios from "axios";

let queryResponse;

const Results = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    queryResponse = localStorage.getItem("query");
  }, []);

  const filterData = async () => {
    try {
      const response = await axios.post(
        "http://kaushal.ogtech.in:8001/api/execute_ecl_query",
        {
          ecl: queryResponse,
        }
      );
      setTableData(response?.data?.results?.items);
      // console.log("Query Response Data:- ", tableData);
      setLoading(false);
    } catch (error) {
      console.log("API Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    filterData();
  }, []);

  return (
    <div className="resultsPage">
      <h3>Results</h3>

      {loading ? (
        <table className="skeleton-table">
          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index}>
                <td className="skeleton-cell"></td>
                <td className="skeleton-cell"></td>
                <td className="skeleton-cell"></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="resultsTable">
          <thead>
            <tr>
              <th>Concept</th>
              <th>Preferred Term</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.length ? (
              tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.fsn.term}</td>
                  <td>{item.pt.term}</td>
                  <td>{item.conceptId}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  No Data Found !!!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Results;

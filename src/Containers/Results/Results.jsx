import MainNavbar from "../../Components/Navbar/MainNavbar";
import Footer from "../../Components/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import "./Results.css";
import { data } from "../../utils/Constants/QueryTable";

let timerId;

const Results = () => {
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
    <>
      <MainNavbar />
      <div className="resultsPage">
        <h3>Results</h3>

        <table className="resultsTable">
          <thead>
            <tr>
              <th>Concept</th>
              <th>Preferred Term</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <>
                {[...Array(10)].map((_, index) => (
                  <tr key={index}>
                    <td className="skeleton-cell"></td>
                    <td className="skeleton-cell"></td>
                    <td className="skeleton-cell"></td>
                  </tr>
                ))}
              </>
            ) : tableData.length ? (
              tableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.concept}</td>
                  <td>{item.preferredTerm}</td>
                  <td>{item.id}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} style={{ textAlign: "center" }}>
                  No Data Found !!!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Results;

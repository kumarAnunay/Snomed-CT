import MainNavbar from "../../Components/Navbar/MainNavbar";
import Footer from "../../Components/Footer/Footer";
import "./QueryBuilder.css";
import ClinicalFindings from "../../Components/ClinicalFindings/ClinicalFindings";
import Query from "../../Components/Query/Query";
import { useEffect, useState } from "react";
import axios from "axios";

const QueryBuilder = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterData = async () => {
    try {
      const response = await axios.post(
        "http://kaushal.ogtech.in:8001/api/get_ecl_query",
        {
          free_text: JSON.stringify(localStorage.getItem("freeText")),
        }
      );
      setTableData(response.data);
      localStorage.setItem("query", response.data.query);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    filterData();
  }, []);
  return (
    <>
      <MainNavbar />
      <div className="queryBuilderPage">
        <ClinicalFindings
          className="clinicalFindings"
          loading={loading}
          tableData={tableData.results}
        />
        <Query queryResponseText={tableData.query} />
      </div>
      <Footer />
    </>
  );
};

export default QueryBuilder;

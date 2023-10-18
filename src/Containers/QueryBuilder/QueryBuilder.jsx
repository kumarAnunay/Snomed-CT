import MainNavbar from "../../Components/Navbar/MainNavbar";
import Footer from "../../Components/Footer/Footer";
import "./QueryBuilder.css";
import ClinicalFindings from "../../Components/ClinicalFindings/ClinicalFindings";
import Query from "../../Components/Query/Query";

const QueryBuilder = () => {
  return (
    <>
      <MainNavbar />
      <div className="queryBuilderPage">
        <ClinicalFindings className="clinicalFindings" />
        <Query />
      </div>
      <Footer />
    </>
  );
};

export default QueryBuilder;

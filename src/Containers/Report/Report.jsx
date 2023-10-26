import Footer from "../../Components/Footer/Footer";
import MainNavbar from "../../Components/Navbar/MainNavbar";
import "./Report.css";

const Report = () => {
  return (
    <>
      <MainNavbar />
      <iframe
        className="iframeContainer"
        title="Sepsis-detail"
        src="https://app.fabric.microsoft.com/reportEmbed?reportId=c4c767ac-bdfe-4d87-ad4a-64351ccc34a2&autoAuth=true&ctid=82a01527-d2f2-4d65-879b-b44dc60ad266"
        frameborder="1"
        allowFullScreen="true"
      ></iframe>
      <Footer />
    </>
  );
};

export default Report;

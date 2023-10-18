import "./Footer.css";
import TaliunLogo from "../../assets/Taliun-Logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>Powered by</p>
        <img src={TaliunLogo} alt="Taliun" />
      </div>
    </div>
  );
};

export default Footer;

import "./Navbar.css";
import SnomedCT from "../../assets/snomed-ct.png";
import MicrosoftFabric from "../../assets/microsoft-fabric.png";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={"nav-container"}>
      <div>
        <img
          src={SnomedCT}
          alt="snomed-ct"
          className={"nav-image1"}
          onClick={() => navigate("/")}
        />
      </div>
      <div>
        <img
          src={MicrosoftFabric}
          alt="microsoft-fabric"
          className={"nav-image2"}
        />
      </div>
    </div>
  );
};

export default Navbar;

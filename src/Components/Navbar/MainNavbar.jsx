import "./Navbar.css";
import SnomedCT from "../../assets/snomed-ct.png";
import MicrosoftFabric from "../../assets/microsoft-fabric.png";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import AssessmentIcon from "@mui/icons-material/Assessment";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

const MainNavbar = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setEmail(localStorage.getItem("userEmail"));
    // console.log(email);
  }, [email]);

  const menuOpenHandler = (event) => {
    setUser(event.currentTarget);
  };

  const menuCLoseHandler = () => {
    setUser(null);
  };

  const signoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  const avatarName = email ? email[0].toUpperCase() : "";
  const userName = email ? email.split("@")[0].toUpperCase() : "";

  return (
    <div className={"nav-container"}>
      <div>
        <img
          src={SnomedCT}
          alt="snomed-ct"
          className={"nav-image1"}
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="avatarLogo">
        <Tooltip title="Report">
          <AssessmentIcon
            className="reportIcon"
            onClick={() => navigate("/report")}
          />
        </Tooltip>
        <Box className="avatar">
          <Tooltip title="Profile">
            <IconButton onClick={menuOpenHandler} sx={{ p: 0 }}>
              <Avatar sx={{ bgcolor: "#0158f4" }} className="avtarIcon">
                {avatarName}
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={user}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(user)}
            onClose={menuCLoseHandler}
          >
            <MenuItem>
              <Typography>{userName}</Typography>
            </MenuItem>
            <MenuItem onClick={menuCLoseHandler}>
              <Typography onClick={signoutHandler}>Sign Out</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <a
          href="https://www.microsoft.com/en-us/microsoft-fabric"
          target="_blank"
        >
          <img
            src={MicrosoftFabric}
            alt="microsoft-fabric"
            className={"nav-image2"}
          />
        </a>
      </div>
    </div>
  );
};

export default MainNavbar;

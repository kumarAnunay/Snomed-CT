import "./Signin.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";
import { ValuesContext } from "../../Components/ContextProvider";
import { useContext } from "react";

let timerId;

const Signin = () => {
  const [signinStatus, setSigninStatus] = useState(false);

  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  const navigate = useNavigate();

  const { signinDetails, setSigninDetails } = useContext(ValuesContext);

  const { email, password } = signinDetails;

  const handleInput = (event) => {
    const field = event.target.id;
    const value = event.target.value;

    setSigninDetails({
      ...signinDetails,
      [field]: value,
    });

    if (field === "email") {
      emailErrorRef.current.style.display = "none";
    } else if (field === "password") {
      passwordErrorRef.current.style.display = "none";
    }
  };

  const handleSignin = (event) => {
    event.preventDefault();

    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!email.match(emailPattern)) {
      emailErrorRef.current.style.display = "block";
    }
    if (password.length < 6 || password.length > 60) {
      passwordErrorRef.current.style.display = "block";
    } else {
      setSigninStatus(true);
      localStorage.setItem("userEmail", email);
    }
  };

  useEffect(() => {
    // console.log(signinStatus);
    if (signinStatus) {
      timerId = setTimeout(() => {
        navigate("/home");
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [signinStatus]);

  return (
    <>
      <Navbar />
      <div className="signinContainer">
        <div className="signin">
          <h3>Sign In</h3>
          <form onChange={handleInput} onSubmit={handleSignin}>
            <div>
              <TextField
                type="email"
                id="email"
                label="Email"
                variant="outlined"
                className="input"
                value={email}
              />
              <div className="error" ref={emailErrorRef}>
                Please enter valid Email.
              </div>
            </div>

            <div>
              <TextField
                type="password"
                id="password"
                label="Password"
                variant="outlined"
                className="input"
                value={password}
              />
              <div className="error" ref={passwordErrorRef}>
                Password length must be between 6 to 60 characters.
              </div>
            </div>

            <span className="forgotPassword">Forgot password?</span>

            <div className="bttnContainer">
              <div>
                No account? <span>Create account</span>
              </div>
              <button type="submit" className="signinBtn">
                {signinStatus ? <div className="loader"></div> : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;

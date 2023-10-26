import MainNavbar from "../../Components/Navbar/MainNavbar";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router";

let timerId;

const Home = () => {
  const [showAnalyze, setShowAnalyze] = useState(false);
  const [showEcl, setShowEcl] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const navigate = useNavigate();

  const inputHandler = (event) => {
    setInput(event.target.value);
    setShowAnalyze(false);
  };

  const freeTextHandler = () => {
    if (input == "") {
      inputRef.current.focus();
    } else {
      setShowAnalyze(true);
      localStorage.setItem("freeText", input);
    }
  };

  const showEclHandler = () => {
    if (input == "") {
      inputRef.current.focus();
    } else {
      setShowEcl(true);
      localStorage.setItem("freeText", input);
    }
  };

  useEffect(() => {
    if (showAnalyze) {
      timerId = setTimeout(() => {
        navigate("/analyze");
        // window.location.reload();
      }, 1500);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [showAnalyze]);

  useEffect(() => {
    if (showEcl) {
      timerId = setTimeout(() => {
        navigate("/queryBuilder");
        // window.location.reload();
      }, 1500);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [showEcl]);

  return (
    <>
      <MainNavbar />
      <br />
      <div className="homePageContainer">
        <div className="homePageContent">
          <h3>Input Text</h3>
          <textarea
            id="freeText"
            value={input}
            placeholder="Add Free Text here ..."
            onChange={inputHandler}
            className="freeTextInput"
            ref={inputRef}
          ></textarea>
          <div className="homePageBttnContainer">
            <button onClick={showEclHandler}>
              {showEcl ? <div className="loader"></div> : "Show ECL"}
            </button>
            <button onClick={freeTextHandler}>
              {showAnalyze ? <div className="loader"></div> : "Analyze"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

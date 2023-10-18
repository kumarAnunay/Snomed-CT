import { useNavigate } from "react-router";
import "./Query.css";
import { useContext, useEffect, useRef, useState } from "react";
import { ValuesContext } from "../ContextProvider";

let timerId;

const Query = () => {
  const [execute, setExecute] = useState(false);
  const inputRef = useRef(null);

  const { queryText, setqueryText } = useContext(ValuesContext);

  const navigate = useNavigate();

  const inputHandler = (event) => {
    setqueryText(event.target.value);
    setExecute(false);
  };

  const queryHandler = () => {
    if (queryText == "") {
      inputRef.current.focus();
    } else {
      setExecute(true);
      localStorage.setItem("queryText", queryText);
    }
  };

  useEffect(() => {
    // console.log(execute);
    if (execute) {
      timerId = setTimeout(() => {
        navigate("/results");
        window.location.reload();
      }, 1500);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [execute]);

  return (
    <div className="query">
      <h3>ECL Query</h3>
      <div>
        <textarea
          id="freeText"
          value={queryText}
          placeholder="Write query here ..."
          onChange={inputHandler}
          className="textArea"
          ref={inputRef}
        ></textarea>
        <p>
          Ex:- 84114007 |Heart failure (disorder)| or &#60;&#60; 73211009
          |Diabetes mellitus (disorder)| or &#60;&#60; 703272007 |Heart failure
          with reduced ejection fraction (disorder)| or &#60;&#60; 38341003
          |Hypertensive disorder, systemic arterial (disorder)|
        </p>
      </div>
      <div className="queryBttn">
        <button onClick={queryHandler}>
          {execute ? <div className="loader"></div> : "Execute"}
        </button>
      </div>
    </div>
  );
};

export default Query;

import { useNavigate } from "react-router";
import "./Query.css";
import { useContext, useEffect, useRef, useState } from "react";
// import { ValuesContext } from "../ContextProvider";

let timerId;
const Query = ({ queryResponseText }) => {
  const [execute, setExecute] = useState(false);
  const inputRef = useRef(null);

  const [queryText, setQueryText] = useState("");

  // const { queryText, setqueryText } = useContext(ValuesContext);

  const navigate = useNavigate();

  const inputHandler = (event) => {
    setQueryText(event.target.value);
    setExecute(false);
  };

  useEffect(() => {
    if (queryResponseText) {
      setQueryText(queryResponseText);
    }
  }, [queryResponseText]);

  const queryHandler = () => {
    if (queryText == "") {
      inputRef.current.focus();
    } else {
      setExecute(true);
    }
  };

  useEffect(() => {
    // console.log(execute);
    if (execute) {
      timerId = setTimeout(() => {
        navigate("/executedResult");
        // window.location.reload();
      }, 1000);
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
          readOnly={true}
        ></textarea>
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

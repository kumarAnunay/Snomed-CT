import React, { useEffect } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import "./ErrorBoundary.css";

const ErrorBoundary = ({ children }) => {
  useEffect(() => {
    const errorHandler = (error) => {
      console.error("Error", error);
      localStorage.setItem("error", JSON.stringify(error));
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
      localStorage.removeItem("error");
    };
  }, []);

  const storedError = localStorage.getItem("error");

  if (storedError) {
    return (
      <div className="errorBoundary">
        <div>
          <ErrorIcon className="errorIcon" />
        </div>
        <h3>Something went wrong</h3>
        <p>There was a problem processing the request. Please try again.</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;

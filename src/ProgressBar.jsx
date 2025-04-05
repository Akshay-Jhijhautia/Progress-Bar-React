import React from "react";
import "./App.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translateX(${progress - 100}%)`,
          color: progress > 2 ? "white" : "black",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;

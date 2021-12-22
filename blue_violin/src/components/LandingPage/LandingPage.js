import React from "react";
import "./LandingPage.css";

// Function based React Component
const LandingPage = (props) => {
  // Default Class to apply to Component
  let classList = `LandingPage`;

  return (
    <div className={classList}>
      <div className="day">
        <a className="link" href="https://jenniferhouck.com/" target="_blank">
        <button className="button" >
          <div>DEV</div>
        </button>
        </a>
      </div>
      <div className="night">
        <button className="button" >VIOLIN</button>
      </div>
    </div>
  );
};

export default LandingPage;

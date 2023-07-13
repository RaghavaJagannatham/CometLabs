import React from "react";
import "./Header_styles.css";
const Header = () => {
  return (
    <div className="container" id="heading-container">
      <img
        className="logo"
        src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg"
        alt="header"
      />
      
      <h1 className="primary-header">
        Describe the value of booking an appointment
      </h1>
      <p className="desc">
        No need to get clever. Tell people exactly what you're offering, then
        use this space to communicate your key value proposition.
      </p>
    </div>
  );
};
export default Header;

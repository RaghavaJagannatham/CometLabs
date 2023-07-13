import * as React from "react";
import './benefits'
const Benefit = ({ props }) => {
  return (
    <div className="container-benefit">
      <img src={props.img} alt="icon" />
      <div>
        <h2 className="benefit-heading">{props.heading}</h2>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};
export default Benefit;

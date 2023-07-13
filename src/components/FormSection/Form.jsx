import * as React from "react";
import "./Form_styles.css";
const Form = () => {
  return (
    <div className="contact-form-container">
      <h2 className="form-heading">Schedule an Appointment</h2>

      <p className="form-description">
        Here, let visitors know what will happen when they complete your form.
      </p>

      <form className="Contact-form">
        <input
          type="text"
          placeholder="First name"
          required
          className="input-field"
        />
        <input
          type="text"
          placeholder="Last name"
          required
          className="input-field"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          className="input-field"
        />
        <input
          type="text"
          placeholder="Phone Number"
          required
          className="input-field"
        />
        <select required className="input-field">
          <option>Type of appointment</option>
          <option id="1">Type 1</option>
          <option id="2">Type 2</option>
          <option id="3">Type 3</option>
        </select>
        <button className="submit">Schedule Now</button>
      </form>
    </div>
  );
};
export default Form;

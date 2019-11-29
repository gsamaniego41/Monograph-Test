import React from "react";
import "./Form.css";

function Form({handleChange, input}) {
  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea
        className="form-textarea"
        name="feedback"
        rows="4"
        value={input.feedback}
        onChange={handleChange}
        placeholder="Let us know what we did well or could improve..."
      />

      <label className="form-label">How many in your party?</label>
      <input
        className="form-input"
        type="number"
        name="party"
        min="1"
        value={input.party}
        onChange={handleChange}
      />

      <label className="form-label">How was your meal?</label>
      <div>
        *** Add Emoji selector ***
        {/* Your Code goes here */}
      </div>
    </div>
  );
}

export default Form;

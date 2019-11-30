import React from "react";
import "./Form.css";

function Form({handleChange, input, ratings}) {
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
      <div className="emoji-picker">
        {ratings.map((rating, index) => {
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={index}
                onChange={handleChange}
              />
              {`${rating.emoji} ${rating.label}`}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Form;

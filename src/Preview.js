import React from "react";
import "./Preview.css";

function Preview({input}) {
  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">
          <span role="img" aria-label="emoji">
            😍
          </span>
        </div>
        <div
          className={`preview-feedback ${
            input.feedback === "" ? "placeholder-text" : ""
          }`}
        >
          {input.feedback
            ? input.feedback
            : "Let us know what we did well or could improve..."}
        </div>
        <div className="preview-party">
          <span>{input.party}</span> people dined here.
        </div>
      </div>
    </section>
  );
}

export default Preview;

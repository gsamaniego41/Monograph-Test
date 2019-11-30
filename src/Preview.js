import React from "react";
import "./Preview.css";

function Preview({input, ratings}) {
  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">
          <span
            role="img"
            aria-label={
              input.rating && ratings[input.rating].label.toLowerCase()
            }
          >
            {input.rating && ratings[input.rating].emoji}
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
        <div className="preview-party">{input.party} people dined here.</div>
      </div>
    </section>
  );
}

export default Preview;

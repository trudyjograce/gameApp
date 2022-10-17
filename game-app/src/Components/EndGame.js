import React from "react";

// CSS
import "../CSS/style.css";

const EndGame = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          <b>X</b>
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default EndGame;

import React from "react";
import classnames from "classnames";
import cardback from "../Images/Back.png";

// CSS
import "../CSS/style.css";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    // check if card is active & clicked
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      // assign flipped status to clciked card
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card-face">
        <img src={cardback} alt="cardback" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt="card face card-face-front" />
      </div>
    </div>
  );
};

export default Card;

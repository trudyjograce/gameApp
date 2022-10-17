/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";

// Bootstrap CSS
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Custom CSS
import "../CSS/style.css";

// Import Components
import Card from "./Cards";
import EndGame from "./EndGame";

// Images
import card1 from "../Images/front (1).png";
import card2 from "../Images/front (2).png";
import card3 from "../Images/front (3).png";
import card4 from "../Images/front (4).png";
import card5 from "../Images/front (5).png";
import card6 from "../Images/front (6).png";
import card7 from "../Images/front (7).png";
import card8 from "../Images/front (8).png";
import card9 from "../Images/front (9).png";

//create array for card pack
const playcardsArr = [
  {
    name: "Bowser",
    image: card1,
  },
  {
    name: "Luigi",
    image: card2,
  },
  {
    name: "Toad",
    image: card3,
  },
  {
    name: "Goomba",
    image: card4,
  },
  {
    name: "Mario",
    image: card5,
  },
  {
    name: "Mario2",
    image: card6,
  },
  {
    name: "Princess_Peach",
    image: card7,
  },
  {
    name: "Cheep-Cheep",
    image: card8,
  },
  {
    name: "Toadette",
    image: card9,
  },
];
// track progress: game # vs moves
const endScores = [];

//shuffle cards to allow card positions to move after reset (refer https://www.ahtcloud.com/fisher-yates-shuffle-algorithm)
function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

export default function Game() {
  // set state on all components
  // create a deck with pairs of each card
  const [cards, setCards] = useState(() =>
    shuffleCards(playcardsArr.concat(playcardsArr))
  );
  // track the cards flipped
  const [openCards, setOpenCards] = useState([]);
  // keep track of the cards that have been matched and "removed"
  const [clearedCards, setClearedCards] = useState({});
  // "removed" cards get disabled
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);

  // count how many moves game to track hiscore later
  const [moves, setMoves] = useState(0);

  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  // have a clear way to tell the player if they won
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const timeout = useRef(null);

  // disable/enable cards once two cards open in game
  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  // manage actions when cards are clicked
  const handleCardClick = (index) => {
    // only two cards should open at any time (max two in opencards array)
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      // after each pair is opened moves increases by 1
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  // check if open cards match each other
  useEffect(() => {
    const evaluate = () => {
      const [first, second] = openCards;
      enable();
      if (cards[first].name === cards[second].name) {
        setClearedCards((prev) => ({ ...prev, [cards[first].name]: true }));
        setOpenCards([]);
        return;
      }

      //Flip the cards back after specified time
      timeout = setTimeout(() => {
        setOpenCards([]);
      }, 500);
    };
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [cards, openCards]);

  useEffect(() => {
    const checkCompletion = () => {
      if (Object.keys(clearedCards).length === playcardsArr.length) {
        setIsOpen(true);
        // once all cards are cleared evaluate total moves: highScore is lowest number of Moves (math.min)
        const highScore = Math.min(moves, bestScore);
        // save "bestScore" to state
        setBestScore(highScore);
        // track total moves/game
        endScores.push(moves);
        // save highscores to local storage
        localStorage.setItem("bestScore", highScore);
      }
    };
    checkCompletion();
  }, [bestScore, clearedCards, moves]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };
  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.name]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setIsOpen(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(playcardsArr.concat(playcardsArr)));
  };

  return (
    <div className="cardGame">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
      <div className="container" id="game">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      <br />
      {/* Restart Game */}
      <div className="restart">
        <Button onClick={handleRestart} variant="warning" active>
          Restart
        </Button>
      </div>
      <br />
      {/* game outcome */}
      <div className="score">
        <div className="moves">
          <span className="bold">Moves:</span> {moves}
        </div>
      </div>

      {/* Footer - Game Progress */}
      <div className="gameProgress" id="stats">
        <span className="bold">Your Progress:</span>
        <>
          <ul>
            {endScores.map((finalScore, index) => (
              <li key={index}>
                Game # {index + 1} ~ Score:
                {finalScore}
              </li>
            ))}
          </ul>
        </>
      </div>

      {/* Modal will pop open once game is done */}
      <div>
        {isOpen && (
          <EndGame
            content={
              <>
                <b>You completed the challenge!!</b>
                <p>
                  {" "}
                  You completed the game in {moves} moves. Your best score is{" "}
                  {bestScore} moves.
                </p>
                <Button onClick={handleRestart} variant="warning">
                  Play Again...
                </Button>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";

function Flashcard({ question, answer, showAnswer, setShowAnswer, userGuess, setUserGuess }) {
  const [feedback, setFeedback] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const handleSubmitAnswer = () => {
    if (userGuess.toLowerCase() === answer.toLowerCase()) {
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
    setIsAnswered(true);
  };

  // Handle click for card flip, only if the answer is submitted
  const handleCardClick = () => {
    if (isAnswered) {
      setShowAnswer(!showAnswer);
    }
  };

  return (
    <div
      className={`flashcard ${showAnswer ? "flip" : ""}`}
      onClick={handleCardClick} // Only flip the card after submitting the answer
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <p>{question}</p>
        </div>
        <div className="flashcard-back">
          <p>{answer}</p>
        </div>
      </div>

      {/* Show input section before card flips */}
      {!showAnswer && !isAnswered && (
        <div className="user-input-section">
          <input
            type="text"
            placeholder="Enter your answer"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
          />
          <button onClick={handleSubmitAnswer}>Submit Answer</button>
        </div>
      )}

      {/* Show feedback after answer is submitted */}
      {isAnswered && (
        <div className="feedback-section">
          <p className={`feedback ${feedback === "correct" ? "correct" : "incorrect"}`}>
            {feedback === "correct" ? "Correct!" : "Incorrect!"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Flashcard;

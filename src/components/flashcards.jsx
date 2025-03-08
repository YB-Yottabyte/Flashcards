function Flashcard({ question, answer, showAnswer, setShowAnswer }) {
    return (
      <div
        className={`flashcard ${showAnswer ? "flip" : ""}`}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <p>{question}</p>
          </div>
          <div className="flashcard-back">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Flashcard;
  
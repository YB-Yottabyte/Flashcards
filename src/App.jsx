import { useState } from "react";
import Flashcard from "./components/flashcards";
import "./App.css";

const flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the largest ocean?", answer: "Pacific Ocean" },
  { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
  { question: "What is the smallest planet in our solar system?", answer: "Mercury" },
  { question: "What is the chemical symbol for gold?", answer: "Au" },
  { question: "What is the capital of Japan?", answer: "Tokyo" },
  { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
  { question: "What is the powerhouse of the cell?", answer: "Mitochondria" },
  { question: "What year did the Titanic sink?", answer: "1912" },
  { question: "What is the longest river in the world?", answer: "Nile River" }
];

function App() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setShowAnswer(false);
    setIndex(Math.floor(Math.random() * flashcards.length));
  };

  return (
    <div className="app-container">
      <h1>Flashcard App</h1>
      <p>Total Cards: {flashcards.length}</p>
      <Flashcard
        question={flashcards[index].question}
        answer={flashcards[index].answer}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
      />
      <button className="next-button" onClick={nextCard}>
        Next Card
      </button>
    </div>
  );
}

export default App;
// src/App.tsx

import React, { useState, useEffect } from 'rea
ct';
import logo from './logo.svg';
import './App.css';
import QuestionsData from './data/QuestionsData.json';

interface Question {
  question:string;
  answers: string[];
  correctAnswer: number;
}

const TotalQuestions = 3;

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  useEffect(() => {
    // Load questions from the data file
    setQuestions(QuestionsData.questions);
  }, []);

  const handleAnswerClick = (answerIndex: number) => {
    if (quizCompleted) return;

    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = answerIndex;
      return updatedAnswers;
    });

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    if (currentQuestion + 1 < TotalQuestions) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      // Quiz completed
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setUserAnswers([]);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Quiz App
        </p>
      </header>

      {quizCompleted ? (
        <div className="Quiz-summary">
          <p className="Score">Your Score: {score}</p>
          <button className="Restart-button" onClick={handleRestartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="Quiz-container">
          <p className="Question-count">Question {currentQuestion + 1} of {TotalQuestions}</p>
          <p className="Score">Score: {score}</p>
          <div className="Question">
            <p>{questions[currentQuestion].question}</p>
          </div>
          <div className="Answers">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button key={index} className="Answer-button" onClick={() => handleAnswerClick(index)}>
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

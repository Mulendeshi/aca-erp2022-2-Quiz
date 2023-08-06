import React, { useEffect, useState } from 'react';
import logo from './aca.png';
import './App.css';
//import {QuestionData} from './Data/QuestionsData.json';

interface Quiz_Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score,setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [quizData, setQuizData] = useState<Quiz_Question[]>([]);


  // using the useeffect to load questions from .json file
  // useEffect(() => {
  //   //function to fetch data
  //   const fetchQuizData =async () => {
  //     try {
  //       const response = await fetch('/Data/QuestionsData');
  //       const data = await response.json();
  //       setQuizData(data);
  //     } catch (error) {
  //       console.error('Error fetching the quiz:', error);
  //     }
  //   };
  //   fetchQuizData();
  // },[]);
  const sampleQuizData: Quiz_Question[] = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      id: 2,
      question: 'Which planet is known as the "Red Planet"?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    
  ];

  useEffect(() => {
    setQuizData(sampleQuizData); // Use the sample data here
  }, []);


  //a function that handles clicks from user
  const handleAnswerClick = (correctAnswer: boolean) =>{
    //increament score if answer is correct
    if(correctAnswer){
      setScore(score + 1);
    }

    //goes to the next question
    const nextQuestion = currentQuestion + 1;

    if(nextQuestion < quizData.length ){
      setCurrentQuestion(nextQuestion);

    } else{
      alert(`The Quiz has Ended Your score: ${score}/${quizData.length}`);
    }

  }

  //function that saves the selected answer
  const handleAnswer = (answer: string) =>{
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
  };
  if(quizData.length===0){
    return <div> Loading Page... </div>;
  }

  const currentQuizQuestion = quizData[currentQuestion];

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers([]);
    //setShowMessage(false); // Hide the message when restarting the quiz
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{maxWidth:150, maxHeight:150}} className="App-logo" alt="logo" />
        <p>
         
        </p>
        <a
          className="App-link"
          href="https://africacode.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I Love ACA
        </a>
      </header>

      {currentQuestion < quizData.length ? (
        <div className="Quiz-container"> {/* Use "Quiz-container" class for the quiz */}
          <h2 className="count">Question {currentQuizQuestion.id}/{quizData.length}</h2>
          <h3 className="Question">{currentQuizQuestion.question}</h3>
          <div className="Answers"> {/* Use "Answers" class for the answer options */}
            {currentQuizQuestion.options.map((option, index) => (
              <button
                key={index}
                className="Answer-button"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={() => handleAnswerClick(currentQuizQuestion.correctAnswer === userAnswers[currentQuestion])}>
            Next
          </button>
        </div>
      ) : (
        <div className="Result"> {/* Use "Result" class for the quiz result */}
          <h2>You have completed the Quiz</h2>
          <p className="Score">Your score: {score}/{quizData.length}</p>
          <p className="User-answers">Answers: {userAnswers.join(', ')}</p>
          <button className="Restart-button" onClick={handleRestart}>
                Restart Quiz
              </button>
        </div>
      )}
    </div>
  );
}

export default App;

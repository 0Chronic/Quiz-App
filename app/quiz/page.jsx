'use client'
import React, {useState} from 'react'

import { quiz } from './data.js'

const page = () => {

    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  
    const { questions } = quiz;
    const { question, answers, correctAnswer } = questions[activeQuestion];
  
    //   Select and check answer
    const onAnswerSelected = (answer, idx) => {
      setChecked(true);
      setSelectedAnswerIndex(idx);
      if (answer === correctAnswer) {
        setSelectedAnswer(true);
        console.log('true');
      } else {
        setSelectedAnswer(false);
        console.log('false');
      }
    };
  
    // Calculate score and increment to next question
    const nextQuestion = () => {
      setSelectedAnswerIndex(null);
      setResult((prev) =>
        selectedAnswer
          ? {
              ...prev,
              score: prev.score + 5,
              correctAnswers: prev.correctAnswers + 1,
            }
          : {
              ...prev,
              wrongAnswers: prev.wrongAnswers + 1,
            }
      );
      if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1);
      } else {
        setActiveQuestion(0);
        setShowResult(true);
      }
      setChecked(false);
    };

  return (
    <div className='container'>
        <h1>Quiz Page</h1>
        <div>
            <h2>
                Questions: 1
                <span>/5</span>
            </h2>
        </div>
    </div>
  )
}

export default page
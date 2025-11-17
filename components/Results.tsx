
import React from 'react';
import type { Question } from '../types';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  questions: Question[];
  userAnswers: { [key: number]: string };
}

const Results: React.FC<ResultsProps> = ({ score, totalQuestions, onRestart, questions, userAnswers }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <div className="bg-gray-800 rounded-xl p-8 shadow-2xl text-center">
        <h2 className="text-4xl font-extrabold text-indigo-400 mb-4">Quiz Complete!</h2>
        <p className="text-xl text-gray-300">Your final score is:</p>
        <p className="text-7xl font-bold my-6 text-white">
          {score} <span className="text-3xl text-gray-400">/ {totalQuestions}</span>
        </p>
        <div className="w-full bg-gray-700 rounded-full h-8 mb-6">
            <div 
                className="bg-indigo-600 h-8 rounded-full text-center text-white font-bold text-lg flex items-center justify-center" 
                style={{ width: `${percentage}%` }}
            >
                {percentage}%
            </div>
        </div>
        <button
          onClick={onRestart}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition duration-300"
        >
          <i className="fas fa-redo mr-2"></i>
          Restart Quiz
        </button>
      </div>
      
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-center mb-6 text-indigo-300">Review Your Answers</h3>
        <div className="space-y-6">
          {questions.map((q, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <p className="font-bold text-lg">
                <span className="text-indigo-400 mr-2">{q.id}.</span> {q.question}
              </p>
              <div className="mt-4 pl-6 border-l-4"
                style={{borderColor: userAnswers[q.id] === q.answer ? '#4ade80' : '#f87171'}}
              >
                <p className="text-gray-400">Your answer: <span className="font-semibold text-white">{userAnswers[q.id] || "Not answered"}</span></p>
                {userAnswers[q.id] !== q.answer && <p className="text-gray-400">Correct answer: <span className="font-semibold text-green-400">{q.answer}</span></p>}
                <details className="mt-2">
                  <summary className="cursor-pointer text-yellow-400 hover:text-yellow-300">Explanation</summary>
                  <p className="text-gray-300 mt-2">{q.explanation}</p>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;

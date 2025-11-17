
import React from 'react';
import type { Question, Option } from '../types';
import CodeBlock from './CodeBlock';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (option: string) => void;
  isAnswered: boolean;
}

const getOptionClass = (option: Option, isAnswered: boolean, selectedAnswer: string | null, correctAnswer: string) => {
  const baseClasses = "w-full text-left p-4 my-2 rounded-lg border-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  const hoverClasses = "hover:bg-gray-700 hover:border-indigo-500";
  
  if (!isAnswered) {
    if (selectedAnswer === option.letter) {
      return `${baseClasses} bg-indigo-600 border-indigo-500`;
    }
    return `${baseClasses} bg-gray-800 border-gray-600 ${hoverClasses}`;
  }

  // After answer is revealed
  if (option.letter === correctAnswer) {
    return `${baseClasses} bg-green-800 border-green-500 cursor-not-allowed`;
  }
  if (option.letter === selectedAnswer) {
    return `${baseClasses} bg-red-800 border-red-500 cursor-not-allowed`;
  }
  return `${baseClasses} bg-gray-800 border-gray-600 cursor-not-allowed opacity-60`;
};

const CheckIcon = () => (
    <i className="fas fa-check-circle text-green-400 ml-3"></i>
);
  
const CrossIcon = () => (
    <i className="fas fa-times-circle text-red-400 ml-3"></i>
);

const QuestionCard: React.FC<QuestionCardProps> = ({ question, selectedAnswer, onSelectAnswer, isAnswered }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 md:p-8 shadow-2xl w-full">
      <h2 className="text-2xl font-bold mb-4 text-indigo-300">Question {question.id}</h2>
      <p className="text-lg text-gray-300 mb-2">{question.question}</p>
      {question.code && <CodeBlock code={question.code} />}
      <div className="mt-6">
        {question.options.map((option) => (
          <button
            key={option.letter}
            onClick={() => onSelectAnswer(option.letter)}
            disabled={isAnswered}
            className={getOptionClass(option, isAnswered, selectedAnswer, question.answer)}
          >
            <span className="font-bold mr-3 bg-gray-700 text-indigo-300 rounded-md px-2 py-1">{option.letter}</span>
            <span dangerouslySetInnerHTML={{ __html: option.text.replace(/`/g, '<code class="bg-gray-700 text-yellow-300 px-1 rounded">') }} />
             {isAnswered && option.letter === question.answer && <CheckIcon />}
             {isAnswered && selectedAnswer === option.letter && option.letter !== question.answer && <CrossIcon />}
          </button>
        ))}
      </div>
      {isAnswered && (
         <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h3 className="font-bold text-lg text-yellow-300">Explanation</h3>
            <p className="mt-2 text-gray-300">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;

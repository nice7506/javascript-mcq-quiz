import React from 'react';
import type { Question } from '../types';

interface QuestionListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToQuestion: (questionIndex: number) => void;
  questions: Question[];
  userAnswers: { [key: number]: string };
  currentQuestionId: number;
}

const QuestionListModal: React.FC<QuestionListModalProps> = ({
  isOpen,
  onClose,
  onJumpToQuestion,
  questions,
  userAnswers,
  currentQuestionId,
}) => {
  if (!isOpen) return null;

  const getQuestionStatusClass = (question: Question) => {
    const baseClass = "w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg transition-all duration-200 border-2";
    const hoverClass = "hover:scale-110 hover:shadow-lg";

    if (question.id === currentQuestionId) {
      return `${baseClass} ${hoverClass} bg-indigo-600 border-indigo-400 text-white`;
    }

    const userAnswer = userAnswers[question.id];
    if (userAnswer) {
      if (userAnswer === question.answer) {
        return `${baseClass} ${hoverClass} bg-green-700 border-green-500 text-white`; // Correct
      } else {
        return `${baseClass} ${hoverClass} bg-red-700 border-red-500 text-white`; // Incorrect
      }
    }

    return `${baseClass} ${hoverClass} bg-gray-700 border-gray-500 text-gray-300`; // Not answered
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-300">All Questions</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-2xl"
            aria-label="Close modal"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {questions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => onJumpToQuestion(index)}
              className={getQuestionStatusClass(q)}
              aria-label={`Jump to question ${q.id}`}
            >
              {q.id}
            </button>
          ))}
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-indigo-600 border-2 border-indigo-400 mr-2"></span> Current</div>
            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-green-700 border-2 border-green-500 mr-2"></span> Correct</div>
            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-red-700 border-2 border-red-500 mr-2"></span> Incorrect</div>
            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-gray-700 border-2 border-gray-500 mr-2"></span> Unanswered</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionListModal;

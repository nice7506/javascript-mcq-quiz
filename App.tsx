import React, { useState, useCallback } from 'react';
import { jsQuestions } from './data/questions';
import QuestionCard from './components/QuestionCard';
import Results from './components/Results';
import QuestionListModal from './components/QuestionListModal';

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentQuestion = jsQuestions[currentQuestionIndex];
  const isAnswered = userAnswers.hasOwnProperty(currentQuestion.id);

  const handleSelectAnswer = useCallback((selectedOption: string) => {
    if (isAnswered) return;

    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: selectedOption }));

    if (selectedOption === currentQuestion.answer) {
      setScore(prev => prev + 1);
    }
  }, [currentQuestion, isAnswered]);
  
  const handleNext = () => {
    if (currentQuestionIndex < jsQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setShowResults(false);
  };

  const handleJumpToQuestion = (questionIndex: number) => {
    setCurrentQuestionIndex(questionIndex);
    setIsModalOpen(false);
  };
  
  const progress = ((currentQuestionIndex + 1) / jsQuestions.length) * 100;
  const answeredCount = Object.keys(userAnswers).length;
  const incorrectCount = answeredCount - score;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900">
        <header className="w-full max-w-4xl text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                <i className="fab fa-js-square text-yellow-300 mr-3"></i>
                JavaScript Quiz
            </h1>
            <p className="text-gray-400 mt-2">Test your knowledge with these challenging questions!</p>
        </header>

      <main className="w-full max-w-4xl">
        {showResults ? (
          <Results 
            score={score} 
            totalQuestions={jsQuestions.length} 
            onRestart={handleRestart}
            questions={jsQuestions}
            userAnswers={userAnswers}
          />
        ) : (
          <>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
            </div>
            
             <div className="flex justify-between items-center w-full max-w-xl mx-auto mb-6 px-2 text-sm md:text-base">
                <div className="flex gap-2 md:gap-4">
                    <div className="py-1 px-3 rounded-lg bg-gray-800 shadow-md">
                        <span className="font-bold text-green-400"><i className="fas fa-check mr-1 md:mr-2"></i>Correct: {score}</span>
                    </div>
                    <div className="py-1 px-3 rounded-lg bg-gray-800 shadow-md">
                        <span className="font-bold text-red-400"><i className="fas fa-times mr-1 md:mr-2"></i>Incorrect: {incorrectCount}</span>
                    </div>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="py-1 px-3 rounded-lg bg-gray-800 shadow-md text-indigo-300 hover:bg-gray-700 transition"
                    aria-label="View all questions"
                >
                    <i className="fas fa-list-ul mr-1 md:mr-2"></i>
                    Questions
                </button>
            </div>

            <QuestionCard
              question={currentQuestion}
              selectedAnswer={userAnswers[currentQuestion.id] || null}
              onSelectAnswer={handleSelectAnswer}
              isAnswered={isAnswered}
            />
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                {currentQuestionIndex < jsQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </>
        )}
      </main>
      <QuestionListModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onJumpToQuestion={handleJumpToQuestion}
        questions={jsQuestions}
        userAnswers={userAnswers}
        currentQuestionId={currentQuestion.id}
      />
    </div>
  );
};

export default App;

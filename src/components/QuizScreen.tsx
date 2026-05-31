"use client";
import { useState } from "react";
import { useQuiz } from "@/context/QuizContext";
import { questions } from "@/data/questions";
import { Question } from "@/types/quiz";

export default function QuizScreen() {
  const { genre, setResults, results } = useQuiz();

  const [currentQuestions] = useState<Question[]>(() => {
    const filtered = questions.filter((q) => q.genre === genre);
    return [...filtered].sort(() => Math.random() - 0.5).slice(0, 5);
  });

  const currentIndex = results.length;
  const currentQuestion = currentQuestions[currentIndex];

  if (!currentQuestion) {
    return <div className="text-center p-10 font-bold">クイズを準備中...</div>;
  }

  const handleAnswer = (choice: string) => {
    setResults((prev) => [
      ...prev,
      {
        question: currentQuestion,
        selected: choice,
        isCorrect: choice === currentQuestion.answer,
      },
    ]);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center font-bold text-brand-accent">
        第 {currentIndex + 1} 問 / 5
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border-2 border-brand-accent">
        <p className="font-sans text-xl leading-relaxed font-bold tracking-tight">
          {currentQuestion.title}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {currentQuestion.choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleAnswer(choice)}
            className="bg-white border-2 border-black p-4 rounded-lg 
                     hover:bg-brand-accent hover:text-white transition-all 
                     active:scale-95 text-left font-medium cursor-pointer"
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}

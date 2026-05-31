"use client";
import { QuizProvider, useQuiz } from "@/context/QuizContext";
import TopScreen from "@/components/TopScreen";
import QuizScreen from "@/components/QuizScreen";
import ResultScreen from "@/components/ResultScreen";

function QuizApp() {
  const { genre, results } = useQuiz();

  if (!genre) return <TopScreen />;

  if (results.length === 5) return <ResultScreen />;

  return <QuizScreen />;
}

export default function Home() {
  return (
    <QuizProvider>
      <main className="min-h-screen p-4 md:p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 py-4 border-b-4 border-brand-accent">
          科学法則 ✖️ 日常クイズ
        </h1>
        <QuizApp />
      </main>
    </QuizProvider>
  );
}

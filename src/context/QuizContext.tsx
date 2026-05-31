"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Genre, Question } from "@/types/quiz";

export interface QuizResult {
  question: Question;
  selected: string;
  isCorrect: boolean;
}

interface QuizContextType {
  genre: Genre | null;
  setGenre: (g: Genre | null) => void;
  results: QuizResult[];
  setResults: Dispatch<SetStateAction<QuizResult[]>>;
  reset: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [genre, setGenre] = useState<Genre | null>(null);
  const [results, setResults] = useState<QuizResult[]>([]);

  const reset = () => {
    setGenre(null);
    setResults([]);
  };

  return (
    <QuizContext.Provider
      value={{ genre, setGenre, results, setResults, reset }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used within QuizProvider");
  return context;
};

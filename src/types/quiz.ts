export type Genre = "term" | "scenario";

export interface Question {
  id: number;
  genre: Genre;
  title: string;
  choices: string[];
  answer: string;
}

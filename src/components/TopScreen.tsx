import { useQuiz } from "@/context/QuizContext";

export default function TopScreen() {
  const { setGenre } = useQuiz();
  return (
    <div className="flex flex-col gap-6">
      <button
        onClick={() => setGenre("term")}
        className="bg-brand-accent text-white p-8 rounded-2xl text-xl font-bold shadow-lg hover:opacity-90 transition"
      >
        用語あてクイズ
        <br />
        <span className="text-sm font-normal">現象名を当てる</span>
      </button>
      <button
        onClick={() => setGenre("scenario")}
        className="bg-brand-sub text-white p-8 rounded-2xl text-xl font-bold shadow-lg hover:opacity-90 transition"
      >
        場面あてクイズ
        <br />
        <span className="text-sm font-normal">日常シーンを当てる</span>
      </button>
    </div>
  );
}

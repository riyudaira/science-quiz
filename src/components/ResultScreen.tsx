import { useQuiz } from "@/context/QuizContext";

export default function ResultScreen() {
  const { results, reset } = useQuiz();
  const score = results.filter((r) => r.isCorrect).length;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-black mb-2">{score} / 5 正解！</h2>
        <p className="text-brand-accent font-bold">
          {score === 5 ? "完璧です！すごい！" : "諦めないで！"}
        </p>
      </div>

      <div className="space-y-4">
        {results.map((res, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow-sm border-l-8 font-sans"
            style={{ borderColor: res.isCorrect ? "#2D8988" : "#D7888A" }}
          >
            <p className="font-bold text-base mb-1">
              問{i + 1}: {res.question.title}
            </p>
            <p
              className={`text-sm ${res.isCorrect ? "text-green-700 font-bold" : "text-red-600 font-bold"}`}
            >
              あなたの回答: {res.selected} {res.isCorrect ? "○" : "×"}
            </p>
            {!res.isCorrect && (
              <p className="text-xs text-gray-600 mt-1">
                正解: {res.question.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={reset}
        className="w-full bg-brand-text text-white p-4 rounded-full font-bold hover:opacity-80 transition"
      >
        トップに戻る
      </button>
    </div>
  );
}

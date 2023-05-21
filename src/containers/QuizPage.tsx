import * as React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useQuizApi } from "../services/QuizApi";
import { Question } from "../components/Quiz/Question";
import { Choices } from "../components/Quiz/Choices";

export const QuizPage: React.FC = () => {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [quizFinished, setQuizFinished] = React.useState(false);

  const { getQuiz, questions } = useQuizApi();

  // 外部APIからデータとってくる処理
  React.useEffect(() => getQuiz(), [getQuiz]);

  // クリック時に`/`に遷移させる関数
  function onBackHome() {
    navigate("/");
  }

  // 問題が終了したら quizFinished を true に設定する処理
  const finishQuiz = () => {
    setQuizFinished(true);
  };

  // 正解時、スコアを増やして次の問題に進む
  // クイズが終わると終了画面に遷移する
  const handleAnswer = (isCorrect: Boolean) => {
    // 正解した時
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  return (
    <Box>
      {/* トップのテキスト */}
      <Heading as="h2" size="xl" textAlign="center" mt={10}>
        Quiz
      </Heading>

      {/* 問題を表示する */ }
      {questions.length > 0 && currentQuestion < questions.length && !quizFinished ? (
        <>
          {/* 問題文を表示するコンポーネント */}
          <Question question={questions[currentQuestion].question} />

          {/* 選択肢を表示するコンポーネント */}
          <Choices 
            choices={questions[currentQuestion].choices}
            correctAnswer={questions[currentQuestion].correctAnswer}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        /* 結果と戻るボタンを表示する */
        quizFinished && (
          <Box textAlign="center" mt={8}>
            <Text fontSize="xl">Quiz finished!</Text>
            <Text fontSize="xl">Your score: {score}</Text>
            <Button colorScheme="teal" mt={4} onClick={onBackHome}>
              Back to Home
            </Button>
          </Box>
        )
      )}
    </Box>
  );
};

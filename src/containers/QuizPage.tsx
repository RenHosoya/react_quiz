import * as React from "react";
import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useQuizApi } from "../services/qzinApi";
import { Question } from "../components/Quiz/Question";

export const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [quizFinished, setQuizFinished] = React.useState(false); // 追加

  const { getQuiz, questions } = useQuizApi();

  // 外部APIからデータとってくる処理
  React.useEffect(() => getQuiz(), []);

  // クリック時に`/`に遷移させる関数
  const onBackHome = () => {
    navigate("/");
  };

  // 問題が終了したら quizFinished を true に設定する処理
  const finishQuiz = () => {
    setQuizFinished(true);
  };

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center" mt={10}>
        Quiz
      </Heading>

      {/* 問題を表示する */}
      {questions.length > 0 && currentQuestion < questions.length ? (
        <>
          {/* 問題文を表示するコンポーネント */}
            <Question question={questions[currentQuestion].question} />

            {/* 選択肢を表示するコンポーネント */}
          <Box mt={5}>
            <Center>
              <VStack spacing={2} w={{ base: "50%", md: "20%" }}>
                {questions[currentQuestion].choices.map((choice, index) => (
                  <Button key={index} colorScheme="teal" w="full" mt={2} onClick={finishQuiz}>
                    {choice}
                  </Button>
                ))}
              </VStack>
            </Center>
          </Box>
        </>
      ) : (
        <Box mt={10}>
          <Text fontSize="xl" textAlign="center">
            Loading questions...
          </Text>
        </Box>
      )}

      {/* 結果と戻るボタンを表示する */}
      {quizFinished && (
        <Box textAlign="center" mt={8}>
          <Text fontSize="xl">Quiz finished!</Text>
          <Text fontSize="xl">Your score: {score}</Text>
          <Button colorScheme="teal" mt={4} onClick={onBackHome}>
            Back to Home
          </Button>
        </Box>
      )}
    </Box>
  );
};

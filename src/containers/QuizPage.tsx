import * as React from "react";
import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type QuizQuestion = {
  question: string;
  correctAnswer: string;
  choices: string[];
};

export const QuizPage: React.FC = () => {
  const [questions, setQuestions] = React.useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [quizFinished, setQuizFinished] = React.useState(false); // 追加

  const navigate = useNavigate();
  // 外部APIからデータとってくる処理
  React.useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
      .then((res) => {
        const fetchedData = res.data.results.map((question: any) => {
          const choices = [...question.incorrect_answers, question.correct_answer];
          const shuffledChoices = choices.sort(() => Math.random() - 0.5);
          return {
            question: question.question,
            correctAnswer: question.correct_answer,
            choices: shuffledChoices,
          };
        });
        setQuestions(fetchedData);
        console.log(fetchedData);
      })
      .catch(() => {
        alert("データを正常に取得できませんでした(泣)");
      });
  }, []);

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
        <Box mt={10}>
          <Text fontSize="x1" textAlign="center">
            {questions[currentQuestion].question}
          </Text>

          {/* 選択肢のボタン */}
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
        </Box>
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

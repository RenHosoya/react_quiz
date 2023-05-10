import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"

export const Home: React.FC = () => {
	const navigate = useNavigate();

	// クリック時に`/quiz`に遷移させる関数
	const onStartQuiz = () => {
		navigate('/quiz');
	};

	return (
		<Box>
			<Heading as="h2" size="x1" textAlign="center" mt={10}>
				Welocome to Quiz App
			</Heading>
			<Text fontSize="xl" textAlign="center" mt={4}>
				Test your knowledge with our fun quizzes!
			</Text>
			<Box textAlign="center" mt={8}>
				<Button colorScheme="teal" onClick={onStartQuiz}>
					Start Quiz
				</Button>
			</Box>
		</Box>
	);
};
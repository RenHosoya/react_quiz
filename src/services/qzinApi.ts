import axios from "axios";
import React, { useCallback } from "react"

type QuizQuestion = {
	question: string;
	correctAnswer: string;
	choices: string[];
  };

export const useQuizApi = () => {

	const [questions, setQuestions] = React.useState<QuizQuestion[]>([]);

	const getQuiz = useCallback(() => {
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
		})
		.catch(() => {
		  alert("データを正常に取得できませんでした(泣)");
		});
	}, []);

	return { getQuiz, questions };
};
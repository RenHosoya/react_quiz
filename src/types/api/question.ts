export type QuizQuestion = {
	question: string;
	correctAnswer: string;
	choices: string[];
};

export type ApiResult = {
	response_code: number;
	results: ApiQuestion[];
};

export type ApiQuestion = {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
};
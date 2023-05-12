import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

type QuestionProps = {
	question: string;
};

export const Question: React.FC<QuestionProps> = ({ question }) => {
	return (
		<Box mt={10}>
			<Text fontSize="xl" textAlign="center">
				{question}
			</Text>
		</Box>
	);
};
import * as React from 'react';
import { Box, Button, Center, VStack } from '@chakra-ui/react';

type ChoicesProps = {
	choices: string[];
	correctAnswer: string;
	onAnswer: (isCorrect: boolean) => void;
};

export const Choices: React.FC<ChoicesProps> = ({ choices, correctAnswer, onAnswer }) => {
	console.log(correctAnswer);
	const handleChoiceClick = (choice: string) => {
		onAnswer(choice === correctAnswer);
	};

	return (
        <Box mt={5}>
          <Center>
            <VStack spacing={2} w={{ base: "50%", md: "20%" }}>
              {choices.map((choice, index) => (
                <Button key={index} 
                  colorScheme={choice === correctAnswer ? 'green' : 'red'} 
                  w="full" 
                  mt={2}
                  onClick={() => handleChoiceClick(choice)}
                >
                  {choice}
                </Button>
              ))}
            </VStack>
          </Center>
        </Box>
	);
};
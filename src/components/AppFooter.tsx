import { Box, Text } from "@chakra-ui/react";

export const AppFooter: React.FC = () => {
	return (
		<Box bg="teal.500" w="100%" p={4} color="white" mt="auto">
			<Text textAlign="center">&copy; {new Date().getFullYear()} Quiz App</Text>
		</Box>
	);
};
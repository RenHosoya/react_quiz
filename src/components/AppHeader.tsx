import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const AppHeader: React.FC = () => {
	return (
		<Box bg="teal.500" w="100%" p={4} color="white">
			<Flex justifyContent="space-between" alignItems="center">
				<Heading as="h1" size="lg">
					<Link as={RouterLink} to="/">
						Qzin App
					</Link>
				</Heading>
			</Flex>
		</Box>
	);
};
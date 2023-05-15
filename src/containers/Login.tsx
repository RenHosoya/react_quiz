import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navgate = useNavigate();
  const toast = useToast();

  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (userName.length === 0 || password.length === 0) {
      toast({
        title: "Error",
        description: "Username or password cannot be empty.",
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    } else {
      navgate("/");
    }
  };

	return (
    <Box>
      <VStack spacing={4} width="400px" margin="auto" mt={10}>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Box>
	);
};
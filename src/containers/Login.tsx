import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

import { useLoginApi } from "../services/LoginApi";

export const Login: React.FC = () => {

  const {user, setUser, handleLogin } = useLoginApi();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  return (
    <Box>
      <VStack spacing={4} width="400px" margin="auto" mt={10}>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="userName"
            value={user.userName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Box>
	);
};
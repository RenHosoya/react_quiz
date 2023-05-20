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
import { useRecoilState } from "recoil";

import { userState } from "../store/userState";

export const Login: React.FC = () => {
  const navgate = useNavigate();
  const toast = useToast();

  const [user, setUser] = useRecoilState(userState);

  const handleLogin = () => {
    if (user.userName.length === 0 || user.password.length === 0) {
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
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

  const [stateName, setStateName] = React.useState("");
  const [statePass, setStatePass] = React.useState("");
  const { handleLogin } = useLoginApi(stateName, statePass);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateName(event.target.value);
  };

  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatePass(event.target.value);
  };

  return (
    <Box>
      <VStack spacing={4} width="400px" margin="auto" mt={10}>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={stateName}
            onChange={handleNameChange}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={statePass}
            onChange={handlePassChange}
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Box>
	);
};
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { userState } from "../store/userState";

export const useLoginApi = (stateName: string, statePass: string) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [user, setUser] = useRecoilState(userState);

  const validateLogin = (fetchUsers: any) => {
    return fetchUsers.some((fetchUser: any) => {
      if (fetchUser.username == stateName && fetchUser.id == statePass) {
        setUser({userName: stateName, password: statePass});
        return true;
      }
      return false;
    });
  };

  const fetchUser = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to fetch data",
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
      return [];
    }
  };

  const handleLogin = async () => {
      const fetchedUsers = await fetchUser();
      if (validateLogin(fetchedUsers)) {
        navigate("/");
      } else {
        toast({
          title: "Error",
          description: "Incorrect username or password",
          status: "error",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      }
  };

  return { handleLogin };
};
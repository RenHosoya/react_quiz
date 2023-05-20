import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { userState } from "../store/userState";

export const useLoginApi = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [user, setUser] = useRecoilState(userState);

  const validateUser = (user: any) => {
    if (user.userName.length === 0 || user.password.length === 0) {
      toast({
        title: "Error",
        description: "Username or password cannot be empty.",
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
      return false;
    }
    return true;
  };

  const validateLogin = (fetchUsers: any) => {
    return fetchUsers.some((fetchUser: any) => {
      if (fetchUser.username == user.userName && fetchUser.id == user.password) {
        setUser(fetchUser);
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
    if (validateUser(user)) {
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
    }
  };

  return { user, setUser, handleLogin };
};
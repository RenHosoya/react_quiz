import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { userState } from "../store/userState";

export const useLoginApi = () => {
  const navigate = useNavigate();
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
			//jsonplaceholderからユーザを取得
      navigate("/");
    }
  };

	return { user, setUser, handleLogin };
};
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '../store/userState'; 

import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

export const AppHeader: React.FC = () => {
	const navigate = useNavigate();
	const user = useRecoilValue(userState);
	const resetUser = useResetRecoilState(userState);

	// ログアウトボタンのクリックイベントハンドラ
	const handleLogout = () => {
		resetUser();
		navigate('/login');
	};

	return (
		<Box bg="teal.500" w="100%" p={4} color="white">
			<Flex justifyContent="space-between" alignItems="center">
				<Heading as="h1" size="lg">
					<Link as={RouterLink} to="/">
						Qzin App
					</Link>
				</Heading>
				{
					// ユーザー情報がある場合、ログアウトリンクを表示
					user.userName && user.password ? (
						<Link onClick={handleLogout}>
							ログアウト
						</Link>
					) : (
						<Link as={RouterLink} to="/login">
							ログイン
						</Link>
					)
				}
			</Flex>
		</Box>
	);
};
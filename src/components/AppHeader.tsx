import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../store/userState'; 

import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { memo } from 'react';

export const AppHeader: React.FC = memo(() => {
	const user = useRecoilValue(userState);
	const setUser = useSetRecoilState(userState);  // ユーザー情報を更新するためのセッター関数を取得

	// ログアウトボタンのクリックイベントハンドラ
	const handleLogout = () => {
		setUser({userName: "", password: ""});  // ユーザー情報をnullに設定してログアウト状態にする
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
});
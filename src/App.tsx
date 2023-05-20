import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import { AppHeader } from './components/AppHeader';
import { AppFooter } from './components/AppFooter';
import { Home } from './containers/Home';
import { QuizPage } from './containers/QuizPage';
import { Login } from './containers/Login';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <BrowserRouter>
          <Box minHeight="100vh" display="flex" flexDirection="column">
            <AppHeader />
              <Box flex="1" >
                <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/quiz" element={<QuizPage />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </Box>
            <AppFooter />
          </Box>
        </BrowserRouter>
      </ChakraProvider>
    </RecoilRoot>
  );
};
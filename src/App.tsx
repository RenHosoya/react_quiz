import * as React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import { AppHeader } from './components/AppHeader';
import { AppFooter } from './components/AppFooter';
import { Home } from './containers/Home';

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <AppHeader />
            <Box flex="1" >
              <Routes>
                <Route path="/" element={<Home />}/>
              </Routes>
            </Box>
          <AppFooter />
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
};
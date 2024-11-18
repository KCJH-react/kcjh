import React  ,{ forwardRef } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import PointExchange from './components/PointExchange'
import PointExchangeDetail from './components/PointExchangeDetail'
import Commain from "./components/Commain"
import Navbar from './Navbar';
import Comm from './components/Comm';
import MainContent from './MainContent';
import FriendRanking from './FriendRanking';
import SelfChallenge from './SelfChallenge';
import Information from './Information';
import CM_DetailPage from './CM_DetailPage';
import Footer from './Footer';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>  
        <Route path="/pointExchange" element={<PointExchange/>}></Route>
        <Route path="/pointExchangeDetail/:category" element={<PointExchangeDetail/>}></Route>
        <Route path="/comm" element={<Comm></Comm>}></Route>
        <Route path="/SelfChallenge" element={<SelfChallenge />}></Route>
        <Route path="/Information" element={<Information />}></Route>
        <Route path="/CM_DetailPage" element={<CM_DetailPage />}></Route>
        <Route path="/" element={<MainContent />} />
        <Route path="/friend-ranking" element={<FriendRanking />} />
      </Routes>
    </ChakraProvider>
  );
}
export default App;

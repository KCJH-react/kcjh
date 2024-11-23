import React  ,{ forwardRef } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import PointExchange from './components/PointExchange'
import PointExchangeDetail from './components/PointExchangeDetail'
import Commain from "./components/Commain"
import Navbar from './Navbar';
import MainContent from './MainContent';
import FriendRanking from './FriendRanking';
import Footer from './Footer';


function App() {
  return (
    <Routes>  
      <Route path="/pointExchange" element={<PointExchange/>}></Route>
      <Route path="/pointExchangeDetail/:categoryId" element={<PointExchangeDetail/>}></Route>
      <Route path="/comm" element={<Commain></Commain>}></Route>
      <Route path="/" element={<MainContent />} />
      <Route path="/friend-ranking" element={<FriendRanking />} />
    </Routes>
  );
}
export default App;

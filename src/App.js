import React  ,{ forwardRef } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import PointExchange from './components/PointExchange'
import PointExchangeDetail from './components/PointExchangeDetail'
import { CMmain } from "./components/CMmain"
import Navbar from './Navbar';
import MainContent from './MainContent';
import FriendRanking from './FriendRanking';
import Footer from './Footer';
import Post from './Post';


function App() {
  return (
    <Routes>  
      <Route path="/" element={<div>메인</div>}></Route>
      <Route path="/pointExchange" element={<PointExchange/>}></Route>
      <Route path="/pointExchangeDetail/:category" element={<PointExchangeDetail/>}></Route>
      <Route path="/CMmain" element={<CMmain></CMmain>}></Route>
      <Route path="/" element={<MainContent />} />
      <Route path="/friend-ranking" element={<FriendRanking />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}
export default App;

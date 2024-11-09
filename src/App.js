import React  ,{ forwardRef } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import PointExchange from './components/PointExchange'
import PointExchangeDetail from './components/PointExchangeDetail'
import {CMmain} from "./components/CMmain"

function App() {
  return (
    <Routes>  
      <Route path="/" element={<div>메인</div>}></Route>
      <Route path="/pointExchange" element={<PointExchange/>}></Route>
      <Route path="/pointExchangeDetail/:category" element={<PointExchangeDetail/>}></Route>
      <Route path="/CMmain" element={<CMmain></CMmain>}></Route>
    </Routes>
  );
}
export default App;

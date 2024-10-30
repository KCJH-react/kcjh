import React  ,{ forwardRef } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import ChallengeSuccess from './ChallengeSuccess'

function App() {
  return (
    <Routes>  
      <Route path="/" element={<div>메인</div>}></Route>
      <Route path="/cs" element={<ChallengeSuccess/>}></Route>
    </Routes>
  );
}
export default App;

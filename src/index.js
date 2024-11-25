import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

localStorage.removeItem("rankData");
localStorage.removeItem("friends");

// LocalStorage 초기 데이터 설정
if (!localStorage.getItem("rankData")) {
  const initialData = [
    { username: "User1", score: 1500 },
    { username: "User2", score: 1300 },
    { username: "User3", score: 1200 },
    { username: "Friend1", score: 1100 },
    { username: "Friend2", score: 900 },
    { username: "Friend3", score: 800 },
    { username: "CurrentUser", score: 1400 } // 현재 사용자
  ];
  localStorage.setItem("rankData", JSON.stringify(initialData));
  localStorage.setItem("friends", JSON.stringify(["Friend1", "Friend2", "Friend3"])); // 친구 리스트
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
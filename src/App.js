import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import PointExchange from "./components/pointExchange/PointExchange";
import PointExchangeDetail from "./components/pointExchange/PointExchangeDetail";
import Commain from "./components/cm/commain";
import Navbar from "./components/main/Navbar";
import MainContent from "./components/main/MainContent";
import RankSystem from "./components/rank/RankSystem";
import FriendRanking from "./components/rank/FriendRanking";
import FriendChallengeSuccess from "./components/rank/FriendChallengeSucess";
import SelfChallenge from "./components/challengepage/SelfChallenge";
import Information from "./components/user/Information";
import CM_DetailPage from "./CM_DetailPage";
import Introduce from "./components/introduce/Introduce";
import MakeChallenge from "./components/challengepage/MakeChallenge";
import Footer from "./components/main/Footer";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Login from "./components/user/Login"; // Login 컴포넌트 추가
import SignUp from "./components/user/SignUp"; // SignUp 컴포넌트 추가

const theme = extendTheme({});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className="App">
        <Navbar />
        <Routes>
          {/* Private Routes */}
          <Route path="/pointExchange" element={<PrivateRoute element={<PointExchange />} />} />
          <Route
            path="/pointExchangeDetail/:category"
            element={<PrivateRoute element={<PointExchangeDetail />} />}
          />
          <Route path="/commain" element={<PrivateRoute element={<Commain />} />} />
          <Route path="/SelfChallenge" element={<PrivateRoute element={<SelfChallenge />} />} />
          <Route path="/Information" element={<PrivateRoute element={<Information />} />} />
          <Route path="/CM_DetailPage" element={<PrivateRoute element={<CM_DetailPage />} />} />
          <Route path="/MakeChallenge" element={<PrivateRoute element={<MakeChallenge />} />} />
          <Route path="/" element={<PrivateRoute element={<MainContent />} />} />
          <Route path="/introduce" element={<PrivateRoute element={<Introduce />} />} />
          <Route path="/friend-ranking" element={<PrivateRoute element={<FriendRanking />} />} />
          <Route path="/rank" element={<PrivateRoute element={<RankSystem />} />} />
          <Route path="/sucess" element={<PrivateRoute element={<FriendChallengeSuccess />} />} />
          {/* Public Routes */}
          <Route path="/login" element={<Login />} /> {/* 로그인 페이지 추가 */}
          <Route path="/signup" element={<SignUp />} /> {/* 회원가입 페이지 추가 */}
        </Routes>
        <Box h="20" />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

const PrivateRoute = ({ element }) => {
  const isAuthenticated = sessionStorage.getItem("authToken");

  // 인증되지 않으면 로그인 페이지로 리디렉션
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 인증된 경우에만 컴포넌트 렌더링
  return element;
};

//로그인 검증하는 라우팅
export default App;

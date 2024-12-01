import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import PointExchange from "./components/pointExchange/PointExchange";
import PointExchangeDetail from "./components/pointExchange/PointExchangeDetail";
import Commain from "./components/cm/commain";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import RankSystem from "./RankSystem";
import FriendRanking from "./FriendRanking";
import SelfChallenge from "./SelfChallenge";
import Information from "./Information";
import CM_DetailPage from "./CM_DetailPage";
import MakeChallenge from "./MakeChallenge";
import Footer from "./Footer";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Login from "./Login"; // Login 컴포넌트 추가
import SignUp from "./SignUp"; // SignUp 컴포넌트 추가

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
          <Route path="/friend-ranking" element={<PrivateRoute element={<FriendRanking />} />} />
          <Route path="/rank" element={<PrivateRoute element={<RankSystem />} />} />

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
  const isAuthenticated = useSelector((state) => state.user.name);

  // 인증되지 않으면 로그인 페이지로 리디렉션
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 인증된 경우에만 컴포넌트 렌더링
  return element;
};

//로그인 검증하는 라우팅
export default App;
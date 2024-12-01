import React, { useState } from "react";
import { Box, Flex, Image, Input, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import userIcon from "../../asset/user-icon.png";
import lockIcon from "../../asset/lock-icon.png";

// useSetUserId 훅 정의 (로컬스토리지에 userData 저장)
function useSetUserId() {
  return (userId) => {
    localStorage.setItem("userData", JSON.stringify({ userId })); // userData에 userId 저장
  };
}

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState(""); // 아이디 또는 이메일 입력
  const [password, setPassword] = useState("");
  const setUserId = useSetUserId(); // useSetUserId 훅 사용
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!usernameOrEmail.trim() || !password.trim()) {
      alert("아이디(이메일)와 비밀번호를 모두 입력해주세요.");
      return;
    }

    // 유저 데이터 로드 (totalUserData 사용)
    const totalUserData = JSON.parse(localStorage.getItem("totalUserData")) || [];

    // 입력된 값이 name 또는 email인지 확인 후 사용자 검색
    const user = totalUserData.find(
      (user) => user.name === usernameOrEmail || user.email === usernameOrEmail // id를 문자열로 비교
    );

    if (user) {
      // 비밀번호 비교
      if (user.password === password) {
        // 로그인 성공
        setUserId(user.name); // 로컬스토리지에 userId 저장

        // authToken에 userId를 저장하고, 세션스토리지에 저장
        sessionStorage.setItem("authToken", user.id);

        alert("로그인 성공!");
        navigate("/");
      } else {
        alert("아이디(이메일) 또는 비밀번호가 올바르지 않습니다.");
      }
    } else {
      alert("아이디(이메일) 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      height="100vh"
      bg="gray.100"
      pt="150px"
    >
      <Heading as="h1" size="2xl" mb="12" color="#4CAF50">
        RANDOM CHALLENGE
      </Heading>

      <Flex
        direction="column"
        bg="white"
        p={20}
        rounded="lg"
        width="100%"
        maxWidth="700px"
        boxShadow="xl"
      >
        <Flex align="center" bg="gray.50" borderRadius="full" px="6" py="5" mb="6">
          <Image src={userIcon} alt="User Icon" boxSize="10" mr="4" />
          <Input
            type="text"
            placeholder="ID or Email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            bg="gray.50"
            border="none"
            fontSize="lg"
          />
        </Flex>

        <Flex align="center" bg="gray.50" borderRadius="full" px="6" py="5" mb="8">
          <Image src={lockIcon} alt="Lock Icon" boxSize="10" mr="4" />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            bg="gray.50"
            border="none"
            fontSize="lg"
          />
        </Flex>

        <Button
          type="submit"
          colorScheme="green"
          bg="#BFE18B"
          color="white"
          width="100%"
          size="lg"
          height="60px"
          fontSize="2xl"
          mb="6"
          onClick={handleLogin}
        >
          로그인
        </Button>

        <Text
          textAlign="center"
          fontWeight="bold"
          color="#4CAF50"
          cursor="pointer"
          onClick={handleSignUpClick}
          fontSize="lg"
          _hover={{ textDecoration: "underline" }}
        >
          회원가입
        </Text>
      </Flex>
    </Box>
  );
}

export default Login;

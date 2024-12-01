import React, { useState } from "react";
import { Box, Flex, Input, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // 이메일 및 비밀번호 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (name.length < 1 || name.length > 20) {
      // 변경된 부분 (1자 이상)
      alert("사용자 이름은 1~20자 사이여야 합니다.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("비밀번호는 최소 8자 이상이어야 하며, 대소문자, 숫자, 특수문자를 포함해야 합니다.");
      return;
    }

    // 기존 유저 데이터 확인 (totalUserData 사용)
    const totalUserData = JSON.parse(localStorage.getItem("totalUserData")) || [];
    if (totalUserData.some((user) => user.name === name)) {
      alert("이미 존재하는 사용자입니다. 다른 사용자 이름을 입력해주세요.");
      return;
    }

    // 유저 데이터 저장
    const newUser = {
      id: totalUserData.length + 1,
      name,
      point: 0,
      email,
      password,
      startDate: new Date().toISOString().split("T")[0],
      challengeListNum: 0,
      challengeSuccessList: [],
      exchange: [],
      friendList: [],
      requestList: [],
      responseList: [],
    };
    totalUserData.push(newUser);
    localStorage.setItem("totalUserData", JSON.stringify(totalUserData));

    alert("회원가입 성공!");
    navigate("/login");
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
        <Flex mb="6">
          <Input
            type="text"
            placeholder="ID"
            value={name}
            onChange={(e) => setName(e.target.value)}
            bg="gray.50"
            borderRadius="full"
            fontSize="lg"
            py="8"
            px="7"
          />
        </Flex>

        <Flex mb="6">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            bg="gray.50"
            borderRadius="full"
            fontSize="lg"
            py="8"
            px="7"
          />
        </Flex>

        <Flex mb="8">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            bg="gray.50"
            borderRadius="full"
            fontSize="lg"
            py="8"
            px="7"
          />
        </Flex>

        <Button
          colorScheme="green"
          bg="#BFE18B"
          color="white"
          width="100%"
          size="lg"
          height="60px"
          fontSize="2xl"
          onClick={handleSignUp}
        >
          회원가입
        </Button>
      </Flex>
    </Box>
  );
}

export default SignUp;

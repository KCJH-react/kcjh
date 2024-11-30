import React, { useState } from 'react';
import { Box, Flex, Input, Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // 이메일 형식 검증 정규식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username.trim() || !email.trim() || !password.trim()) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('올바른 이메일 형식을 입력해주세요.');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { username, email, password };

    if (existingUsers.some((user) => user.username === username)) {
      alert('이미 존재하는 사용자입니다. 다른 사용자 이름을 입력해주세요.');
      return;
    }

    // 유저 데이터 저장
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('회원가입 성공!');
    navigate('/login'); // 회원가입 완료 후 로그인 페이지로 이동
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
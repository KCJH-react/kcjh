import React, { useState } from 'react';
import { Box, Flex, Image, Input, Button, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import userIcon from './asset/user-icon.png';
import lockIcon from './asset/lock-icon.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    // 유저 데이터 로드
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // 1. 로컬스토리지에 userId 저장
      localStorage.setItem('userData', JSON.stringify({ userId: user.username }));

      // 2. 세션스토리지에 authToken 저장
      const authToken = user.username; // 유저 ID를 그대로 저장
      sessionStorage.setItem('authToken', authToken);

      alert('로그인 성공!');
      navigate('/'); // 메인 페이지로 이동
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // 회원가입 페이지로 이동
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          _hover={{ textDecoration: 'underline' }}
        >
          회원가입
        </Text>
      </Flex>
    </Box>
  );
}

export default Login;
import React, { useState } from 'react';
import { Box, Button, Input, Heading, IconButton, Flex, Image, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import userIcon from './asset/user-icon.png';
import lockIcon from './asset/lock-icon.png';

function Login({ onSignUpClick, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert('사용자 이름과 비밀번호를 모두 입력해주세요.');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      const authToken = `${username}-authToken-${new Date().getTime()}`;
      localStorage.setItem('authToken', authToken);
      alert('로그인 성공!');
      onClose();
    } else {
      alert('로그인 실패: 사용자 이름 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex="998"
        onClick={onClose}
      />

      <Box
        position="fixed"
        bg="white"
        p="6"
        borderRadius="2xl"
        w="400px"
        h="320px"
        boxShadow="2xl"
        textAlign="center"
        zIndex="999"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <IconButton
          icon={<CloseIcon />}
          aria-label="Close"
          position="absolute"
          top="4"
          right="4"
          onClick={onClose}
          size="sm"
          variant="unstyled"
          color="gray.500"
        />

        <Heading as="h2" size="md" mb="8" color="gray.700">
          로그인
        </Heading>

        <form onSubmit={handleLogin}>
          <Box mb="6">
            <Flex align="center" bg="gray.100" borderRadius="full" px="4" py="2">
              <Image src={userIcon} alt="User Icon" boxSize="8" mr="3" />
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                bg="gray.100"
                borderRadius="full"
              />
            </Flex>
          </Box>

          <Box mb="6">
            <Flex align="center" bg="gray.100" borderRadius="full" px="4" py="2">
              <Image src={lockIcon} alt="Lock Icon" boxSize="8" mr="3" />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                bg="gray.100"
                borderRadius="full"
              />
            </Flex>
          </Box>

          <Flex alignItems="center" justifyContent="center">
            <Button w="70%" bg="#BFE18B" color="white" type="submit">
              로그인
            </Button>
            <Text
              ml="4"
              fontWeight="bold"
              color="#BFE18B"
              cursor="pointer"
              onClick={onSignUpClick}
            >
              회원가입
            </Text>
          </Flex>
        </form>
      </Box>
    </>
  );
}

export default Login;

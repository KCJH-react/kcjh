import React, { useState } from 'react';
import { Box, Button, Input, Heading, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

function SignUp({ onCategoryFilterClick, onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!username.trim() || !email.trim() || !password.trim()) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { username, email, password };

    if (existingUsers.some((user) => user.username === username)) {
      alert('이미 존재하는 사용자입니다. 다른 사용자 이름을 입력해주세요.');
      return;
    }

    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    alert('회원가입 성공!');

    onCategoryFilterClick();
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
        w="500px"
        h="350px"
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
          회원가입
        </Heading>

        <form onSubmit={handleSignUp}>
          <Box mb="6">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              bg="gray.100"
              borderRadius="full"
            />
          </Box>

          <Box mb="6">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="gray.100"
              borderRadius="full"
            />
          </Box>

          <Box mb="6">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg="gray.100"
              borderRadius="full"
            />
          </Box>

          <Button
            w="70%"
            bg="#BFE18B"
            color="white"
            type="submit"
          >
            회원가입
          </Button>
        </form>
      </Box>
    </>
  );
}

export default SignUp;

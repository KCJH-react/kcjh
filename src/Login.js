import React from 'react';
import { Box, Button, Flex, Heading, IconButton, Input, Image } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import userIcon from './asset/user-icon.png';
import lockIcon from './asset/lock-icon.png';

function Login({ onSignUpClick, onClose }) {
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
        h="300px"
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
          _hover={{ color: "gray.700" }}
          fontSize="lg"
        />

        <Heading as="h2" size="md" mb="8" color="gray.700">
          로그인
        </Heading>

        <form>
          <Box mb="6">
            <Flex align="center" bg="gray.100" borderRadius="full" px="4" py="2">
              <Image src={userIcon} alt="User Icon" boxSize="8" mr="3" />
              <Input
                type="text"
                placeholder="Username"
                variant="unstyled"
                fontSize="md"
                flex="1"
                bg="gray.100"
                borderRadius="full"
              />
            </Flex>
          </Box>

          <Box mb="8">
            <Flex align="center" bg="gray.100" borderRadius="full" px="4" py="2">
              <Image src={lockIcon} alt="Lock Icon" boxSize="8" mr="3" />
              <Input
                type="password"
                placeholder="Password"
                variant="unstyled"
                fontSize="md"
                flex="1"
                bg="gray.100"
                borderRadius="full"
              />
            </Flex>
          </Box>

          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              w="70%"
              h="40px"
              borderRadius="full"
              fontSize="md"
              bg="#01A5A6"
              color="white"
              _hover={{ bg: "#01908C" }}
              _focus={{ boxShadow: "none" }}
              onClick={(e) => { e.preventDefault(); }}
            >
              로그인
            </Button>
            <Box w="3" />
            <Button
              variant="link"
              color="#01A5A6"
              fontSize="sm"
              onClick={onSignUpClick}
            >
              회원가입
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default Login;

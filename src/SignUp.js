import React from 'react';
import { Box, Button, Flex, Heading, IconButton, Input } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

function SignUp({ onCategoryFilterClick, onClose }) {
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
          _hover={{ color: "gray.700" }}
          fontSize="lg"
        />

        <Heading as="h2" size="md" mb="8" color="gray.700">
          회원가입
        </Heading>

        <form>
          <Box mb="6">
            <Input
              type="text"
              placeholder="Username"
              variant="filled"
              fontSize="md"
              bg="gray.100"
              borderRadius="full"
            />
          </Box>

          <Box mb="6">
            <Input
              type="email"
              placeholder="Email"
              variant="filled"
              fontSize="md"
              bg="gray.100"
              borderRadius="full"
            />
          </Box>

          <Box mb="6">
            <Input
              type="password"
              placeholder="Password"
              variant="filled"
              fontSize="md"
              bg="gray.100"
              borderRadius="full"
            />
          </Box>

          <Button
            w="70%"
            h="40px"
            borderRadius="full"
            fontSize="md"
            bg="#01A5A6"
            color="white"
            _hover={{ bg: "#01908C" }}
            _focus={{ boxShadow: "none" }}
            onClick={(e) => {
              e.preventDefault();
              onCategoryFilterClick();
            }}
          >
            회원가입
          </Button>
        </form>
      </Box>
    </>
  );
}

export default SignUp;

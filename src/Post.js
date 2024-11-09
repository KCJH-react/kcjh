'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Heading,
  useToast,
} from '@chakra-ui/react';

export default function Post() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const toast = useToast();

  const handlePostSubmit = () => {
    if (title && content) {
      toast({
        title: '게시물이 성공적으로 저장되었습니다.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setTitle('');
      setContent('');
    } else {
      toast({
        title: '제목과 내용을 모두 입력해주세요.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={8} maxW="600px" mx="auto" mt={10} bg="white" borderRadius="md" boxShadow="lg">
      <Heading size="lg" mb={6} textAlign="center">
        게시물 작성
      </Heading>
      <Stack spacing={4}>
        <FormControl isRequired>
          <FormLabel>제목</FormLabel>
          <Input
            placeholder="게시물 제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>내용</FormLabel>
          <Textarea
            placeholder="게시물 내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handlePostSubmit}>
          작성하기
        </Button>
      </Stack>
    </Box>
  );
}
import React, { useState } from 'react';
import { Box, Button, Input, Text, VStack, HStack } from '@chakra-ui/react';

function Comments() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const addComment = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <Box>
      <VStack align="start" spacing="4" mb="4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <HStack key={index} bg="gray.100" p="4" borderRadius="md" w="100%">
              <Text fontSize="md" color="gray.800">
                {comment}
              </Text>
            </HStack>
          ))
        ) : (
          <Text color="gray.500">댓글을 작성해보세요</Text>
        )}
      </VStack>
      <HStack>
        <Input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="댓글을 입력하세요..."
          bg="gray.100"
          borderRadius="md"
        />
        <Button onClick={addComment} colorScheme="teal">
          등록
        </Button>
      </HStack>
    </Box>
  );
}

export default Comments;

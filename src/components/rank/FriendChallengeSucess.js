import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Heading, VStack, HStack, Text, Image, Stack, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import userIcon from '../../asset/user-icon.png';

const FriendChallengeSuccess = () => {
  // Redux에서 사용자와 친구의 challengeSuccessList 가져오기
  const friends = useSelector((state) => state.user.friendList);
  const challengeSuccessList = useSelector((state) => state.user.challengeSuccessList);
  const navigate = useNavigate();

  return (
    <Box w="100%" minH="100vh" bg="#F7FCED" p={4}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        친구들의 챌린지
      </Heading>
      <VStack spacing={6} align="stretch">
        {friends.map((friend) => {
          const friendChallenges = challengeSuccessList.filter(
            (challenge) => challenge.username === friend.name
          );

          return (
            <Box key={friend.name} p={4} bg="white" borderRadius="md" shadow="md">
              <HStack spacing={4} mb={4}>
                <Image src={userIcon} boxSize="50px" />
                <Text fontSize="2xl" fontWeight="bold">
                  {friend.name} 님의 성공한 챌린지
                </Text>
              </HStack>
              <VStack align="stretch" spacing={3}>
                {friendChallenges.length > 0 ? (
                  friendChallenges.map((challenge, index) => (
                    <Stack key={index} p={4} bg="#E2E8F0" borderRadius="md">
                      <Text fontSize="lg" fontWeight="semibold">
                        챌린지 이름: {challenge.name}
                      </Text>
                      <Text>성공 날짜: {challenge.date}</Text>
                      <Text>설명: {challenge.description}</Text>
                    </Stack>
                  ))
                ) : (
                  <Text>아직 성공한 챌린지가 없습니다.</Text>
                )}
              </VStack>
            </Box>
          );
        })}
      </VStack>
      <Button mt={8} colorScheme="teal" onClick={() => navigate('/friend-ranking')}>
        친구 랭킹 보기
      </Button>
    </Box>
  );
};

export default FriendChallengeSuccess;

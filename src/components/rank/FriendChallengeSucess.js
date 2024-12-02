import React, { useEffect, useState } from 'react';
import { Box, Heading, VStack, HStack, Text, Image, Stack, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import userIcon from '../../asset/user-icon.png';

const FriendChallengeSuccess = () => {
  const [friends, setFriends] = useState([]);
  const [challengeSuccessList, setChallengeSuccessList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬스토리지에서 사용자 데이터와 챌린지 성공 목록 가져오기
    const storedData = JSON.parse(localStorage.getItem('totalUserData')) || [];
    const authToken = sessionStorage.getItem('authToken'); // 현재 로그인된 사용자 ID

    if (!authToken) {
      alert("로그인이 필요합니다.");
      return;
    }

    const currentUser = storedData.find((user) => String(user.id) === authToken);
    if (!currentUser) {
      alert("사용자 데이터를 찾을 수 없습니다.");
      return;
    }

    // 친구 목록과 챌린지 성공 목록 설정
    setFriends(currentUser.friendList || []);
    setChallengeSuccessList(storedData.flatMap((user) =>
      (user.challengeSuccessList || []).map((challenge) => ({
        ...challenge,
        username: user.name,
      }))
    ));
  }, []);

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
            <Box key={friend.id} p={4} bg="white" borderRadius="md" shadow="md">
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
                      {/*<Text fontSize="lg" fontWeight="semibold">
                        챌린지 이름: {challenge.name}
                      </Text>
                      <Text>성공 날짜: {challenge.date}</Text>
                      <Text>설명: {challenge.description}</Text>*/}
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

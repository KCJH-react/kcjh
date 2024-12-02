import React, { useEffect, useState } from "react";
import { Box, Heading, VStack, HStack, Text, Image, Stack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import userIcon from "../../asset/user-icon.png";
import getChallengeById from "../challengepage/getChallenge";

const FriendChallengeSuccess = () => {
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬스토리지에서 데이터 가져오기
    const storedData = JSON.parse(localStorage.getItem("totalUserData")) || [];
    const authToken = sessionStorage.getItem("authToken");

    if (!authToken) {
      alert("로그인이 필요합니다.");
      return;
    }

    const currentUser = storedData.find((user) => String(user.id) === authToken);
    if (!currentUser) {
      alert("사용자 데이터를 찾을 수 없습니다.");
      return;
    }

    // 친구 데이터와 성공한 챌린지 가져오기
    const friendList = currentUser.friendList || [];
    const friendChallenges = friendList.map((friend) => {
      const friendData = storedData.find((user) => user.id === friend.id);
      if (!friendData) {
        console.error("친구 데이터를 찾을 수 없습니다. ID:", friend.id);
        return { ...friend, challenges: [] };
      }
      console.log("Friend Data:", friendData);

      const challenges = friendData.challengeSuccessList?.map((challenge) => {
        const challengeDetails = getChallengeById(Number(challenge.id));
        console.log("Challenge Details:", challengeDetails);
        console.log("Challenge Success List Item:", challenge);

        return {
          content: challengeDetails?.content || "정보 없음",
          category: challengeDetails?.category || "정보 없음",
          difficulty: challengeDetails?.difficulty || "정보 없음",
          date: challenge.date || "날짜 없음",
        };
      }) || [];

      return { ...friend, challenges };
    });

    setFriends(friendChallenges);
    console.log("Friends Data:", friendChallenges);
  }, []);

  return (
    <Box w="100%" minH="100vh" bg="rgba(198, 234, 130, 0.7)" p={4}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        친구들의 챌린지
      </Heading>
      <VStack spacing={6} align="stretch">
        {friends.map((friend) => (
          <Box key={friend.id} p={4} bg="white" borderRadius="md" shadow="md">
            <HStack spacing={4} mb={4}>
              <Image src={userIcon} boxSize="50px" />
              <Text fontSize="2xl" fontWeight="bold">
                {friend.name} 님의 성공한 챌린지
              </Text>
            </HStack>
            <VStack align="stretch" spacing={3}>
              {friend.challenges.length > 0 ? (
                friend.challenges.map((challenge, index) => (
                  <Stack key={index} p={4} bg="#E2E8F0" borderRadius="md">
                    <Text fontSize="lg" fontWeight="semibold">
                      챌린지: {challenge.content}
                    </Text>
                    <Text>카테고리: {challenge.category}</Text>
                    <Text>난이도: {challenge.difficulty}</Text>
                    <Text>성공 날짜: {challenge.date}</Text>
                  </Stack>
                ))
              ) : (
                <Text>아직 성공한 챌린지가 없습니다.</Text>
              )}
            </VStack>
          </Box>
        ))}
      </VStack>
      <Button mt={8} colorScheme="teal" onClick={() => navigate("/friend-ranking")}>친구 랭킹 보기</Button>
    </Box>
  );
};

export default FriendChallengeSuccess;

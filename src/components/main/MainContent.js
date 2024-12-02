"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Button, Select, Heading, Stack, Text } from "@chakra-ui/react";
import challenge from "../../components/challengepage/Challenge";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function MainContent() {
  const [rankData, setRankData] = useState([]);
  const [myRank, setMyRank] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem("authToken"); // 현재 로그인된 사용자 ID
    if (!authToken) {
      alert("로그인이 필요합니다.");
      return;
    }

    // 로컬스토리지에서 사용자 데이터 가져오기
    const storedData = JSON.parse(localStorage.getItem("totalUserData")) || [];

    // 점수 계산 및 정렬
    const sortedData = storedData.map((user) => ({
      ...user,
      score: user.id === Number(authToken) ? user.challengeListNum : user.challengeListNum,
    })).sort((a, b) => b.score - a.score);

    setRankData(sortedData.slice(0, 4)); // 상위 4명 설정

    // 현재 사용자 랭킹 계산
    const myRankIndex = sortedData.findIndex((user) => String(user.id) === authToken);
    if (myRankIndex !== -1) {
      setMyRank({
        rank: myRankIndex + 1,
        name: sortedData[myRankIndex].name,
        score: sortedData[myRankIndex].score,
      });
    } else {
      setMyRank(null);
    }
  }, []);

  const handleGenerateChallenge = () => {
    const authToken = sessionStorage.getItem("authToken");
    if (!authToken) {
      alert("로그인이 필요합니다.");
      return;
    }
    const randomChallengeIndex = Math.floor(Math.random() * challenge.length);
    const randomChallenge = challenge[randomChallengeIndex];
    const userid = authToken;
    const userData = JSON.parse(localStorage.getItem("totalUserData"));
    const userIndex = userData.findIndex((user) => String(user.id) === String(authToken));
    if (userIndex === -1) {
      alert(`사용자 데이터를 찾을 수 없습니다. 현재 토큰: ${authToken}`);
      return;
    }
    const currentUser = userData[userIndex];
    currentUser.currentChallengeNum = randomChallengeIndex;
    currentUser.currentChallenge = [randomChallenge];

    userData[userIndex] = currentUser;
    localStorage.setItem("totalUserData", JSON.stringify(userData));
    navigate("/SelfChallenge", { state: randomChallenge });
  };

  const handleRewardClick = () => {
    navigate("/pointExchange");
  };

  return (
    <Box p={4} height="100vh" overflowX="auto" overflowY="hidden" style={{ minWidth: "1200px" }}>
      <Flex
        bg="rgba(198,234,130,0.8)"
        p={4}
        mb={6}
        wrap="nowrap"
        justify="space-between"
        align="center"
        borderRadius="15px"
        boxShadow="md"
      >
        {/* 현재 진행 중인 챌린지 설명 섹션 */}
        <Stack
          spacing={2}
          flex="1"
          mr={4}
          minW="400px"
          maxW="300px"
          textAlign="left"
          align="flex-start"
        >
        <Box
          maxW="800px"
          mx="auto"
          p="30px"
          bg="rgba(198,234,130,0.9)"
          borderRadius="15px"
          boxShadow="md"
        >
        <Heading size="lg" textAlign="center" mb="30px">
          GUIDE
        </Heading>
        <Box mt="20px">
          <Text fontWeight="bold">STEP1. 오늘의 도전 확인하기</Text>
          <Text mt="5px" fontSize="xs" color="gray.600">
          오늘의 랜덤 도전을 확인하고 목표를 설정하세요. 작은 도전이 일상에 활기를 더해줍니다!</Text>
        </Box>

        <Box mt="20px">
          <Text fontWeight="bold">STEP2. 도전 실행하고 성취하기</Text>
          <Text mt="5px" fontSize="xs" color="gray.600">
          목표를 향해 도전해 보세요. 한 걸음 한 걸음이 당신을 더 나은</Text>
          <Text fontSize="xs" color="gray.600">
          방향으로 이끌어 줄 거예요.</Text> 
        </Box>

        <Box mt="20px" mb="20px">
          <Text fontWeight="bold">STEP3. 포인트 적립 및 공유하기</Text>
          <Text mt="5px" fontSize="xs" color="gray.600">
          도전을 완수하고 포인트를 모아 보상을 받으세요. 친구들과 함께 도전을 나누며 즐거움을 더하세요!</Text>
        </Box>
      </Box>
        </Stack>
        {/* 챌린지 생성 버튼 섹션 */}
        <Stack flex="1" spacing={2} align="center" minW="400px" maxW="400px" textAlign="center">
        <Box textAlign="center" my={4}>
        <Heading size="lg" color="teal.500">
          Today's Challenge Awaits!
        </Heading>
        <Text mt="1px" fontSize="sm" color="gray.700">지금 바로 도전 과제를 생성하고, 자신을 성장시켜 보세요!</Text>
        </Box>
          <Button colorScheme="teal" size="lg" alignSelf="center" onClick={handleGenerateChallenge}>
            GENERATE CHALLENGE
          </Button>
        </Stack>

        {/* 랭킹 섹션 */}
        <Stack
          flex="1"
          spacing={4}
          p="30px"
          bg="rgba(198,234,130,0.9)"
          minW="400px"
          maxW="300px"
          borderRadius="15px"
          boxShadow="md"
        >
          <Heading
            size="lg"
            cursor="pointer"
            onClick={() => navigate("/rank")}
            _hover={{ textDecoration: "underline" }}
          >
            RANK
          </Heading>
          {rankData.map((user, index) => (
            <Box key={user.id}>
              <Flex align="center" justify="space-between">
                <Text>
                  {index + 1}. {user.name}
                </Text>
                <Text>{user.score} pts</Text>
              </Flex>
              <Box h="1px" bg="black" my={2} />
            </Box>
          ))}
          <Flex align="center" justify="space-between" mt={4}>
            <Heading size="xs">MY RANK</Heading>
            {myRank ? (
              <Text>
                {myRank.rank}. {myRank.name} ({myRank.score} pts)
              </Text>
            ) : (
              <Text>Not Ranked</Text>
            )}
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}
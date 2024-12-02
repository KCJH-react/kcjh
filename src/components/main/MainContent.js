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
        borderRadius="md"
        mb={6}
        wrap="nowrap"
        justify="space-between"
        align="center"
        borderBottom="1px solid"
        borderColor="gray"
      >
        {/* 현재 진행 중인 챌린지 설명 섹션 */}
        <Stack
          spacing={2}
          flex="1"
          mr={4}
          minW="400px"
          maxW="400px"
          textAlign="left"
          align="flex-start"
        >
          <Heading size="sm">(이 챌린지에 대한 설명)</Heading>
          <Text>STEP1. ...</Text>
          <Text>STEP2. ...</Text>
          <Text>STEP3. ...</Text>
          <Button colorScheme="teal" alignSelf="flex-start" onClick={handleRewardClick}>
            REWARD
          </Button>
        </Stack>

        {/* 챌린지 생성 버튼 섹션 */}
        <Stack flex="1" spacing={2} align="center" minW="400px" maxW="400px" textAlign="center">
          <Heading size="sm">(종류, 난이도, 기간을 정하세요!)</Heading>
          <Text>(GENERATE CHALLENGE 버튼으로 챌린지를 생성하세요!)</Text>
          <Button colorScheme="teal" size="lg" alignSelf="center" onClick={handleGenerateChallenge}>
            GENERATE CHALLENGE
          </Button>
          <Flex gap={2} mt={2} wrap="nowrap" justify="center">
            <Select placeholder="종류" w="150px">
              <option>STUDY</option>
              <option>HEALTH</option>
              <option>CULTURE</option>
              <option>DEVELOP</option>
              <option>MONEY</option>
              <option>VOLUNTEER</option>
              <option>CHALLENGE</option>
              <option>UNIVERSITY</option>
            </Select>
            <Select placeholder="난이도" w="150px">
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </Select>
            <Select placeholder="기간" w="150px">
              <option>1일</option>
              <option>1주</option>
              <option>1달</option>
            </Select>
          </Flex>
        </Stack>

        {/* 랭킹 섹션 */}
        <Stack
          flex="1"
          spacing={4}
          p={4}
          bg="rgba(198,234,130,0.9)"
          borderRadius="md"
          minW="400px"
          maxW="300px"
          borderBottom="1px solid"
          borderColor="gray"
        >
          <Heading
            size="sm"
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

import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image, Button, VStack, HStack, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import userIcon from "../../asset/user-icon.png";

function FriendRanking() {
  const [friendRankData, setFriendRankData] = useState([]);
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

    // 현재 사용자 데이터 찾기
    const currentUser = storedData.find((user) => String(user.id) === authToken);
    if (!currentUser) {
      alert("사용자 데이터를 찾을 수 없습니다.");
      return;
    }

    // 친구 목록 필터링
    const friendsData = currentUser.friendList.map((friend) =>
      storedData.find((user) => user.id === friend.id)
    ).filter(Boolean); // 유효한 친구만 포함

    // 본인 데이터를 포함하여 정렬
    const allData = [currentUser, ...friendsData].map((user) => ({
      ...user,
      score: user.challengeListNum || 0, // 친구의 점수는 challengeSuccess를 사용
    })).sort((a, b) => b.score - a.score);

    setFriendRankData(allData);

    // 내 랭킹 계산
    const myRankIndex = allData.findIndex((user) => String(user.id) === authToken);
    if (myRankIndex !== -1) {
      setMyRank({
        rank: myRankIndex + 1,
        score: allData[myRankIndex].score,
      });
    } else {
      setMyRank({ rank: "-", score: "-" });
    }
  }, []);

  return (
    <Box w="100%" minH="100vh" bg="#D6F0A8" overflowX="hidden" p="0" m="0">
      {/* MY RANK 섹션 */}
      <Box position="relative" textAlign="left" mb="8" px="4">
        <Text fontSize="2xl" fontWeight="bold">
          MY RANK
        </Text>
        <HStack spacing="4" mt="4">
          <Image src={userIcon} boxSize="40px" />
          <Text fontSize="lg" textDecoration="underline" textUnderlineOffset="3px">
            {myRank ? `${myRank.rank}등 ♦️${myRank.score}` : "랭킹 정보 없음"}
          </Text>
        </HStack>
      </Box>

      {/* TOP 3 섹션 */}
      <Center mb="8">
        <Flex align="flex-end" justify="center" gap="0">
          {friendRankData.slice(0, 3).map((user, index) => (
          <VStack key={index} position="relative" spacing={2}>
          <Image src={userIcon} boxSize="40px" mb="-5px" /> 
          <Text fontSize="lg" fontWeight="bold">{user.name}</Text> {/* 이름 추가 */}
        <Box
          bg="#389E6B"
          w="100px"
          h={`${170 - index * 50}px`}
          display="flex"
          alignItems="center"
          justifyContent="center"
           >
              <Text fontSize="xl" color="white">
                {index + 1}
              </Text>
            </Box>
          </VStack>
         ))}
        </Flex>
      </Center>

      {/* FRIENDS RANK 섹션 */}
      <Text fontSize="2xl" fontWeight="bold" textAlign="left" px="4">
        FRIEND RANK
      </Text>
      <Box bg="#F7FCED" mt="3" w="100%" px="4" py="6" mx="0">
        <HStack spacing="3" justify="flex-end" mb="4">
          <Button
            bg="green.600"
            color="white"
            fontWeight="bold"
            size="sm"
            _hover={{ bg: "green.700" }}
            onClick={() => navigate("/rank")}
          >
            전체 랭킹 보기
          </Button>
          <Button
            bg="green.600"
            color="white"
            fontWeight="bold"
            size="sm"
            _hover={{ bg: "green.700" }}
            onClick={() => navigate("/success")}
            ml="2"
          >
            친구의 챌린지 보기
          </Button>
        </HStack>
        <VStack spacing="4">
          {friendRankData.map((user, index) => (
            <HStack
              key={user.id}
              w="100%"
              maxW="600px"
              bg={
                index < 3 ? (index === 0 ? "gold" : index === 1 ? "#F7E58A" : "#CBE9A2") : "#B5D584"
              }
              p="4"
              justify="space-between"
              borderRadius="md"
            >
              <HStack spacing="2">
                <Text fontSize="2xl" fontWeight="bold" color="white">
                  {index + 1}
                </Text>
                <Box w="2px" h="100%" bg="white" />
                <Image src={userIcon} boxSize="40px" />
                <Text>{user.name}</Text>
              </HStack>
              <HStack spacing="2">
                <Text fontSize="lg">♦️ {user.score}</Text>
              </HStack>
            </HStack>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}

export default FriendRanking;

import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Image, Button, VStack, HStack, Center } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import userIcon from '../../asset/user-icon.png';
import { useNavigate } from 'react-router-dom';

function RankSystem() {
  const navigate = useNavigate();
  const members = useSelector((state) => state.members.members);
  const [rankData, setRankData] = useState([]);
  const [myRank, setMyRank] = useState(null);
  const myUsername = 'CurrentUser';

  useEffect(() => {
    // 사용자 데이터 정렬 (점수 내림차순)
    const sortedData = [...members].sort((a, b) => b.challengeSuccess - a.challengeSuccess);
    setRankData(sortedData);

    // 현재 사용자 랭킹 계산
    const myRankIndex = sortedData.findIndex((user) => user.name === myUsername);
    if (myRankIndex !== -1) {
      setMyRank({ rank: myRankIndex + 1, score: sortedData[myRankIndex].challengeSuccess });
    } else {
      setMyRank({ rank: '-', score: '-' });
    }
  }, [members]);

  return (
    <Box w="100%" minH="100vh" bg="#D6F0A8" overflowX="hidden" p="0" m="0">
      {/* MY RANK 섹션 */}
      <Box position="relative" textAlign="left" mb="8" px="4">
        <Text fontSize="2xl" fontWeight="bold">MY RANK</Text>
        <HStack spacing="4" mt="4">
          <Image src={userIcon} boxSize="40px" />
          <Text fontSize="lg" textDecoration="underline" textUnderlineOffset="3px">
            {myRank ? `${myRank.rank}등 ♦️${myRank.score}` : '랭킹 정보 없음'}
          </Text>
        </HStack>
      </Box>

      {/* TOP 3 섹션 */}
      <Center mb="8">
        <Flex align="flex-end" justify="center" gap="0">
          {rankData.slice(0, 3).map((user, index) => (
            <VStack key={index} position="relative">
              <Image src={userIcon} boxSize="40px" mb="-5px" />
              <Box
                bg="#389E6B"
                w="100px"
                h={`${170 - index * 50}px`}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="xl" color="white">{index + 1}</Text>
              </Box>
            </VStack>
          ))}
        </Flex>
      </Center>

      {/* RANK 섹션 */}
      <Text fontSize="2xl" fontWeight="bold" textAlign="left" px="4">RANK</Text>
      <Box bg="#F7FCED" mt="3" w="100%" px="4" py="6" mx="0">
        <HStack spacing="3" justify="flex-end" mb="4">
          <Button bg="green.600" color="white" fontWeight="bold" size="sm" _hover={{ bg: "green.700" }} onClick={() => navigate('/friend-ranking')}>
            친구 랭킹
          </Button>
          <Button bg="green.600" color="white" fontWeight="bold" size="sm" _hover={{ bg: "green.700" }} ml="2">
            전체 랭킹
          </Button>
        </HStack>

        <VStack spacing="4">
          {rankData.map((user, index) => (
            <HStack
              key={index}
              w="100%"
              maxW="600px"
              bg={index < 3 ? (index === 0 ? 'gold' : index === 1 ? '#F7E58A' : '#CBE9A2') : '#B5D584'}
              p="4"
              justify="space-between"
              borderRadius="md"
            >
              <HStack spacing="2">
                <Text fontSize="2xl" fontWeight="bold" color="white">{index + 1}</Text>
                <Box w="2px" h="100%" bg="white" />
                <Image src={userIcon} boxSize="40px" />
                <Text>{user.name}</Text>
              </HStack>
              <HStack spacing="2">
                <Text fontSize="lg">♦️ {user.challengeSuccess}</Text>
              </HStack>
            </HStack>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}

export default RankSystem;

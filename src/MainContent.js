'use client';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Flex, Button, Select, Heading, Stack, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useCurrentChallenge, useSetCurrentChallenge } from './redux/userData';
import Challenge from './Challenge';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function MainContent() {
  const [rankData, setRankData] = useState([]);
  const [myRank, setMyRank] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch(); 
  const challengeIndex = useCurrentChallenge();
  const setChallenge = useSetCurrentChallenge(dispatch);

  useEffect(() => {
    // LocalStorage에서 랭킹 데이터 불러오기
    const storedData = JSON.parse(localStorage.getItem('rankData')) || [];
    const sortedData = storedData.sort((a, b) => b.score - a.score);
    setRankData(sortedData.slice(0, 4));
    const currentUser = sortedData.find(user => user.username === "CurrentUser");
    setMyRank(currentUser ? { ...currentUser, rank: sortedData.indexOf(currentUser) + 1 } : null);
  }, []);

  const handleGenerateChallenge = () => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      const randomChallengeIndex = Math.floor(Math.random() * Challenge.length);
      setChallenge(randomChallengeIndex);
      navigate('/SelfChallenge');
    }
    const username = authToken.split('-authToken-')[0];
    const userData = JSON.parse(localStorage.getItem('totalUserData'));
    const userIndex = userData.findIndex(user => user.name === username);

    if (userIndex === -1) {
      alert("사용자 데이터를 찾을 수 없습니다.");
      return;
    }
  };

  const handleRewardClick = () => {
    navigate('/pointExchange');
  };

  return (
    <Box 
      p={4} 
      height="100vh" 
      overflowX="auto"
      overflowY="hidden"
      style={{ minWidth: '1200px' }}
    >
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
        <Stack spacing={2} flex="1" mr={4} minW="400px" maxW="400px" textAlign="left" align="flex-start">
          <Heading size="sm">(이 챌린지에 대한 설명)</Heading>
          <Text>STEP1. ...</Text>
          <Text>STEP2. ...</Text>
          <Text>STEP3. ...</Text>
          <Button colorScheme="teal" alignSelf="flex-start" onClick={handleRewardClick}>REWARD</Button>
        </Stack>

        {/* 챌린지 생성 버튼 섹션 */}
        <Stack flex="1" spacing={2} align="center" minW="400px" maxW="400px" textAlign="center">
          <Heading size="sm">(종류, 난이도, 기간을 정하세요!)</Heading>
          <Text>(GENERATE CHALLENGE 버튼으로 챌린지를 생성하세요!)</Text>
          <Button colorScheme="teal" size="lg" alignSelf="center" onClick={handleGenerateChallenge}>GENERATE CHALLENGE</Button>
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
            onClick={() => navigate('/rank')}
            _hover={{ textDecoration: 'underline' }}
          >
            RANK
          </Heading>
          {rankData.map((user, index) => (
            <Box key={index}>
              <Flex align="center" justify="space-between">
                <Text>{index + 1}. {user.username}</Text>
                <Text>{user.score} pts</Text>
              </Flex>
              <Box h="1px" bg="black" my={2} />
            </Box>
          ))}
          {rankData.length < 4 && (
            [...Array(4 - rankData.length)].map((_, index) => (
              <Box key={index + rankData.length}>
                <Flex align="center" justify="space-between">
                  <Text>-</Text>
                  <Text>-</Text>
                </Flex>
                <Box h="1px" bg="black" my={2} />
              </Box>
            ))
          )}
          <Flex align="center" justify="space-between" mt={4}>
            <Heading size="xs">MY RANK</Heading>
            {myRank ? (
              <Text>{myRank.rank}. {myRank.username} ({myRank.score} pts)</Text>
            ) : (
              <Text>Not Ranked</Text>
            )}
          </Flex>
        </Stack>
      </Flex>

      {/* 카테고리 별로 볼 수 있는 버튼 */}
      <Flex gap={4} wrap="nowrap" justify="center" mb={6}>
        {['STUDY', 'HEALTH', 'CULTURE', 'DEVELOP', 'MONEY', 'VOLUNTEER', 'CHALLENGE', 'UNIVERSITY'].map((category) => (
          <Button key={category} colorScheme="gray" size="lg" borderRadius="full" bg="rgba(198,234,130,0.5)" borderBottom="1px solid" borderColor="gray">
            {category}
          </Button>
        ))}
      </Flex>

      {/* 내가 도전한 챌린지 */}
      <Flex mb={6} wrap="nowrap" justify="space-between" alignItems="flex-start">
        <Box flex="1" minW="400px" maxW="400px" textAlign="left">
          <Heading size="md" mb={4}>MY CHALLENGES</Heading>
          <Flex gap={4} wrap="nowrap">
            <Box w="100px" h="100px" bg="rgba(198,234,130,0.5)" borderRadius="md" boxShadow="md" borderBottom="1px solid" borderColor="gray"></Box>
            <Box w="100px" h="100px" bg="rgba(198,234,130,0.5)" borderRadius="md" boxShadow="md" borderBottom="1px solid" borderColor="gray"></Box>
            <Box w="100px" h="100px" bg="rgba(198,234,130,0.5)" borderRadius="md" boxShadow="md" borderBottom="1px solid" borderColor="gray"></Box>
          </Flex>
        </Box>

        {/* 커뮤니티 */}
        <Box textAlign="right" border="1px" borderColor="gray.300" p={4} borderRadius="md" maxW="400px" minW="300px" bg="rgba(198,234,130,0.5)" boxShadow="md" borderBottom="1px solid">
          <Heading size={'md'} mb={4}>COMMUNITY</Heading>
          <Flex gap={4} mb={4} justify="flex-end" wrap="nowrap">
            {['인기', '일반', '정보', '기타'].map((label) => (
              <Button
                key={label}
                colorScheme="blackAlpha"
                bg="black"
                color="white"
                variant="solid"
                _hover={{ bg: 'gray.700' }}>
                {label}
              </Button>
            ))}
          </Flex>
          <Box textAlign="left">
            <Text fontWeight="bold">HOT</Text>
            <Text mb={2}>하루동안 가장 많은 조회/좋아요를 받은 게시물</Text>
            <Text fontWeight="bold">NEW</Text>
            <Text>가장 최근에 올라온 게시물</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

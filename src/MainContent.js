'use client';

import { useNavigate } from 'react-router-dom';
import { Box, Flex, Button, Select, Heading, Stack, Text } from '@chakra-ui/react';
import challenge from './Challenge';

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

  const navigate = useNavigate();

  const handleGenerateChallenge = () => {
    const randomChallenge = challenge[Math.floor(Math.random() * challenge.length)];
    console.log(randomChallenge);  // 챌린지 객체가 제대로 선택되는지 확인
    navigate('/SelfChallenge', { state: randomChallenge });
  };

  return (
    /*현재진행중인 챌린지*/
    <Box p={4}>
      <Flex bg="rgba(198,234,130,0.5)" p={4} borderRadius="md" mb={6} wrap="wrap" justify="center" align="center" borderBottom="1px solid" borderColor="gray">
        <Stack spacing={2} flex={1} mr={4} minW={{ base: '100%', md: '40%' }} align="flex-start" textAlign="left">
          <Heading size="sm">(이 챌린지에 대한 설명)</Heading>
          <Text>STEP1. ...</Text>
          <Text>STEP2. ...</Text>
          <Text>STEP3. ...</Text>
          <Button colorScheme="teal" alignSelf="flex-start">REWARD</Button>
        </Stack>
        <Stack flex={2} spacing={2} align="center" minW={{ base: '100%', md: '30%' }} mt={{ base: 4, md: 0 }} textAlign="center" ml={-80}>
          <Heading size="sm">(이 버튼에 대한 설명 1줄)</Heading>
          <Text>(이 버튼에 대한 설명 2줄)</Text>
          <Button colorScheme="teal" size="lg" alignSelf="center" onClick={handleGenerateChallenge}>GENERATE CHALLENGE</Button> {/*챌린지 생성 버튼 */}
          <Flex gap={2} mt={2} wrap="wrap" justify="center">
            {/*종류 난이도 기간*/}
            <Select placeholder="종류" w={{ base: '100%', md: 'auto' }}>
              <option>종류1</option>
            </Select>
            <Select placeholder="난이도" w={{ base: '100%', md: 'auto' }}>
              <option>난이도1</option>
            </Select>
            <Select placeholder="기간" w={{ base: '100%', md: 'auto' }}>
              <option>기간1</option>
            </Select>
          </Flex>
        </Stack>
        {/*간단하게 보이는 랭킹*/}
        <Stack flex={1} spacing={4} p={4} bg="rgba(198,234,130,0.8)" borderRadius="md" minW={{ base: '100%', md: '25%' }} mt={{ base: 4, md: 0 }} maxW="300px" borderBottom="1px solid" borderColor="gray">
          <Heading size="sm">RANK</Heading>
          {[...Array(4)].map((_, index) => (
            <Flex key={index} align="center" justify="space-between">
              <Box w={4} h={4} bg="white" borderRadius="full" />
              <Box flex={1} h="1px" bg="black" ml={2} mr={2} />
            </Flex>
          ))}
          <Flex align="center" justify="space-between">
            <Box w={4} h={4} bg="white" borderRadius="full" />
            <Box flex={1} h="1px" bg="black" ml={2} mr={2} />
            <Button size="xs" variant="ghost">...</Button>
          </Flex>
          <Heading size="sm" mt={4}>MY RANK</Heading>
          <Flex align="center" justify="space-between">
            <Box w={4} h={4} bg="white" borderRadius="full" />
            <Box flex={1} h="1px" bg="black" ml={2} />
          </Flex>
        </Stack>
      </Flex>

      {/*카테고리 별로 볼 수 있는 버튼*/}
      <Flex gap={4} wrap="wrap" justify="center" mb={6}>
        {['STUDY', 'HEALTH', 'SOCIAL', 'DEVELOP', 'DAILY', 'MENTAL', 'MONEY', 'VOLUNTEER', 'CHALLENGE'].map((category) => (
          <Button key={category} colorScheme="gray" size="lg" borderRadius="full" bg="rgba(198,234,130,0.5)" borderBottom="1px solid" borderColor="gray">
            {category}
          </Button>
        ))}
      </Flex>

      {/*내가 도전한 챌린지*/}
      <Flex mb={6} wrap="wrap" justify="space-between" alignItems="flex-start">
        <Box flex={1} mr={4} minW={{ base: '100%', md: '50%' }}>
          <Heading size="md" mb={4}>MY CHALLENGES</Heading>
          <Flex gap={4} wrap="wrap">
            <Box w="100px" h="100px" bg="rgba(198,234,130,0.5)" borderRadius="md" boxShadow="md" borderBottom="1px solid" borderColor="gray"></Box>
            <Box w="100px" h="100px" bg="rgba(198,234,130,0.5)" borderRadius="md" boxShadow="md" borderBottom="1px solid" borderColor="gray"></Box>
            <Box w="100px" h="100px" bg="rgba(198,234,130,0.5)" borderRadius="md" boxShadow="md" borderBottom="1px solid" borderColor="gray"></Box>
          </Flex>
        </Box>

        {/*커뮤니티*/}
        <Box textAlign="right" border="1px" borderColor="gray.300" p={4} borderRadius="md" maxW="400px" minW={{ base: '100%', md: '30%' }} ml="auto" bg="rgba(198,234,130,0.5)" boxShadow="md" borderBottom="1px solid">
          <Heading size={'md'} mb={4}>COMMUNITY</Heading>
          <Flex gap={4} mb={4} justify="flex-end" wrap="wrap">
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
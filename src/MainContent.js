'use client';

import { Box, Flex, Button, Select, Heading, Stack, Text } from '@chakra-ui/react';

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
  return (
    <Box p={4}>
      <Flex bg="gray.100" p={4} borderRadius="md" mb={6} wrap="wrap" justify="center" align="center">
        <Stack spacing={2} flex={1} mr={4} minW={{ base: '100%', md: '40%' }} align="flex-start" textAlign="left">
          <Heading size="sm">(이 챌린지에 대한 설명)</Heading>
          <Text>STEP1. ...</Text>
          <Text>STEP2. ...</Text>
          <Text>STEP3. ...</Text>
          <Button colorScheme="gray" alignSelf="flex-start">REWARD</Button>
        </Stack>
        <Stack flex={2} spacing={2} align="center" minW={{ base: '100%', md: '30%' }} mt={{ base: 4, md: 0 }} textAlign="center">
        <Heading size="sm">(이 버튼에 대한 설명 1줄)</Heading>
          <Text>(이 버튼에 대한 설명 2줄)</Text>
          <Button colorScheme="teal" size="lg" alignSelf="center">GENERATE CHALLENGE</Button>
          <Flex gap={2} mt={2} wrap="wrap" justify="center">
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
        <Stack flex={1} spacing={4} p={4} bg="gray.300" borderRadius="md" minW={{ base: '100%', md: '25%' }} mt={{ base: 4, md: 0 }} maxW="300px">
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

      <Flex gap={4} wrap="wrap" justify="center" mb={6}>
        {['STUDY', 'HEALTH', 'SOCIAL', 'DEVELOP', 'DAILY', 'MENTAL', 'MONEY', 'VOLUNTEER', 'CHALLENGE'].map((category) => (
          <Button key={category} colorScheme="gray" size="lg" borderRadius="full">
            {category}
          </Button>
        ))}
      </Flex>

      <Flex mb={6} wrap="wrap" justify="space-between" alignItems="flex-start">
        <Box flex={1} mr={4} minW={{ base: '100%', md: '50%' }}>
          <Heading size="md" mb={4}>MY CHALLENGES</Heading>
          <Flex gap={4} wrap="wrap">
            <Box w="100px" h="100px" bg="gray.200" borderRadius="md"></Box>
            <Box w="100px" h="100px" bg="gray.200" borderRadius="md"></Box>
            <Box w="100px" h="100px" bg="gray.200" borderRadius="md"></Box>
          </Flex>
        </Box>

        <Box textAlign="right" border="1px" borderColor="gray.300" p={4} borderRadius="md" maxW="400px" minW={{ base: '100%', md: '30%' }} ml="auto">
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
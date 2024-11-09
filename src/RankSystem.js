import React from 'react';
import { Box, Flex, Text, Image, Button, VStack, HStack, Stack, Center } from '@chakra-ui/react';
import userIcon from './asset/user-icon.png';

function RankSystem() {
  return (
    <Box w="100%" minH="100vh" bg="gray.50" overflowX="hidden" p="0" m="0">
      <Box position="relative" textAlign="left" mb="8" px="4">
        <Text fontSize="2xl" fontWeight="bold">MY RANK</Text>
        <HStack spacing="4" mt="4">
          <Image src={userIcon} boxSize="40px" />
          <Text fontSize="lg" textDecoration="underline" textUnderlineOffset="3px">30등 ♦️55</Text>
        </HStack>
      </Box>

      <Center mb="8">
        <Flex align="flex-end" justify="center" gap="0">
          <VStack position="relative">
            <Image src={userIcon} boxSize="40px" mb="-5px" />
            <Box bg="gray.300" w="100px" h="170px" display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="xl" color="white">1</Text>
            </Box>
          </VStack>
          <VStack position="relative">
            <Image src={userIcon} boxSize="40px" mb="-5px" />
            <Box bg="gray.300" w="100px" h="120px" display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="xl" color="white">2</Text>
            </Box>
          </VStack>
          <VStack position="relative">
            <Image src={userIcon} boxSize="40px" mb="-5px" />
            <Box bg="gray.300" w="100px" h="70px" display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="xl" color="white">3</Text>
            </Box>
          </VStack>
        </Flex>
      </Center>

      <Text fontSize="2xl" fontWeight="bold" textAlign="left" px="4">RANK</Text>
      <Box bg="gray.100" mt="3" w="100%" px="4" py="6" mx="0">
        <HStack spacing="3" justify="flex-end" mb="4">
          <Button bg="yellow.300" fontWeight="bold" size="sm">친구 랭킹</Button>
          <Button bg="yellow.300" fontWeight="bold" size="sm" ml="2">전체 랭킹</Button>
        </HStack>
        <VStack spacing="4">
          {[...Array(10)].map((_, i) => (
            <HStack
              key={i}
              w="100%"
              maxW="600px"
              bg={i < 3 ? (i === 0 ? 'gold' : i === 1 ? 'lightgreen' : 'orange') : 'gray.400'}
              p="4"
              justify="space-between"
              borderRadius="md"
            >
              <HStack spacing="2">
                <Text fontSize="2xl" fontWeight="bold" color="white">{i + 1}</Text>
                <Box w="2px" h="100%" bg="white" />
                <Image src={userIcon} boxSize="40px" />
                <Text>Username</Text>
              </HStack>
              <HStack spacing="2">
                <Stack spacing="0" align="center">
                  <Text>👑</Text>
                  <Text fontSize="lg">{(10 - i) * 10}</Text>
                </Stack>
                <Stack spacing="0" align="center">
                  <Text>♦️</Text>
                  <Text fontSize="lg">{(10 - i) * 100}</Text>
                </Stack>
              </HStack>
            </HStack>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}

export default RankSystem;

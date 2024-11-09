'use client'
import React from 'react';
import { Box, Flex, Heading, Stack, Text, Button, Avatar, Badge } from '@chakra-ui/react';
import { FaCrown } from 'react-icons/fa';

export default function FriendRanking() {
  return (
    <Box p={4}>
      <Box mb={8}>
        <Heading size="md" mb={4}>MY RANK</Heading>
        <Flex align="center" gap={4}>
          <Avatar size="lg" />
          <Box>
            <Text fontSize="2xl" fontWeight="bold">name</Text>
            <Text fontSize="lg" color="red.500">??</Text>
          </Box> 
        </Flex>
        <Flex mt={4} justifyContent="center">
          <Box w="150px" h="100px" bg="gray.300" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
            <Text fontSize="3xl">1</Text>
          </Box>
          <Box w="150px" h="75px" bg="gray.300" borderRadius="md" ml={2} display="flex" alignItems="center" justifyContent="center"mt={6}>
            <Text fontSize="2xl">2</Text>
          </Box>
          <Box w="150px" h="50px" bg="gray.300" borderRadius="md" ml={2} display="flex" alignItems="center" justifyContent="center"mt={12}>
            <Text fontSize="xl">3</Text>
          </Box>
        </Flex>
      </Box>

      <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
        <Flex justify="space-between" align="center" mb={4}>
            <Heading size="md">RANK</Heading>
            <Flex gap={4}>
                <Button colorScheme="yellow">친구 랭킹</Button>
                <Button colorScheme="yellow" variant="outline">전체 랭킹</Button>
            </Flex>
        </Flex>
        
        <Stack spacing={4}>
          {[1, 2, 3].map((rank) => (
            <Flex key={rank} align="center" bg={rank === 1 ? 'yellow.200' : rank === 2 ? 'green.200' : 'orange.200'} p={4} borderRadius="md">
              <Badge colorScheme="yellow" fontSize="xl" mr={4}>{rank}</Badge>
              <Avatar size="md" mr={4} />
              <Box flex={1}>
                <Text fontWeight="bold">Username</Text>
              </Box>
              <Flex align="center" gap={2}>
                <FaCrown color="gold" />
                <Text fontWeight="bold">{rank === 1 ? 100 : rank === 2 ? 50 : 25}</Text>
                <Text color="red.500" ml={4}>{rank === 1 ? 1010 : rank === 2 ? 800 : 500}</Text>
              </Flex>
            </Flex>
          ))}
        </Stack>
        
      </Box>
    </Box>
  );
}

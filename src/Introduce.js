import React from 'react';
import { Box, Heading, Text, VStack, Stack, Image } from '@chakra-ui/react';

function Introduce() {
  return (
    <Box w="100%" minH="100vh" bg="#F7FCED" p={8} display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={8} maxW="800px">
        <Heading as="h1" size="2xl" color="#4CAF50" textAlign="center">
          RANDOM CHALLENGE에 오신 것을 환영합니다
        </Heading>
        <Stack spacing={4} textAlign="center">
          <Text fontSize="lg" color="gray.700">
            RANDOM CHALLENGE는 여러분이 삶의 다양한 측면에서 성장하고 발전할 수 있도록 흥미로운 도전을 제공하는 플랫폼입니다. 건강과 피트니스부터 새로운 기술 습득에 이르기까지, 항상 여러분이 탐험하고 정복할 수 있는 새로운 도전이 기다리고 있습니다.
          </Text>
          <Text fontSize="lg" color="gray.700">
            우리의 커뮤니티에 참여하여 여러분의 여정을 공유하고, 다른 사람들에게서 영감을 얻으며, 도전 과정을 통해 보상을 받아보세요. 일일 챌린지부터 장기 목표까지, 여러분의 한계를 넘어서도록 도와줄 지지적인 환경을 제공합니다.
          </Text>
          <Text fontSize="lg" color="gray.700">
            오늘 바로 여러분의 모험을 시작하세요. RANDOM CHALLENGE를 수락하고, 여러분이 얼마나 멀리 갈 수 있는지 확인해 보세요!
          </Text>
        </Stack>
      </VStack>
    </Box>
  );
}

export default Introduce;

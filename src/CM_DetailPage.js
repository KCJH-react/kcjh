import React from 'react';
import { Box, VStack, HStack, Flex, Text, Button, Input } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';


function CM_DetailPage() {
  return <div 
    style={{
      padding: "0px 180px",
      background: "linear-gradient(rgba(198,234,130,0.3) 50%, white 50%)",
      height: "150vh"
    }}
    >
    <Flex direction="column" p="4" width="100%">
      {/*최상단 네비게이션 메뉴 */}
      <Box as="nav" w={'100%'} p={6} color='black' borderBottomWidth='1px' borderColor='gray' whiteSpace='nowrap'>
        <Box display='inline-block' p={4} color='black'>
        <HamburgerIcon role="button" w={30} h={30} />
          <span style={{ fontWeight: 'bold', fontSize: '20px', marginLeft: '8px' }}>Random</span>Challenge
        </Box>
        {/*추후에 onCLick추가해야함*/}
        <Box role="button" cursor="pointer" _hover={{ bg: 'gray.100' }} display='inline-block' p={4} marginX={2} color='black'> 소개 </Box> 
        <Box role="button" cursor="pointer" _hover={{ bg: 'gray.100' }} display='inline-block' p={4} marginX={2} color='black'> 커뮤니티 </Box>
        <Box role="button" cursor="pointer" _hover={{ bg: 'gray.100' }} display='inline-block' p={4} marginX={2} color='black'> 보상 </Box>
        <Box role="button" cursor="pointer" _hover={{ bg: 'gray.100' }} display='inline-block' p={4} marginX={2} color='black'> 내 도전 </Box>
        <Box role="button" cursor="pointer" _hover={{ bg: 'gray.100' }} display='inline-block' p={4} marginX={2} color='black'> 공지사항 </Box>
        <Box role="button" cursor="pointer" _hover={{ bg: 'gray.100' }} display='inline-block' p={4} marginX={2} color='black'> 회원가입 </Box>
        <Box role="button" cursor="pointer" _hover={{ bg: 'gray.100' }} display='inline-block' p={4} marginX={2} color='black'> 로그인 </Box>
      </Box>
      
      {/*화면 좌 우 설정*/}
      <Box>
      <Flex direction="row" p="4" width="100%" mt="100px">
        <Box flex="3" p="4" bg="white" borderRadius="md" boxShadow="md">
          <Text fontSize="2xl" fontWeight="bold" mb="4">자유게시판</Text>
          <Box p="4" bg="gray.50" borderRadius="md" mb="4">
            {/* 게시글 상단 */}
            <HStack mb="2">
              <Text fontWeight="bold">익명</Text>
              <Text fontSize="sm" color="gray.500">01/01 12:12</Text>
            </HStack>
            <Text id="Title" fontSize="xl" fontWeight="bold" mb="2">이곳에 제목 삽입</Text>
            <Text id="Body" mb="4">이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입 이곳에 본문 삽입</Text>

            <HStack spacing="4" mb="4">
              <Button variant="ghost" size="sm">좋아요 0</Button>
              <Button variant="ghost" size="sm">공감</Button>
              <Button variant="ghost" size="sm">퍼가기</Button>
            </HStack>

            <Box height="1px" bg="gray.200" mb="4" />

            {/* 댓글 */}
            <VStack align="start" spacing="4" mt="4">
              <Box>
                <HStack>
                  <Text fontWeight="bold">익명1</Text>
                  <Text fontSize="sm" color="gray.500">01/01 12:12</Text>
                </HStack>
                <Text ml="8">댓글 1</Text>
              </Box>
              <Box>
                <HStack>
                  <Text fontWeight="bold">익명2</Text>
                  <Text fontSize="sm" color="gray.500">01/01 12:12</Text>
                </HStack>
                <Text ml="8">댓글 2</Text>
              </Box>
              <Box>
                <HStack>
                  <Text fontWeight="bold">익명3</Text>
                  <Text fontSize="sm" color="gray.500">01/01 12:12</Text>
                </HStack>
                <Text ml="8">댓글 3</Text>
              </Box>
            </VStack>

            {/* 댓글 입력 */}
            <HStack mt="4">
              <Input placeholder="댓글을 입력하세요." size="sm" />
              <Button size="sm">댓글 달기</Button>
            </HStack>
          </Box>
        </Box>

        {/* 오른쪽 화면 */}

        {/* 인기글 */}
        <Box flex="1" p="4" bg="white" borderRadius="md" boxShadow="md" ml="4">
          <Text fontSize="xl" fontWeight="bold" mb="4">실시간 인기글</Text>
          <VStack align="stretch" spacing="2">
            <Text>인기글 1</Text>
            <Text>인기글 2 </Text>
          </VStack>

          {/* 핫 게시물 */}
          <Box height="1px" bg="gray.200" my="4" />
          <Text fontSize="xl" fontWeight="bold" mb="4">HOT 게시물</Text>
          <VStack align="stretch" spacing="2">
            <Text>핫 게시물 1 </Text>
            <Text>핫 게시물 2</Text>
          </VStack>

          {/* 인기글 */}
          <Box height="1px" bg="gray.200" my="4" />

          <Text fontSize="xl" fontWeight="bold" mb="4">BEST 게시물</Text>
          <VStack align="stretch" spacing="2">
            <Text>베스트 게시물 1</Text>
            <Text>베스트 게시물 2</Text>
          </VStack>
        </Box>
      </Flex>
      </Box>
    </Flex>
  </div>
}

export default CM_DetailPage
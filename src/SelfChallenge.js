import React from 'react';
import { Box, VStack, HStack, Flex, Text, Image, Progress, Button } from '@chakra-ui/react';
import { ProgressBar, ProgressLabel, ProgressRoot, ProgressValueText } from "./components/ui/progress"
import { HamburgerIcon } from '@chakra-ui/icons';


function SelfChallenge() {
  return <div>
    <Flex direction="column" align="center" justify="center" p="8">
      {/*최상단 네비게이션 메뉴 */}
      <Box as="nav" w={'100%'} p={6} color='black' borderBottomWidth='2px' borderColor='black' whiteSpace='nowrap'>
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
      
      {/*챌린지 화면*/}
      <Flex direction="row" align="center" mx="8" mt="4" width="100%">
      <Flex direction="column" align="center" flex="1" mx="8">
      <Text fontSize="2xl" fontWeight="bold" mb="4"> RANDOM CHALLENGE: STUDY </Text>  {/*카테고리 이름 가져와서 Random Challenge 뒤에 이어나가기 */}

        {/*챌린지 화면 외각 사각형*/}
        <Box id="B_display" bg="gray" p={10} width="800px" height="600px" display="flex" justifyContent="center" borderRadius="lg" >
          <VStack> {/*챌린지 전체 세로 배치용*/}

          {/*상단부 Display*/}
          <Text Id="Point" fontWeight="bold">50포인트</Text>
          <Box id="S_display" bg='white' width="500px" display="flex" flexDirection="column" alignItems="center" borderRadius="lg" p={4}>
            <VStack> {/*챌린지 이름, 아이콘 세로 배치용*/}
            <Text id="Current_C" fontSize="xl" fontWeight="bold" mt={6}>독서실에서 2시간 공부하기</Text>
            <Image src="/icon-studying-4344987.png" alt="Icon_Study" boxSize="150px" mt={1} />
            </VStack>
          </Box>

          {/*중단부 Display*/}
          <Box display="flex" flexDirection="row" alignItems="center">
              {/*난이도박스*/}
              <Box bg='white' display="flex" width="300px" flexDirection="row" alignItems="center" justifyContent="center" borderRadius="40px" mt="3" p={4}>
                <Text>난이도: Hard</Text>
                <Image src="/icon-star.png" alt="Icon_Star" boxSize="30px" ml="4" />
                <Image src="/icon-star.png" alt="Icon_Star" boxSize="30px" ml="2" />
                <Image src="/icon-star.png" alt="Icon_Star" boxSize="30px" ml="2" />
              </Box>
              {/*리셋버튼*/}
              <Box role="button" cursor="pointer" bg='white' display="flex" alignItems="center" justifyContent="center" borderRadius="50%" width="50px" height="50px" ml="5" mt="3" p={2}>
                <Image src="/icon-rewind.png" alt="Icon_Rewid" boxSize="30px" />
              </Box>
              {/*완료버튼*/}
              <Box role="button" cursor="pointer" bg='white' display="flex" width="150px" flexDirection="row" alignItems="center" justifyContent="center" borderRadius="40px" ml="5" mt="3" p={4}>
                <Text fontSize="xl">DONE</Text>
              </Box>
          </Box>

          {/*하단부 Display*/}
          <Box alignItems="center" justifyContent="center">
            <ProgressRoot defaultValue={40} maxW="240px" striped>
              <HStack gap="5">
                <ProgressLabel>Today's Challenge</ProgressLabel>
                <ProgressBar />
                <ProgressValueText>40%</ProgressValueText>
              </HStack>
            </ProgressRoot>
          </Box>
          </VStack>
        </Box>
        </Flex>
        {/*Other Categories*/}
        <Box id="Other" borderLeftWidth='2px' borderColor='black' pl={4}>
          <VStack spacing={3}>
          <Text fontSize="xl" fontWeight="bold" >Other</Text>
          <Text fontSize="xl" fontWeight="bold" >Categories</Text>
            {['Daily', 'Social', 'Money', 'Health', 'Mental', 'Develop', 'Volunteer', 'Challenge'].map(label => (
          <Button key={label} variant="ghost" size="lg" width="100%" _hover={{ bg: 'gray.100' }}>
            <Image src="/icon-star.png" alt="icon" boxSize="20px" />
            {label}
          </Button>
        ))}
      </VStack>
    </Box>
      </Flex>
    </Flex>
  </div>
}

export default SelfChallenge
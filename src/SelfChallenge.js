import React from 'react';
import { Box, VStack, HStack, Flex, Text, Image, Button } from '@chakra-ui/react';
import RewindIcon from './asset/icon-rewind.png';
import StarIcon from './asset/icon-star.png';
import ExerciseIcon from './asset/icon-exercise.png';
import StudyIcon from './asset/icon-study.png';
import Navbar from './Navbar'
import Challenge from './Challenge'
import { useLocation, useNavigate } from 'react-router-dom';



function SelfChallenge() {
  const progress = 40;
  const location = useLocation();
  const challenge = location.state || {
    content: "Default Challenge Content",
    category: "Category",
    difficulty: "Easy",
    points: 0,
  };

  const navigate = useNavigate();

  const handleGenerateChallenge = () => {
    const randomChallenge = Challenge[Math.floor(Math.random() * Challenge.length)];
    navigate('/SelfChallenge', { state: randomChallenge });
  };

  const handleCreateChallenge = () => {
    navigate('/MakeChallenge');
  };


  return <div 
    style={{
      padding: "0px 180px",
      background: "linear-gradient(rgba(198,234,130,0.3) 50%, white 50%)",
      height: "150vh"
    }}>
    <Flex direction="column" align="center" justify="center" p="8">
      {/*최상단 네비게이션 메뉴 */}
      <Navbar />
      
      {/*챌린지 화면*/}
      <Flex direction="row" align="center" mx="8" mt="4" width="100%">
      <Flex direction="column" align="center" flex="1" mx="8">
      <Text fontSize="2xl" fontWeight="bold" mb="4"> RANDOM CHALLENGE: {challenge.category} </Text>  {/*카테고리 이름 가져와서 Random Challenge 뒤에 이어나가기 */}

        {/*챌린지 화면 외각 사각형*/}
        <Box id="B_display" bg="white" p={10} width="800px" height="600px" display="flex" justifyContent="center" borderRadius="lg" boxShadow="md">
          <VStack> {/*챌린지 전체 세로 배치용*/}

          {/*상단부 Display*/}
          <Text Id="Point" fontWeight="bold">{challenge.points}포인트</Text>
          <Box id="S_display" bg='gray.100' width="500px" display="flex" flexDirection="column" alignItems="center" borderRadius="lg" p={4}>
            <VStack> {/*챌린지 이름, 아이콘 세로 배치용*/}
            <Text id="Current_C" fontSize="xl" fontWeight="bold" mt={6}>{challenge.content}</Text>
            <Image src={challenge.icon} alt="Icon_Study" boxSize="150px" mt={1} />
            </VStack>
          </Box>

          {/*중단부 Display*/}
          <Box display="flex" flexDirection="row" alignItems="center">
              {/*난이도박스*/}
              <Box bg='gray.100' display="flex" width="300px" flexDirection="row" alignItems="center" justifyContent="center" borderRadius="40px" mt="3" p={4}>
                <Text>난이도: {challenge.difficulty}</Text>
                {Array.from({ length: challenge.difficulty === 'Easy' ? 1 : challenge.difficulty === 'Medium' ? 2 : 3 }).map((_, index) => (
                <Image key={index} src={StarIcon} alt="Icon_Star" boxSize="30px" ml={index === 0 ? 0 : 2} />
                ))}
              </Box>
              {/*리셋버튼, 횟수를 정해두는게 좋을듯*/}
              <Box role="button" cursor="pointer" bg='gray.100' display="flex" alignItems="center" justifyContent="center" borderRadius="50%" width="50px" height="50px" ml="5" mt="3" p={2} onClick={handleGenerateChallenge}>
                <Image src={RewindIcon} alt="Icon_Rewid" boxSize="30px" />
              </Box>
              {/*완료버튼*/}
              <Box role="button" cursor="pointer" bg='gray.100' display="flex" width="150px" flexDirection="row" alignItems="center" justifyContent="center" borderRadius="40px" ml="5" mt="3" p={4}>
                <Text fontSize="xl">DONE</Text>
              </Box>
          </Box>

          {/*하단부 Display*/}
          <Box alignItems="center" justifyContent="center" textAlign="center">
            <HStack spacing={5}>
              <Text fontSize="lg">Today's Challenge</Text>
              <Box w="200px" h="20px" bg="gray.200" borderRadius="md" overflow="hidden">
                <Box
                  w={`${progress}%`}
                  h="100%"
                  bg="teal.400"
                  borderRadius="md"
                  transition="width 0.3s ease-in-out"
                />
                </Box>
              <Text fontSize="lg">{progress}%</Text>
            </HStack>
          </Box>
          <Box role="button" cursor="pointer" bg='gray.100' display="flex" width="400px" flexDirection="row" alignItems="center" justifyContent="center" borderRadius="40px" ml="5" mt="3" p={4} onClick={handleCreateChallenge}>
                <Text fontSize="xl">챌린지 만들러 가기</Text>
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
            <Image src={StarIcon} alt="icon" boxSize="20px" />
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
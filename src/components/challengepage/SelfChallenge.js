import { React, useState, useEffect, useRef } from 'react';
import { Box, VStack, HStack, Flex, Text, Image, Button } from '@chakra-ui/react';
import RewindIcon from '../../asset/icon-rewind.png';
import StarIcon from '../../asset/icon-star.png';
import ExerciseIcon from '../../asset/icon-exercise.png';
import ShareIcon from '../../asset/icon-share.png';
import StudyIcon from '../../asset/icon-study.png';
import Challenge from './Challenge'
import { useLocation, useNavigate } from 'react-router-dom';
import getChallengeById from './getChallenge';



function SelfChallenge() {

  const fileInputRef = useRef(null);

  const authToken = sessionStorage.getItem('authToken');
  const userData = JSON.parse(localStorage.getItem('totalUserData'));
  const userIndex = userData.findIndex(user => String(user.id) === String(authToken));
  const currentUser = userData[userIndex];
  const challengeIndex = currentUser.currentChallengeNum;

  const navigate = useNavigate();

  const handleFileUploadClick = () => {
    alert("챌린지 내역을 업로드해주세요");
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!authToken) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (file) {
      alert(`파일 업로드 성공: ${file.name}`);

      if (userIndex === -1) {
        alert("사용자 데이터를 찾을 수 없습니다.");
        return;
      }

      if (!currentUser.challengeSuccessList.includes(challenge.id)) {
        currentUser.challengeSuccessList.push(challenge.id);
        currentUser.point += challenge.points;
        currentUser.challengeListNum += 1;
        alert(`
          - 새로운 챌린지를 성공하셨습니다.
          - 현재 포인트, ${currentUser.point}`);
      } else {
        currentUser.point += challenge.points;
        currentUser.challengeListNum += 1;
        alert(`
          - 챌린지를 성공하셨습니다.
          - 현재 포인트, ${currentUser.point}`);
      }
      userData[userIndex] = currentUser;
      localStorage.setItem('totalUserData', JSON.stringify(userData));
      navigate('/');
    } else
    alert("파일 업로드 실패");
    
  };

  const challenge = getChallengeById(challengeIndex)  || {
    content: "Default Challenge Content",
    category: "Default Category",
    difficulty: "Easy",
    icon: StudyIcon,
    points: 0,
  };

  const handleGenerateChallenge = () => {
    const authToken = sessionStorage.getItem('authToken');
    if (!authToken) { //로그인 확인
      alert("로그인이 필요합니다.");
      return;
    }
      const randomChallengeIndex = Math.floor(Math.random() * Challenge.length);
      const randomChallenge = challenge[randomChallengeIndex];
      const userData = JSON.parse(localStorage.getItem('totalUserData'));
      const userIndex = userData.findIndex(user => String(user.id) === String(authToken));
    if (userIndex === -1) {
      alert("사용자 데이터를 찾을 수 없습니다.");
      return;
    }
    const currentUser = userData[userIndex];
    currentUser.currentChallengeNum = randomChallengeIndex;
    currentUser.currentChallenge = [randomChallenge];

    userData[userIndex] = currentUser;
    localStorage.setItem('totalUserData', JSON.stringify(userData));
    navigate('/SelfChallenge');
  };

  const handleCreateChallenge = () => {
    navigate('/MakeChallenge');
  };

  const handleShare = () => {
    navigate('/CM_DetailPage');
  };

  return <div 
    style={{
      padding: "0px 180px",
      background: "linear-gradient(rgba(198, 234, 130, 0.7) 50%, white 50%)",
      height: "150vh"
    }}>
    <Flex direction="column" align="center" justify="center" p="8">
      
      {/*챌린지 화면*/}
      <Flex direction="row" align="center" mx="8" mt="4" width="100%">
      <Flex direction="column" align="center" flex="1" mx="8">
      <Text fontSize="2xl" fontWeight="bold" mb="4"> RANDOM CHALLENGE: {challenge.category} </Text>  {/*카테고리 이름 가져와서 Random Challenge 뒤에 이어나가기 */}

        {/*챌린지 화면 외각 사각형*/}
        <Box id="B_display" bg="white" p={10} width="800px" height="600px" display="flex" justifyContent="center" borderRadius="lg" boxShadow="md" position="relative">
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
              {/*리셋버튼*/}
              <Box role="button" cursor="pointer" bg='gray.100' display="flex" alignItems="center" justifyContent="center" borderRadius="50%" width="50px" height="50px" ml="5" mt="3" p={2} onClick={handleGenerateChallenge}>
                <Image src={RewindIcon} alt="Icon_Rewid" boxSize="30px" />
              </Box>
              {/*완료버튼*/}
              <Box role="button" cursor="pointer" bg='gray.100' display="flex" width="150px" flexDirection="row" alignItems="center" justifyContent="center" borderRadius="40px" ml="5" mt="3" p={4} onClick={handleFileUploadClick}>
                <Text fontSize="xl">DONE</Text>
              </Box>
              <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange}/>
          </Box>

          {/*하단부 Display*/}
          <Box role="button" cursor="pointer" bg='gray.100' display="flex" width="400px" flexDirection="row" alignItems="center" justifyContent="center" borderRadius="40px" ml="5" mt="3" p={4} onClick={handleCreateChallenge}>
                <Text fontSize="xl">챌린지 만들러 가기</Text>
              </Box>
          </VStack>
        </Box>
        </Flex>
      </Flex>
    </Flex>
  </div>
}

export default SelfChallenge
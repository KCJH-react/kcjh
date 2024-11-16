import React from 'react';
import { Box, VStack, HStack, Flex, Text, Image} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';


function Information() {
  return <div 
    style={{
      padding: "0px 180px",
      background: "linear-gradient(rgba(198,234,130,0.3) 50%, white 50%)",
      height: "150vh"
    }}>
    <Flex direction="column" align="center" justify="center" p="8">
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

      {/*외부 배경*/}
      <Box p="8" borderRadius="md">

        {/*계정 정보 시작*/}
        <Box borderBottom="1px solid" bordercolor="gray">
        <Text fontSize="2xl" fontWeight="bold" mt="8" mb="4"> 계정 정보 </Text>
        {/*시작 날짜_StartDate*/}
        <Box role="button" cursor="pointer" bg='gray.50' display="flex" width="400px" flexDirection="row" alignItems="center" borderTopRadius="40px" ml="5" mt="3" p={4}>
            <Text fontSize="xl" flex="1">챌린지를 시작한 날짜</Text>
            <Text id="StartDate" textAlign="right">2024-03-25</Text>
        </Box>

        {/*이메일_Email -> 클릭시 이메일 수정가능*/}
        <Box role="button" cursor="pointer" bg='gray.50' display="flex" width="400px" flexDirection="row" alignItems="center" ml="5" mt="1" p={4}>
            <Text fontSize="xl" flex="1">이메일 수정하기</Text>
            <Text id="Email" textAlign="right">asdf1234@naver.com</Text>
        </Box>

        {/*닉네임_Nickname -> 클릭시 닉네임 수정가능*/}
        <Box role="button" cursor="pointer" bg='gray.50' display="flex" width="400px" flexDirection="row" alignItems="center" ml="5" mt="1" p={4}>
            <Text fontSize="xl" flex="1">닉네임 수정하기</Text>
            <Text id="Nickname" textAlign="right">KCJH</Text>
        </Box>

        {/*비밀번호_Pw -> 클릭시 인증 후 비밀번호 변경가능*/}
        <Box role="button" cursor="pointer" bg='gray.50' display="flex" width="400px" flexDirection="row" alignItems="center" justifyContent="center" borderBottomRadius="40px" ml="5" mt="1" mb="10" p={4}>
            <Text fontSize="xl">비밀번호 변경하기</Text>
        </Box>
        {/*계정 정보 끝*/}
      </Box>

        {/*챌린지 관련*/}
        <Box borderBottom="1px solid" bordercolor="gray">
        <Text fontSize="2xl" fontWeight="bold" mt="8" mb="4"> 챌린지 정보 </Text>
        {/*내 포인트_Point -> 클릭시 포인트 사용 로그창*/}
        <Box role="button" cursor="pointer" bg='gray.50' display="flex" width="400px" flexDirection="row" alignItems="center" borderTopRadius="40px" ml="5" mt="3" p={4}>
            <Text fontSize="xl" flex="1">내 포인트</Text>
            <Text id="Point" textAlign="right">150포인트</Text>
        </Box>

        {/*만든 개인챌린지_MakeChall*/}
        <Box role="button" cursor="pointer" bg='gray.50' display="flex" width="400px" flexDirection="row" alignItems="center" ml="5" mt="1" p={4}>
            <Text fontSize="xl" flex="1">내 챌린지</Text>
            <Text id="MakeChall" textAlign="right">5개</Text>
        </Box>

        {/*성공한 챌린지_SuccessChall*/}
        <Box role="button" cursor="pointer" bg='gray.50' display="flex" width="400px" flexDirection="row" alignItems="center" ml="5" mt="1" p={4}>
            <Text fontSize="xl" flex="1">성공한 챌린지</Text>
            <Text id="SuccessChall" textAlign="right">5개</Text>
        </Box>

        {/*챌린지 비율_Challrate*/}
        <Box role="button" cursor="pointer" bg='gray.50' display="flex" width="400px" flexDirection="row" alignItems="center" borderBottomRadius="40px" ml="5" mt="1" p={4}>
            <Text fontSize="xl" flex="1">챌린지 성공률</Text>
            <Text id="Challrate" textAlign="right">84%</Text>
        </Box>
        </Box>
        </Box>
      </Flex>
  </div>
}
export default Information
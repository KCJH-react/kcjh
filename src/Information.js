import React, { useState } from "react";
import { Box, VStack, HStack, Flex, Text, Image, Button} from '@chakra-ui/react';
import Navbar from './Navbar';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {Table, Thead, Tbody, Tfoot,Tr, Th, Td, TableCaption, TableContainer,} from '@chakra-ui/react'
import {useEmail, useName, usePoint, useStartDate, 
  usePassword, useChallengeSuccessList, usePersonalChallengeList, useChallengeList} from './redux/userData';

function Information() {
  
  const user = useName();
  const userpoint = usePoint();

  return <div 
    style={{
      padding: "0px 180px",
      background: "linear-gradient(rgba(198,234,130,0.6) 50%, white 50%)",
      height: "150vh"
    }}>
    <Flex direction="column"p="8">

    <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab color="black"><Text fontSize="1xl" fontWeight="bold"> 계정 정보 </Text></Tab>
    <Tab color="black"><Text fontSize="1xl" fontWeight="bold"> 친구 추가 </Text></Tab>
  </TabList>
  <TabPanels position="relative" top="50px">
    <TabPanel >
      <Box bordercolor="gray" bg="white" borderRadius="3px" paddingBottom="40px" >
        <MYTab/>
      </Box>
      <Box bordercolor="gray" bg="white" paddingBottom="10px">
        <ChallengeTab/>
      </Box>
    </TabPanel>
    <TabPanel>
      <FriendAdder/>
      <Box bordercolor="gray" bg="white" marginTop="140px">
        <FriendTab/>
      </Box>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Flex>
  </div>
}

const FriendAdder = () => {
  const [friendName, setFriendName] = useState(""); // 입력값 상태
  const [friendList, setFriendList] = useState([]); // 친구 목록 상태

  const handleAddFriend = () => {
    if (friendName.trim() !== "") {
      setFriendList([...friendList, friendName]); // 친구 추가
      setFriendName(""); // 입력값 초기화
    }
  };

  return (
    <div style={{ position:"relative", top:"60px", maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={friendName}
          placeholder="친구 이름 입력"
          onChange={(e) => setFriendName(e.target.value)}
          style={{
            padding: "8px",
            width: "70%",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={handleAddFriend}
          style={{
            padding: "8px 12px",
            marginLeft: "8px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          추가
        </button>
      </div>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {friendList.map((friend, index) => (
          <li
            key={index}
            style={{
              padding: "8px",
              marginBottom: "6px",
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            {friend}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MYTab = () =>{

  const maskedPassword = "*".repeat(usePassword().length);
  
  return(
    <TableContainer>
    <Table size='sm'>
      <Thead bg="rgba(0,0,0,0.2)">
        <Tr >
          <Th>챌린지 시작일</Th>
          <Th>이메일</Th>
          <Th>닉네임</Th>
          <Th>비밀번호</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
           <Td>{useStartDate()}</Td>
          <Td>{useEmail()}</Td>
           <Td>{useName()}</Td>
           <Td>{maskedPassword}</Td>
        </Tr>
      </Tbody>
      <br/>
      <br/>
      <Tbody>
        <Tr>
          <Th>입력하기</Th>
          <Th><input placeholder="이메일을 입력해주세요."/></Th>
          <Th><input placeholder="닉네임을 입력해주세요."/></Th>
          <Th><input placeholder="비밀번호를 입력해주세요."/></Th>
        </Tr>
      </Tbody>
      <Tbody>
        <Tr>
          <Th>이메일 수정하기</Th>
          <Th><button>이메일 수정하기</button></Th>
          <Th><button>닉네임 수정하기</button></Th>
          <Th><button>비밀번호 변경하기</button></Th>
        </Tr>
      </Tbody>
    </Table>
    </TableContainer>
  )
}

const ChallengeTab = () =>{

  const success = useChallengeSuccessList().length;
  const total = Math.round(Number(useChallengeList().length) / Number(success));

  return(
    <TableContainer>
    <Table size='sm'>
      <Thead bg="rgba(0,0,0,0.2)">
        <Tr >
          <Th>현재 포인트</Th>
          <Th>내 챌린지</Th>
          <Th>성공한 챌린지</Th>
          <Th>챌린지 성공률</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{usePoint()} Point</Td>
          <Td>{useChallengeSuccessList().length}개</Td>
          <Td>{success}개</Td>
          <Td>{success === 0? 0 : total}%</Td>
        </Tr>
      </Tbody>
      <Tfoot>
      </Tfoot>
    </Table>
   </TableContainer>
  )
}

const FriendTab = () =>{
  return(
    <TableContainer>
    <Table size='sm'>
      <Thead bg="rgba(0,0,0,0.2)">
        <Tr >
          <Th>요청 대기 목록</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
        <Td><Flex justifyContent="space-between">준익<button>친추 취소</button></Flex></Td>
        </Tr>
      </Tbody>
      <Tbody>
        <Tr>
        <Td><Flex justifyContent="space-between">준익<button>친추 취소</button></Flex></Td>
        </Tr>
      </Tbody>
      <Tbody>
        <Tr>
        <Td><Flex justifyContent="space-between">준익<button>친추 취소</button></Flex></Td>
        </Tr>
      </Tbody>
    </Table>
   </TableContainer>
  )
}

export default Information
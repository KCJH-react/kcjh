import React, { useState } from "react";
import { Box, VStack, HStack, Flex, Text, Image, Button} from '@chakra-ui/react';
import Navbar from './Navbar';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {Table, Thead, Tbody, Tfoot,Tr, Th, Td, TableCaption, TableContainer,} from '@chakra-ui/react'
import {useName, usePoint} from './redux/userData';

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
        {/* marginY="30px" */}
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
           <Td>2024-03-25</Td>
          <Td>asdf1234@naver.com</Td>
           <Td>KCJH</Td>
           <Td>*********</Td>
        </Tr>
      </Tbody>
      <Tbody>
      <Tr>
          <Th>사용자 정보 변경</Th>
          <Th>이메일 수정하기</Th>
          <Th>닉네임 수정하기</Th>
          <Th>비밀번호 변경하기</Th>
        </Tr>
      </Tbody>
    </Table>
    </TableContainer>
  )
}

const ChallengeTab = () =>{
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
          <Td>150포인트</Td>
          <Td>5개</Td>
          <Td>5개</Td>
          <Td>84%</Td>
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
import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import {
  useId,
  useEmail,
  useName,
  usePoint,
  useStartDate,
  usePassword,
  useSetUserName,
  useSetUserPw,
  useChallengeSuccessList,
  usePersonalChallengeList,
  useChallengeListNum,
  useSetUserEmail,
  useFriendList,
  useExchange,
} from "../../redux/userData";
import { useDispatch } from "react-redux";
import FriendAdder from "./addFriend";

function Information() {
  return (
    <div
      style={{
        padding: "0px 180px",
        background: "linear-gradient(rgba(198,234,130,0.7) 50%, white 50%)",
        height: "150vh",
      }}
    >
      <Flex direction="column" p="8">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab color="black">
              <Text fontSize="1xl" fontWeight="bold">
                {" "}
                계정 정보{" "}
              </Text>
            </Tab>
            <Tab color="black">
              <Text fontSize="1xl" fontWeight="bold">
                {" "}
                친구 추가{" "}
              </Text>
            </Tab>
          </TabList>
          <TabPanels position="relative" top="50px">
            <TabPanel>
              <Box bordercolor="gray" bg="white" borderRadius="3px" paddingBottom="10px">
                <MYTab />
              </Box>
              <Box bordercolor="gray" bg="white" paddingBottom="10px">
                <ChallengeTab />
              </Box>
              <Box
                bordercolor="gray"
                bg="white"
                paddingBottom="10px"
                borderRadius="3px"
                shadow="0px 3px 10px 3px rgba(0, 0, 255, .2)"
              >
                <FriendTab />
              </Box>
            </TabPanel>
            <TabPanel>
              <FriendAdder />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </div>
  );
}

const MYTab = () => {
  const maskedPassword = "*".repeat(usePassword().length);

  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  //이메일, 이름, 비밀번호 값 임시 저장. 이후 handleEmailButton등의 메소드로 검사과정을 거치고 실제로 변경됨.

  const userId = useId();
  const dispatch = useDispatch();
  const setEmail = useSetUserEmail(dispatch);
  const setName = useSetUserName(dispatch);
  const setPw = useSetUserPw(dispatch);

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value); // input 값을 상태에 저장
  };
  //이메일 입력 감지
  const handleNameChange = (e) => {
    setNameValue(e.target.value); // input 값을 상태에 저장
  };
  //이메일 입력 감지
  const handlePwChange = (e) => {
    setPwValue(e.target.value); // input 값을 상태에 저장
  };
  //이메일 입력 감지

  const handleEmailButton = (e) => {
    if (!emailValue.includes("@")) {
      alert("올바른 이메일 주소가 아닙니다.");
      return;
    }
    setEmail(emailValue); // input 값을 상태에 저장
    const savedUserData = localStorage.getItem("totalUserData");
    const parsedUserData = JSON.parse(savedUserData);
    const newData = parsedUserData.map((u) => {
      if (u.id === Number(userId)) {
        u.email = emailValue;
      }
      return u; // 수정된 u 객체를 반환해야 map() 결과가 유효합니다.
    });
    localStorage.setItem("totalUserData", JSON.stringify(newData)); // localStorage에 저장
  };
  //이메일 형식 검사 + 이메일 변경
  const handleNameButton = (e) => {
    if (pwValue.length <= 0 || pwValue.length > 10) {
      alert("올바른 아이디가 아닙니다. 조건: 1글자 이상 10글자 이하");
      return;
    }
    setName(nameValue); // input 값을 상태에 저장
    const savedUserData = localStorage.getItem("totalUserData");
    const parsedUserData = JSON.parse(savedUserData);
    const newData = parsedUserData.map((u) => {
      if (u.id === Number(userId)) {
        u.name = nameValue;
      }
      return u; // 수정된 u 객체를 반환해야 map() 결과가 유효합니다.
    });
    localStorage.setItem("totalUserData", JSON.stringify(newData)); // localStorage에 저장
  };
  //이름 형식 검사 + 이름 변경
  const handlePwButton = (e) => {
    if (pwValue.length <= 0 || pwValue.length > 10 || !/[^a-zA-Z0-9]/.test(pwValue)) {
      alert("올바른 패스워드가 아닙니다. 조건: 1글자 이상 10글자 이하, 특수문자 1개 무조건 포함");
      return;
    }
    setPw(pwValue); // input 값을 상태에 저장
    const savedUserData = localStorage.getItem("totalUserData");
    const parsedUserData = JSON.parse(savedUserData);
    const newData = parsedUserData.map((u) => {
      if (u.id === Number(userId)) {
        u.password = pwValue;
      }
      return u; // 수정된 u 객체를 반환해야 map() 결과가 유효합니다.
    });
    localStorage.setItem("totalUserData", JSON.stringify(newData)); // localStorage에 저장
  };
  //비밀번호 형식 검사 + 비밀번호 변경

  return (
    <TableContainer>
      <Table size="sm">
        <Thead bg="rgba(0,0,0,0.2)">
          <Tr>
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
        <br />
        <br />
        <Tbody>
          <Tr>
            <Th>입력하기</Th>
            <Th>
              <input
                value={emailValue}
                onChange={handleEmailChange}
                placeholder="이메일을 입력해주세요."
              />
            </Th>
            <Th>
              <input
                value={nameValue}
                onChange={handleNameChange}
                placeholder="닉네임을 입력해주세요."
              />
            </Th>
            <Th>
              <input
                value={pwValue}
                onChange={handlePwChange}
                placeholder="비밀번호를 입력해주세요."
              />
            </Th>
          </Tr>
        </Tbody>
        <Tbody>
          <Tr>
            <Th>수정목록</Th>
            <Th>
              <button onClick={handleEmailButton}>이메일 수정하기</button>
            </Th>
            <Th>
              <button onClick={handleNameButton}>닉네임 수정하기</button>
            </Th>
            <Th>
              <button onClick={handlePwButton}>비밀번호 변경하기</button>
            </Th>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const ChallengeTab = () => {
  const exchange = useExchange();
  const success = useChallengeSuccessList().length;
  const total = Math.round(Number(useChallengeListNum()) / Number(success));

  return (
    <TableContainer>
      <Table size="sm">
        <Thead bg="rgba(0,0,0,0.2)">
          <Tr>
            <Th>현재 포인트</Th>
            <Th>내 챌린지</Th>
            <Th>성공한 챌린지</Th>
            <Th>챌린지 성공률</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{usePoint()} Point</Td>
            <Td>{usePersonalChallengeList().length}개</Td>
            <Td>{success}개</Td>
            <Td>{success === 0 ? 0 : total}%</Td>
          </Tr>
        </Tbody>
        <Thead bg="rgba(0,0,0,0.2)">
          <Tr>
            <Th>item 교환번호</Th>
            <Th></Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        {exchange.length !== 0 ? (
          exchange.map((e, i) => {
            return (
              <Tbody>
                <Tr>
                  <Td>{e}</Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            );
          })
        ) : (
          <Tbody>
            <Tr>
              <Td>교환환 아이템 정보가 없습니다.</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        )}
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
};

const FriendTab = () => {
  const id = useId();
  const name = useName();
  const challengeSuccess = useChallengeSuccessList().length;
  const dispatch = useDispatch();
  const friendList = useFriendList();
  console.log(friendList);
  const [totalRank, setTotalRank] = useState([]);
  useEffect(() => {
    const rank = [...friendList, { id, name, challengeSuccess }].sort(
      (a, b) => b.challengeSuccess - a.challengeSuccess
    );
    setTotalRank(rank);
  }, [friendList]);
  console.log(totalRank);
  return (
    <TableContainer>
      <Table size="sm">
        <Thead bg="rgba(0,0,0,0.2)">
          <Tr>
            <Th>친구 목록</Th>
            <Th> </Th>
            <Th>친구 랭킹</Th>
            <Th></Th>
          </Tr>
        </Thead>
        {
          friendList.length > 0 ? (
            totalRank.map((f, i) => {
              console.log(f);
              return (
                <Tbody>
                  <Tr>
                    <Td>{f.name}</Td>
                    <Td> </Td>
                    <Td>{i + 1} 등</Td>
                    <Td></Td>
                  </Tr>
                </Tbody>
              );
            })
          ) : (
            <Tbody>
              <Tr>
                <Td>친구 정보가 없습니다.</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            </Tbody>
          )
          //예외처리: 친구가 한명도 없을 경우.
        }
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
};

export default Information;

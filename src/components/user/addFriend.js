import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import {
  useId,
  useName,
  useChallengeListNum,
  useAddRequestList,
  useRemoveRequestList,
  useRequestList,
  useResponseList,
  useAddFriendList,
} from "../../redux/userData";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { useTotalMember } from "../../redux/memberData";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";
import store from "../../redux/store";
import styled from "styled-components";

const StyledInput = styled.input`
  position: relative;
  top: -55px;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 0;
  list-style: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none; /* input focus 시 기본 outline 제거 */
  }
`;

const StyledButton = styled.button`
  position: relative;
  top: -55px;
  width: 70px;
  border: none;
  margin-left: 3px;
  background-color: #4caf50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background-color: #45a049; /* hover 시 약간 더 어두운 녹색 */
  }

  &:active {
    background-color: #3e8e41; /* 클릭 시 더 어두운 녹색 */
  }
`;

const FriendAdder = () => {
  const [friendName, setFriendName] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [openState, setOpenState] = useState(true);
  const dispatch = useDispatch();
  const addRequestList = useAddRequestList(dispatch);

  const userId = useId();
  const username = useName();
  const userchallengeSuccess = useChallengeListNum();
  const savedUserData = localStorage.getItem("totalUserData");
  const parsedUserData = JSON.parse(savedUserData);
  const [totalMember, setTotalMember] = useState(parsedUserData);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setFriendName(value);
    debouncedFilter(value);
  };
  useEffect(() => {
    if (friendName !== "" && openState === true) {
      setIsPopoverOpen(true);
      // 입력값에 따라 필터링
      const filtered = totalMember.filter((member) => member.name.includes(friendName));
      setFilteredMembers(filtered);
    } else {
      //setIsPopoverOpen(false)
      // 빈 값인 경우 모든 멤버 보여주기
      return;
    }
  }, [filteredMembers, openState]); // friendName이 변경될 때마다 실행

  const handleOptionClick = () => {
    setFilteredMembers([]); // 자동 완성 목록 닫기
    setOpenState(false);
    setIsPopoverOpen(false);
  };

  const handleAddFriend = () => {
    const savedUserData = localStorage.getItem("totalUserData");
    const parsedUserData = JSON.parse(savedUserData);
    const existed = parsedUserData.filter((member) => friendName === member.name);
    //전체 유저 중에 포함되는지.
    if (existed.length === 0) {
      alert("존재하지 않는 유저입니다.");
      return;
    }
    const newData = [...parsedUserData.filter((u) => Number(u.id) === Number(userId))];
    const notFriendListExisted = newData[0].friendList.find((member) => friendName === member.name);
    const notResponseListExisted = newData[0].responseList.find(
      (member) => friendName === member.name
    );
    const notRequestListExisted = newData[0].requestList.find(
      (member) => friendName === member.name
    );

    if (
      notFriendListExisted === undefined &&
      notResponseListExisted === undefined &&
      notRequestListExisted === undefined
    ) {
      addRequestList(...existed);
      const savedUserData = localStorage.getItem("totalUserData");
      const parsedUserData = JSON.parse(savedUserData);
      const newData = parsedUserData.map((u) => {
        if (u.id === Number(userId)) {
          u.requestList.push(...existed);
        }
        return u; // 수정된 u 객체를 반환해야 map() 결과가 유효합니다.
      });
      const newData2 = newData.map((u) => {
        if (u.name === friendName) {
          u.responseList.push({ name: username, challengeSuccess: userchallengeSuccess });
        }
        return u; // 수정된 u 객체를 반환해야 map() 결과가 유효합니다.
      });
      localStorage.setItem("totalUserData", JSON.stringify(newData2)); // localStorage에 저장
    } else {
      alert("해당 유저는 이미 친구추가 상태입니다.");
    }
  };
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // 비동기적으로 호출되도록 debounce 처리
  const debouncedFilter = debounce((value) => {
    const filtered = totalMember.filter((member) => member.name.includes(value));
    setFilteredMembers(filtered);
  }, 500); // 300ms 후에 실행

  return (
    <div>
      <div
        style={{
          position: "relative",
          top: "60px",
          maxWidth: "400px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <Popover isOpen={isPopoverOpen} initialFocusRef={null} autoFocus={false}>
            <StyledInput
              type="text"
              value={friendName}
              placeholder="친구 이름 입력"
              onChange={handleInputChange}
              onFocus={() => setIsPopoverOpen(true)} // input이 focus될 때 Popover 열기
              onBlur={() => setIsPopoverOpen(false)} // input이 blur될 때 Popover 닫기
            />
            <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
              <PopoverHeader pt={4} fontWeight="bold" border="0">
                <Text>친구목록</Text>
              </PopoverHeader>
              <PopoverArrow bg="blue.800" />
              <PopoverCloseButton onClick={handleOptionClick} />
              <PopoverBody>
                {filteredMembers.map((m, i) => (
                  <div key={i}>{m.name}</div>
                ))}
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <StyledButton onClick={handleAddFriend}>추가</StyledButton>
        </div>
      </div>
      <Box bordercolor="gray" bg="white" marginTop="140px">
        <AddFriendTab />
      </Box>
      <Box bordercolor="gray" bg="white">
        <ResponseFriendTab />
      </Box>
    </div>
  );
};

const AddFriendTab = React.memo(() => {
  const dispatch = useDispatch();
  const requestList = useRequestList();
  const removeRequestList = useRemoveRequestList(dispatch);
  const userId = useId();

  const cancel = (r) => {
    removeRequestList(r.name);
    const savedUserData = localStorage.getItem("totalUserData");
    const parsedUserData = JSON.parse(savedUserData);
    const newData = parsedUserData.map((u) => {
      if (u.id === Number(userId)) {
        u.requestList = u.requestList.filter((request) => request.name !== r.name);
      }
      return u; // 수정된 u 객체를 반환해야 map() 결과가 유효합니다.
    });
    localStorage.setItem("totalUserData", JSON.stringify(newData)); // localStorage에 저장
  };

  return (
    <TableContainer>
      <Table size="sm">
        <Thead bg="rgba(0,0,0,0.2)">
          <Tr>
            <Th>요청 대기 목록</Th>
          </Tr>
        </Thead>
        {requestList.length > 0 &&
          requestList.map((r, i) => {
            return (
              <Tbody>
                <Tr>
                  <Td>
                    <Flex justifyContent="space-between">
                      {r.name}
                      <button
                        onClick={() => {
                          cancel(r);
                        }}
                      >
                        친추 취소
                      </button>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            );
          })}
      </Table>
    </TableContainer>
  );
});

const ResponseFriendTab = React.memo(() => {
  const dispatch = useDispatch();
  const responseList = useResponseList();
  const addFriendList = useAddFriendList(dispatch);
  const userId = useId();

  const accept = (r) => {
    addFriendList(r.name);
    const savedUserData = localStorage.getItem("totalUserData");
    const parsedUserData = JSON.parse(savedUserData);
    const newData = parsedUserData.map((u) => {
      if (u.id === Number(userId)) {
        u.responseList = u.responseList.filter((request) => request.name !== r.name);
      }
      return u;
    });
    const newData2 = parsedUserData.map((u) => {
      if (u.id === Number(userId)) {
        u.friendList.push({
          name: r.name,
          challengeSuccess: r.challengeSuccess,
        });
      }
      return u;
    });
    localStorage.setItem("totalUserData", JSON.stringify(newData2)); // localStorage에 저장
  };
  return (
    <TableContainer borderRadius="3px" shadow="0px 3px 10px 3px rgba(0, 0, 255, .2)">
      <Table size="sm">
        <Thead bg="rgba(0,0,0,0.2)">
          <Tr>
            <Th>나에게 친추한 유저</Th>
          </Tr>
        </Thead>
        {responseList.map((r, i) => {
          return (
            <Tbody>
              <Tr>
                <Td>
                  <Flex justifyContent="space-between">
                    {r.name}
                    <button
                      onClick={() => {
                        accept(r);
                      }}
                    >
                      친추 추가
                    </button>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
    </TableContainer>
  );
});

export default FriendAdder;

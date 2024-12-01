import 
React, 
{ 
  useState, 
  useEffect 
} from "react";
import { 
  Box, 
  VStack, 
  HStack, 
  Flex, 
  Text, 
  Image, 
  Button, 
  useDisclosure
} from '@chakra-ui/react';
import { 
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel 
} from '@chakra-ui/react'
import {
  Table, 
  Thead, 
  Tbody, 
  Tfoot,
  Tr, 
  Th, 
  Td, 
  TableCaption, 
  TableContainer
} from '@chakra-ui/react'
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
  useSetChallengeListNum, 
  useFriendList, 
  useAddRequestList, 
  useRemoveRequestList, 
  useRequestList, 
  useAddResponseList, 
  useRemoveResponseList, 
  useResponseList, 
  useAddFriendList
} from '../../redux/userData';
  import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'
import {useTotalMember} from '../../redux/memberData';
import { useDispatch } from 'react-redux';
import { debounce } from "lodash";

function Information() {

  return <div 
    style={{
      padding: "0px 180px",
      background: "linear-gradient(rgba(198,234,130,0.7) 50%, white 50%)",
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
      <Box bordercolor="gray" bg="white" borderRadius="3px" paddingBottom="10px" >
        <MYTab/>
      </Box>
      <Box bordercolor="gray" bg="white" paddingBottom="10px">
        <ChallengeTab/>
      </Box>
      <Box bordercolor="gray" bg="white" paddingBottom="10px">
        <FriendTab/>
      </Box>
    </TabPanel>
    <TabPanel>
      <FriendAdder/>

    </TabPanel>
  </TabPanels>
</Tabs>
      </Flex>
  </div>
}

const FriendAdder = () => {
  const [friendName, setFriendName] = useState('');
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [openState, setOpenState] = useState(true);
  const [propsAddFriendTab, setPropsAddFriendTab] = useState([]);
  const dispatch = useDispatch();
  const addRequestList = useAddRequestList(dispatch);
  const requestList = useRequestList()

  const [totalMember, setTotalMember] = useState(useTotalMember());
  //console.log(totalMember);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setFriendName(value);
    debouncedFilter(value)
    
  };
  useEffect(() => {
    if (friendName !== "" && openState === true) {
      setIsPopoverOpen(true)
      // 입력값에 따라 필터링
      const filtered = totalMember.filter((member) =>
        member.name.includes(friendName)
      );
      setFilteredMembers(filtered);
    } else {//setIsPopoverOpen(false)
      // 빈 값인 경우 모든 멤버 보여주기
      return;
    }
  }, [filteredMembers, openState]); // friendName이 변경될 때마다 실행

  const handleOptionClick = () => {
    setFilteredMembers([]); // 자동 완성 목록 닫기
    setOpenState(false)
    setIsPopoverOpen(false)
  };

  const handleAddFriend = () => {
    const existed = totalMember.filter((member) =>
      friendName === member.name
    );
    //전체 유저 중에 포함되는지.
    const notExisted = requestList.filter((member) =>
      friendName === member.name
    );
    //요청목록에 포함되는지.
    if(existed && notExisted.length === 0){
      addRequestList(...existed)
    }
    else{
      alert("해당 유저는 이미 친구추가 상태입니다.")
    }
  };
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    // 비동기적으로 호출되도록 debounce 처리
    const debouncedFilter = debounce((value) => {
      const filtered = totalMember.filter((member) =>
        member.name.includes(value)
      );
      setFilteredMembers(filtered);
    }, 500); // 300ms 후에 실행
    
  return (
    <div>
    <div style={{ position:"relative", top:"60px", maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <div style={{ display: 'flex' }}>
        

      <Popover
        isOpen={isPopoverOpen}
        initialFocusRef={null}
        autoFocus={false}
      >
          <input
            type="text"
            value={friendName}
            placeholder="친구 이름 입력"
            onChange={handleInputChange}
            style={{
              position: 'relative',
              top:'-55px',
              width: "100%",
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "5px 0",
              listStyle: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
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
      <button
          onClick={handleAddFriend}
          style={{
            position: 'relative',
            top:'-55px',
            width: '70px',
            border: "none",
            marginLeft: '3px',
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          추가
        </button>
      </div>
      
    </div>
    <Box bordercolor="gray" bg="white" marginTop="140px"><AddFriendTab/></Box>
    <Box bordercolor="gray" bg="white"><ResponseFriendTab/></Box>
    </div>
  );
};

const MYTab = () =>{
  const maskedPassword = "*".repeat(usePassword().length);

  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  //이메일, 이름, 비밀번호 값 임시 저장. 이후 handleEmailButton등의 메소드로 검사과정을 거치고 실제로 변경됨.

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
    setEmail(emailValue)// input 값을 상태에 저장
  };
  //이메일 형식 검사 + 이메일 변경
  const handleNameButton = (e) => {
    if (pwValue.length <=0 || pwValue.length > 10) {
      alert("올바른 아이디가 아닙니다. 조건: 1글자 이상 10글자 이하");
      return;
    }
    setName(nameValue); // input 값을 상태에 저장
  };
  //이름 형식 검사 + 이름 변경
  const handlePwButton = (e) => {
    if (pwValue.length <=0 || pwValue.length > 10 || !/[^a-zA-Z0-9]/.test(pwValue)) {
      alert("올바른 패스워드가 아닙니다. 조건: 1글자 이상 10글자 이하, 특수문자 1개 무조건 포함");
      return;
    }
    setPw(pwValue); // input 값을 상태에 저장
  };
  //비밀번호 형식 검사 + 비밀번호 변경
  
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
          <Th><input value={emailValue} onChange={handleEmailChange} placeholder="이메일을 입력해주세요."/></Th>
          <Th><input value={nameValue} onChange={handleNameChange} placeholder="닉네임을 입력해주세요."/></Th>
          <Th><input value={pwValue} onChange={handlePwChange} placeholder="비밀번호를 입력해주세요."/></Th>
        </Tr>
      </Tbody>
      <Tbody>
        <Tr>
          <Th>수정목록</Th>
          <Th><button onClick={handleEmailButton}>이메일 수정하기</button></Th>
          <Th><button onClick={handleNameButton}>닉네임 수정하기</button></Th>
          <Th><button onClick={handlePwButton}>비밀번호 변경하기</button></Th>
        </Tr>
      </Tbody>
    </Table>
    </TableContainer>
  )
}

const ChallengeTab = () =>{

  const success = useChallengeSuccessList().length;
  const total = Math.round(Number(useChallengeListNum()) / Number(success));

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
          <Td>{usePersonalChallengeList().length}개</Td>
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

const AddFriendTab = React.memo(() =>{

  const dispatch = useDispatch();
  const requestList = useRequestList();
  const removeRequestList = useRemoveRequestList(dispatch)
  console.log(requestList)
  return(
    <TableContainer>
    <Table size='sm'>
      <Thead bg="rgba(0,0,0,0.2)">
        <Tr >
          <Th>요청 대기 목록</Th>
        </Tr>
      </Thead>
      {
        requestList.map((r, i)=>{
          return(
            <Tbody>
            <Tr>
            <Td>
              <Flex justifyContent="space-between">{r.name}
                <button onClick={()=>{removeRequestList(r.name)}}>친추 취소</button>
              </Flex>
            </Td>
            </Tr>
          </Tbody>
          )
        })
      }
    </Table>
   </TableContainer>
  )
})

const FriendTab = () =>{

  const id = useId();
  const name = useName();
  const challengeSuccess = useChallengeSuccessList().length;
  const dispatch = useDispatch();
  const friendList = useFriendList();
  console.log(friendList)
  const [totalRank, setTotalRank] = useState([]);
  useEffect(()=>{
    const rank = [...friendList ,{id, name, challengeSuccess}].sort((a,b)=>b.challengeSuccess - a.challengeSuccess);
    setTotalRank(rank)
  }, [friendList]);
  console.log(totalRank)
  return(
    <TableContainer>
    <Table size='sm'>
      <Thead bg="rgba(0,0,0,0.2)">
        <Tr >
          <Th>친구 목록</Th>
          <Th> </Th>
          <Th>친구 랭킹</Th>
          <Th></Th>
        </Tr>
      </Thead>
      {
        friendList.length > 0?
        totalRank.map((f,i)=>{
          console.log(f)
          return(
            <Tbody>
            <Tr>
              <Td>{f.name}</Td>
              <Td> </Td>
              <Td>{i+1} 등</Td>
              <Td></Td>
            </Tr>
          </Tbody>
          )
        })
        :
        <Tbody>
        <Tr>
          <Td>친구 정보가 없습니다.</Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
      </Tbody>
      //예외처리: 친구가 한명도 없을 경우.
      }
      <Tfoot>
      </Tfoot>
    </Table>
   </TableContainer>
  )
}
const ResponseFriendTab = React.memo(() =>{

  const dispatch = useDispatch();
  const requestList = useResponseList();
  const addFriendList = useAddFriendList(dispatch)
  console.log(requestList)
  return(
    <TableContainer>
    <Table size='sm'>
      <Thead bg="rgba(0,0,0,0.2)">
        <Tr >
          <Th>나에게 친추한 유저</Th>
        </Tr>
      </Thead>
      {
        requestList.map((r, i)=>{
          return(
            <Tbody>
            <Tr>
            <Td>
              <Flex justifyContent="space-between">{r.name}
                <button onClick={()=>{addFriendList(r.name)}}>친추 추가</button>
              </Flex>
            </Td>
            </Tr>
          </Tbody>
          )
        })
      }
    </Table>
   </TableContainer>
  )
})

export default Information
import React,{useState,useEffect}from "react"
import { Card, CardHeader, CardBody, CardFooter, HStack, Stack, Strong, Text,Image,Flex,AspectRatio,Box,Center,Input,Grid  } from "@chakra-ui/react" // 절대 경로로 무조건
import { LuCheck, LuX } from "react-icons/lu"
import { useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: #000; /* 검정 배경 */
  color: #FFF; /* 하얀 글씨 */
  border: none; /* 테두리 제거 */
  border-radius: 8px; /* 둥근 모서리 */
  padding: 0px 20px; /* 패딩 */
  margin: 5px;
  font-size: 16px; /* 글씨 크기 */
  cursor: pointer; /* 클릭 가능한 포인터 */
  transition: transform 0.2s, background-color 0.3s; /* 클릭/호버 애니메이션 */
  flex:1;

  &:hover {
    background-color: #333; /* 호버 시 밝은 검정 */
  }

  &:active {
    transform: scale(0.95); /* 클릭 시 살짝 작아짐 */
  }
`;

function PointExchangeDetail(){
  const navigate = useNavigate();
  const location = useLocation();
  const categoryId = useParams().categoryId;
  console.log(categoryId)
    const pageSize = 4
    const [page, setPage] = useState(1)
    const count = 20

    const startRange = (page - 1) * pageSize
    const endRange = startRange + pageSize

    const categories = location.state || {};
    console.log(categories);
    const allItems = categories.category.items;
    const visibleItems = allItems
    console.log(visibleItems)

    const scrollRef = useRef(null);
    const scroll = (direction) => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({
            left: direction === "left" ? -320 : 320, // 한 번에 스크롤할 픽셀 수
            behavior: "smooth",
          });
        }
      };
    const user = {name:"홍길동", point:1000, avatar:"https://bit.ly/broken-link"}
    const [userpoint, setUserPoint] = useState(user.point);
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

    const [content, setContent] = useState('');
    const [test, setTest] = useState(true);

    // 모달 열기
    useEffect(()=>{
      if(content === '')return;
      const openModal = () => {
        setIsModalOpen(true);
      };
      openModal()
    }, [content])
  
    // 모달 닫기
    const closeModal = () => {
      setIsModalOpen(false);
    };
    function Modal(){
      return(        
      <div className="modal">
        <div className="modal-content">
          <span className="close-btn" onClick={closeModal}>
            &times;
          </span>
          <h2></h2>
          <p>{content.name}의 {content.points}입니다. 교환하시겠습니까?</p>
          <p></p>
          {
            !test? <p>고객님의 포인트가 부족합니다.</p> : null
          }
          <button onClick={()=>{
            const exchangedPoint = userpoint - Number(content.points); 
            if(exchangedPoint < 0){setTest(false);return;}
            else setUserPoint(exchangedPoint);closeModal();
            }}>교환하기</button>
          <button onClick={closeModal}>닫기</button>
        </div>
      </div>
      )
    }

    return(
      <Grid>
      <div style={{padding: "0PX 180px", background:"rgba(198,234,130,0.3)"}}>
    <Box display="flex" justifyContent="flex-end" borderBottom="1px solid" borderColor="gray" paddingX="2" padding="10px" height="440px">
    <Box position="relative" top="-100px" marginY="auto" borderTop="1px solid" borderBottom="1px solid" borderColor="gray" paddingX="2" w="290px" padding="20px">

    <Box width="100%">
      <Flex justify="flex-end">
    <Text  textStyle="2xl">{user.name}</Text>
    </Flex>
    </Box>
  <Text color="black" textStyle="3xl" marginLeft="20px" marginTop="10px" textAlign="end">{userpoint}POINT</Text> 
    </Box>
    </Box>
      <Box position="relative" top="-210px" boxShadow="1px 1px 4px 0.5px" bg="rgba(256,256,256,0.8)">
      <Box>
        <Box w={80} paddingY="10px">
            <Center>
                <h4>카테고리별</h4>
            </Center>
        </Box>
       <Center display="flex" color="white">
        <Flex 
                ref={scrollRef}
                overflowX="auto"
                whiteSpace="nowrap"
                gap={4} // 버튼 영역 확보
                marginX="25px"
                marginY="10px"
                scrollbar="hidden"
                
        >
                          <Card minWidth="140px">
                <CardBody> 
                  
                <Image
               objectFit="cover"
               maxW="100px"
               src={`/category/icon${categoryId}.png`}
               alt="Caffe Latte"
               onClick={()=>{navigate(`/pointExchangeDetail/`,{state: {categories}})}}
             />
                </CardBody>
                <Text>{categories.category.categoryName}</Text>
               </Card>
        </Flex>
       </Center>
       </Box>
      </Box>
      </div>
      <div style={{padding: "0PX 180px"}}>
      <Box position="relative" top="-180px" bg="rgba(256,256,256,0.8)" borderBottom="1px solid" borderColor="gray">
      <Box w={80} bg="" marginY="10px" paddingY="5px">
            <Center>
                <h4>전체 상품 목록</h4>
            </Center>
        </Box>
      <Stack gap="4" margin="5px">
        <Grid
    templateColumns="repeat(4, auto)" // 4개의 컬럼으로 나눔
    gap="20px" // 아이템 간격
    justifyContent="center"
  >
    {
      console.log(allItems)
    }
    {visibleItems.map((items,index) => {
                  console.log(items)
                  return(
                  <Card key={index} overflow="hidden" height="400px" width="260px">
                  <Image
                    src={items.image}
                    alt="Green double couch with wooden legs"
                    maxH="200px"
                    minW="200px"
                  />
                  <CardHeader>{items.name}</CardHeader>
                  <CardBody gap="2">
                    {
                      console.log(items.name)
                    }
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                      {items.details}
                    </Text>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                      {items.points}
                    </Text>
                  </CardBody>
                  <CardFooter gap="2"><Flex justify="center" width="100%" height="100%"><Button onClick={()=>{setContent(items)}}><Text fontSize='1em'>교환하기</Text></Button></Flex>
                    
                  </CardFooter>
                 </Card>
                  )
    }
  )}
        </Grid>
      </Stack>
      {
      isModalOpen && (
        <Modal></Modal>
    )
    }
      </Box>
      </div>
    </Grid>
    )
}

export default PointExchangeDetail;
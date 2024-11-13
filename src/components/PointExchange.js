import React,{useState,useEffect}from "react"
import { Card, HStack, Stack, Strong, Text,Image,Flex,AspectRatio,Box,Center, Input,SimpleGrid  } from "@chakra-ui/react" // 절대 경로로 무조건
import { LuCheck, LuX } from "react-icons/lu"
import { useRef } from "react";
// import {
//     PaginationItems,
//     PaginationNextTrigger,
//     PaginationPrevTrigger,
//     PaginationRoot,
//   } from "./ui/pagination"
  import {useNavigate} from 'react-router-dom'

function PointExchange(){
  const navigate = useNavigate();
    const pageSize = 4
    const [page, setPage] = useState(1)
    const count = 20

    const startRange = (page - 1) * pageSize
    const endRange = startRange + pageSize

    const category = ["카페&베이커리", "독서", "외식", "편의점", "운동", "대중문화", "문화상품권"];
    const items = ['커피','커피','커피','커피','커피','커피']
    const visibleItems = items.slice(startRange, endRange)

    const scrollRef = useRef(null);
    const scroll = (direction) => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({
            left: direction === "left" ? -320 : 320, // 한 번에 스크롤할 픽셀 수
            behavior: "smooth",
          });
        }
      };
    const user = {name:"홍길동", point:"1000", avatar:"https://bit.ly/broken-link"}
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

    // 모달 열기
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // 모달 닫기
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return(
        <div>
          <div style={{padding: "0PX 180px", background:"rgba(198,234,130,0.3)"}}>
        <Box display="flex" justifyContent="flex-end" borderBottom="1px solid" borderColor="gray" paddingX="2" padding="10px" height="440px">
        <Box position="relative" top="-100px" marginY="auto" borderTop="1px solid" borderBottom="1px solid" borderColor="gray" paddingX="2" w="290px" padding="20px">

        <Box width="100%" >
          <Flex justify="flex-end">
        {/* <Avatar name={user.name} size="1xl" src={user.avatar} padding="5px"/> */}
        <Text  textStyle="2xl">{user.name}</Text>
        </Flex>
        </Box>
      <Text color="black" textStyle="3xl" marginLeft="20px" marginTop="10px" textAlign="end">{user.point}POINT</Text> 

      {/* <Button variant="outline" width="100%" margin="3px">계정 정보</Button> */}

        </Box>
        </Box>
          <Box position="relative" top="-210px" boxShadow="1px 1px 4px 0.5px" bg="rgba(256,256,256,0.8)">
          <Box>
            <Box w={80} paddingY="10px">
                <Center>
                    <h4>카테고리별 모바일 교환권</h4>
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
            {
                category.map((item, i)=>{
                    return(
                      
                    <Card.Root key={i} minWidth="140px">
                    <Card.Body> 
                      
                    <Image
                   objectFit="cover"
                   maxW="320px"
                   src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                   alt="Caffe Latte"
                   onClick={()=>{navigate(`/pointExchangeDetail/${i}`)}}
                 />
                    </Card.Body>
                   </Card.Root>
                    )
                })}
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
      <SimpleGrid columns={4} gap="4">
        {visibleItems.map((item,index) => (
          <Card.Root key={index} overflow="hidden">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            
          />
          <Card.Body gap="2">
            <Card.Title>{item}</Card.Title>
            <Card.Description>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces.
            </Card.Description>
            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
              $450
            </Text>
          </Card.Body>
          <Card.Footer gap="2">
            {/* <Button variant="solid">Buy now</Button>
            <Button variant="ghost"onClick={openModal}>Add to cart</Button> */}
          </Card.Footer>
        </Card.Root>
        ))}
        {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>모달 제목</h2>
            <p>모달 내용을 여기에 작성하세요.</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
      </SimpleGrid>
      
      {/* <PaginationRoot
        page={page}
        count={count}
        pageSize={pageSize}
        onPageChange={(e) => setPage(e.page)}
      ><Center>
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
        </Center>
      </PaginationRoot> */}
    </Stack>
          </Box>
          </div>
          
        </div>
    )
}


export default PointExchange;
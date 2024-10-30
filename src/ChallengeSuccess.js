import React,{useState,useEffect}from "react"
import { Card, HStack, Stack, Strong, Text,Image,Flex,AspectRatio,Box,Center  } from "@chakra-ui/react" // 절대 경로로 무조건
import { Avatar } from "./components/ui/avatar"
import { Button } from "./components/ui/button"
import { LuCheck, LuX } from "react-icons/lu"
import { useRef } from "react";
import {
    PaginationItems,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
  } from "./components/ui/pagination"

function ChallengeSuccess(){
    const pageSize = 4
    const [page, setPage] = useState(1)
    const count = 20

    const startRange = (page - 1) * pageSize
    const endRange = startRange + pageSize

    const category = ["카페", "베이커리", "독서", "외식", "편의점", "운동", "대중문화", "문화상품권"];
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

    return(
        <div style={{padding:"10px"}}>
          <Box bg="rgba(0,0,0,0.1)" padding="10px">
          <Flex w="300px" padding="8px" direction="column" borderRadius="3px" position="relative" top="" outline="solid 2.5px">
        <HStack gap="4">
          <Avatar name={user.name} size="2xl" src={user.avatar} />
          <Stack gap="0">
            <Text  textStyle="3xl">{user.name}</Text>
          </Stack>        
        </HStack>
        <Text color="gold" textStyle="3xl">
              {user.point}POINT
            </Text>
        <Button variant="outline" margin="3px">계정 정보</Button>
          </Flex>
          </Box>
          <Box w="100%" position="relative" top="5px"  borderTop="solid" bg="rgba(0,0,0,0.1)">
          <Box margin="3px">
            <Box w={80} marginTop="20px">
                <Center>
                    <h4>카테고리별 모바일 교환권</h4>
                </Center>
            </Box>
           <Center display="flex" color="white">
            <Button
                onClick={() => scroll("left")}
                
                position="relative"
                left="20px"
            >
            </Button>
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
                    <Card.Root key={i} minWidth="320px">
                    <Card.Body>
                    <Image
                   objectFit="cover"
                   maxW="320px"
                   src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                   alt="Caffe Latte"
                 />
                    </Card.Body>
                    <Card.Footer>
                     <Button variant="subtle" colorPalette="gray" flex="1">
                       <LuX />
                       {item}
                     </Button>
                    </Card.Footer>
                   </Card.Root>
                    )
                })}
            </Flex>
            <Button
                onClick={() => scroll("right")}
                position="relative"
                right="10px"
            >
            </Button>
           </Center>
           </Box>
          </Box>
          <Box position="relative" top="7px" borderTop="solid" borderBottom="solid" border bg="rgba(0,0,0,0.1)">
          <Box w={80} bg="" marginY="10px">
                <Center>
                    <h4>전체 상품 목록</h4>
                </Center>
            </Box>
          <Center>
          <Stack gap="4">
      <Flex w="1200px" gap="4" bg="white" mx="auto" p="10px" borderRadius="4px">
        {visibleItems.map((item) => (
          <Card.Root overflow="hidden" width="287px">
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
            <Button variant="solid">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
          </Card.Footer>
        </Card.Root>
        ))}
      </Flex>
      <PaginationRoot
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
      </PaginationRoot>
    </Stack>
          </Center>
          </Box>
        </div>
    )
}

export default ChallengeSuccess;
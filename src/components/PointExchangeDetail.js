import React,{useState,useEffect}from "react"
import { Card, HStack, Stack, Strong, Text,Image,Flex,AspectRatio,Box,Center,Input  } from "@chakra-ui/react" // 절대 경로로 무조건
import { Avatar } from "./ui/avatar"
import { Button } from "./ui/button"
import { LuCheck, LuX } from "react-icons/lu"
import { useRef } from "react";
import {
    PaginationItems,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
  } from "./ui/pagination"

function PointExchangeDetail(){

    const pageSize = 4
    const [page, setPage] = useState(1)
    const count = 20

    const startRange = (page - 1) * pageSize
    const endRange = startRange + pageSize

    const category = "카페";
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
        <Box w="100%" position="relative" boxShadow="1px 1px 4px 0.5px" bg="rgba(0,0,0,0.1)">
        <Box margin="1px">
          <Box w={80} marginY="10px" paddingY="10px">
              <Center>
                  <h4>카테고리별 목록</h4>
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

                  <Card.Root minWidth="320px">
                  <Card.Body>
                  <Image
                 objectFit="cover"
                 maxW="320px"
                 src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                 alt="Caffe Latte"
               />
                  </Card.Body>
                  <Card.Footer>
                   <Input colorPalette="gray" flex="1">
                   </Input>
                  </Card.Footer>
                 </Card.Root>
          </Flex>
         </Center>
         </Box>
        </Box>
        <Box position="relative" boxShadow="1px 1px 4px 0.5px" border bg="rgba(0,0,0,0.1)">
        <Box w={80} bg="" marginY="10px" paddingY="10px">
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

export default PointExchangeDetail;
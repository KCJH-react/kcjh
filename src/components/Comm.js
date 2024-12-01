import { Tabs,Center,Box,Card,Button,Text,HStack,Flex,Image } from "@chakra-ui/react"
import { LuCheckSquare, LuFolder, LuUser } from "react-icons/lu"
import {useState, useEffect} from 'react';
// import {
//     PaginationItems,
//     PaginationNextTrigger,
//     PaginationPrevTrigger,
//     PaginationRoot,
//   } from "./ui/pagination"
  import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

export default function Comm(){
    const pageSize = 4
    const [page, setPage] = useState(1)
    const count = 20

    const startRange = (page - 1) * pageSize
    const endRange = startRange + pageSize

    const category = ["카페", "베이커리", "독서", "외식", "편의점", "운동", "대중문화", "문화상품권"];
    const items = ['제목1','제목2','제목3','제목4','제목5','제목6']

    //const [like, setLike] = useState(0);

    const [content,setContent] =useState([
        {title:'제목1',content:"...",date:"1",like:5},
        {title:'제목2',content:"...",date:"2",like:3},
        {title:'제목3',content:"...",date:"3",like:10},
        {title:'제목4',content:"...",date:"4",like:45},
        {title:'제목5',content:"...",date:"5",like:100},
        {title:'제목6',content:"...",date:"6",like:547},
        {title:'제목7',content:"...",date:"7",like:40},
        {title:'제목8',content:"...",date:"8",like:0},
        {title:'제목9',content:"...",date:"9",like:2}
    ]
    )

    const [visibleItems, setVisibleItems] = useState(content.slice(startRange, endRange))

    useEffect(()=>{
      setVisibleItems(content)
      console.log(1)
    }, [content])

    function DropdownButton() {
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleMenu = () => setIsOpen(!isOpen);
    
      return (
        <Box position="relative" display="inline-block">
          <Button onClick={toggleMenu}>
            옵션 선택
          </Button>
          {isOpen && (
            <Box
              position="absolute"
              top="100%"
              mt="2"
              w="100%"
              bg="white"
              boxShadow="md"
              borderRadius="md"
              zIndex="1"
            >
              <Box
                as="button"
                display="block"
                w="100%"
                px="4"
                py="2"
                onClick={() => {
                  console.log("옵션 1 선택됨");
                  const newContent = [...content].sort((a,b) => a.date-b.date);
                  setContent(newContent);
                  setIsOpen(false);
                }}
              >
                최신순
              </Box>
              <Box
                as="button"
                display="block"
                w="100%"
                px="4"
                py="2"
                onClick={() => {
                  console.log("옵션 2 선택됨");
                  const newContent = [...content].sort((a,b) => a.like-b.like);
                  setContent(newContent);
                  setIsOpen(false);
                }}
              >
                인기순
                
              </Box>
            </Box>
          )}
        </Box>
      );
    }

  return (
    <Box>
    <div style={{padding: "0PX 180px", background:"rgba(198,234,130,0.5)"}}>
      <Box display="flex" alignItems="center" justifyContent="center" height="400px">
        <Text fontSize="5xl" fontWeight="bold">Challenge COMM</Text>
      </Box>
    </div>
    <Box w="80%" margin="auto" position="relative" top="-100px">
    <Tabs.Root defaultValue="members" variant="plain">
      <Tabs.List bg="bg.muted" rounded="l3" p="1">
        <Tabs.Trigger value="members">
          <LuUser />
          Members
        </Tabs.Trigger>
        <Tabs.Trigger value="projects">
          <LuFolder />
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks">
          <LuCheckSquare />
          Settings
        </Tabs.Trigger>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      <Tabs.Content value="members" bg="white" borderRadius="3px" margin="3px" shadow="0px 0px 10px 3px rgba(0, 0, 255, .2)">
        <Flex justifyContent="space-between" marginX="18px">
          <Text fontSize="2xl" fontWeight="bold">게시물</Text><DropdownButton></DropdownButton>
        </Flex>
      <Box w="1200px" gap="4" bg="white" mx="auto" p="10px" borderRadius="4px">
        {visibleItems.map((c) => (
          <Card.Root overflow="hidden">
          <Card.Body gap="2">
            <Card.Title>{c.title}</Card.Title>
            <Card.Description>
             {c.date}
            </Card.Description> 
            <Box>{c.like}</Box>
          </Card.Body>
          <Card.Footer gap="2">
          </Card.Footer>
        </Card.Root>
        ))}
      </Box>
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
      </Tabs.Content>
      <Tabs.Content value="projects">Manage your projects</Tabs.Content>
      <Tabs.Content value="tasks">
        Manage your tasks for freelancers
      </Tabs.Content>
    </Tabs.Root>
    </Box>
    </Box>  
  )
}

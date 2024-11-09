import { Tabs,Center,Box,Card,Button,Text,HStack,Flex,Image } from "@chakra-ui/react"
import { LuCheckSquare, LuFolder, LuUser } from "react-icons/lu"
import {useState} from 'react';
import {
    PaginationItems,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
  } from "./ui/pagination"

export const CMmain = () => {
    const pageSize = 4
    const [page, setPage] = useState(1)
    const count = 20

    const startRange = (page - 1) * pageSize
    const endRange = startRange + pageSize

    const category = ["카페", "베이커리", "독서", "외식", "편의점", "운동", "대중문화", "문화상품권"];
    const items = ['제목1','제목2','제목3','제목4','제목5','제목6']
    const visibleItems = content.slice(startRange, endRange)

    //const [like, setLike] = useState(0);

    const [content,setContent] =useState([
        {title:'제목1',content:"...",date:"2024.11.06",like:0},
        {title:'제목2',content:"...",date:"2024.11.06",like:0},
        {title:'제목3',content:"...",date:"2024.11.06",like:0},
        {title:'제목1',content:"...",date:"2024.11.06",like:0},
        {title:'제목2',content:"...",date:"2024.11.06",like:0},
        {title:'제목3',content:"...",date:"2024.11.06",like:0},
        {title:'제목1',content:"...",date:"2024.11.06",like:0},
        {title:'제목2',content:"...",date:"2024.11.06",like:0},
        {title:'제목3',content:"...",date:"2024.11.06",like:0}
    ]
    )

  return (
    <Box>
    <Box w="80%" margin="auto" position="relative" top="5px">
    <Tabs.Root defaultValue="members" variant="plain" bg="red">
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
      <Tabs.Content value="members" bg="blue">
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
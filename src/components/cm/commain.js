import { Tabs, Center, Box, Card, Button, Text, HStack, Flex, Image } from "@chakra-ui/react";
import { LuCheckSquare, LuFolder, LuUser } from "react-icons/lu";
import { useState, useEffect } from "react";
import Pagination from "./commPagination";

export default function Commain() {
  const pageSize = 4;
  const [page, setPage] = useState(1);
  const count = 20;

  const startRange = (page - 1) * pageSize;
  const endRange = startRange + pageSize;

  const category = ["카페", "베이커리", "독서", "외식", "편의점", "운동", "대중문화", "문화상품권"];
  const items = ["제목1", "제목2", "제목3", "제목4", "제목5", "제목6"];

  const [content, setContent] = useState([
    { title: "제목1", content: "...", date: "1", like: 5 },
    { title: "제목2", content: "...", date: "2", like: 3 },
    { title: "제목3", content: "...", date: "3", like: 10 },
    { title: "제목4", content: "...", date: "4", like: 45 },
    { title: "제목5", content: "...", date: "5", like: 100 },
    { title: "제목6", content: "...", date: "6", like: 547 },
    { title: "제목7", content: "...", date: "7", like: 40 },
    { title: "제목8", content: "...", date: "8", like: 0 },
    { title: "제목9", content: "...", date: "9", like: 2 },
  ]);

  useEffect(() => {}, [content]);

  return (
    <Box>
      <div style={{ padding: "0PX 180px", background: "rgba(198,234,130,0.5)" }}>
        <Box display="flex" alignItems="center" justifyContent="center" height="400px">
          <Text fontSize="2em" fontWeight="bold">
            Challenge COMM
          </Text>
        </Box>
      </div>
      <Box w="80%" margin="auto" position="relative" top="-100px">
        <Pagination contents={content} setContents={setContent}></Pagination>
      </Box>
    </Box>
  );
}

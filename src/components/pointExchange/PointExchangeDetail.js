import React, { useState } from "react";
import { Card, CardBody, Stack, Text, Image, Flex, Box, Center, Grid } from "@chakra-ui/react"; // 절대 경로로 무조건
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ExchangeModal from "./exchangeModal";
import UserData from "./PointExchangeUserData";
import ItemCard from "./ItemCard";

function PointExchangeDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const categories = location.state || {};
  const categoryId = useParams().categoryId;

  const visibleItems = categories.category.items;

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [content, setContent] = useState("");

  const openModal = (item) => {
    setContent(item);
    setIsModalOpen(true);
  };

  return (
    <Grid>
      {isModalOpen && (
        <ExchangeModal setIsModalOpen={setIsModalOpen} content={content}></ExchangeModal>
      )}
      <div style={{ padding: "0PX 180px", background: "rgba(198,234,130,0.5)" }}>
        <Box
          display="flex"
          justifyContent="flex-end"
          borderBottom="1px solid"
          borderColor="gray"
          paddingX="2"
          padding="10px"
          height="440px"
        >
          <UserData />
        </Box>
        <Box
          position="relative"
          top="-210px"
          boxShadow="1px 1px 4px 0.5px"
          bg="rgba(256,256,256,0.8)"
        >
          <Box>
            <Box w={80} paddingY="10px">
              <Center>
                <h4>카테고리별</h4>
              </Center>
            </Box>
            <Center display="flex" color="white">
              <Flex
                overflowX="auto"
                whiteSpace="nowrap"
                gap={4} // 버튼 영역 확보
                marginX="25px"
                marginY="10px"
              >
                <Card minWidth="140px">
                  <CardBody>
                    <Image
                      objectFit="cover"
                      maxW="100px"
                      src={`/category/icon${categoryId}.png`}
                      alt="Caffe Latte"
                      onClick={() => {
                        navigate(`/pointExchangeDetail/`, { state: { categories } });
                      }}
                    />
                  </CardBody>
                  <Text>{categories.category.categoryName}</Text>
                </Card>
              </Flex>
            </Center>
          </Box>
        </Box>
      </div>
      <div style={{ padding: "0PX 180px" }}>
        <Box
          position="relative"
          top="-180px"
          bg="rgba(256,256,256,0.8)"
          borderBottom="1px solid"
          borderColor="gray"
        >
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
              {visibleItems.map((item, index) => {
                return <ItemCard item={item} index={index} openModal={openModal} />;
              })}
            </Grid>
          </Stack>
        </Box>
      </div>
    </Grid>
  );
}

export default PointExchangeDetail;

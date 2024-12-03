import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Text, Image } from "@chakra-ui/react"; // 절대 경로로 무조건
import styled from "styled-components";

const Button = styled.button`
  background-color: #000; /* 검정 배경 */
  color: #fff; /* 하얀 글씨 */
  border: none; /* 테두리 제거 */
  border-radius: 8px; /* 둥근 모서리 */
  padding: 0px 20px; /* 패딩 */
  margin: 5px;
  font-size: 16px; /* 글씨 크기 */
  cursor: pointer; /* 클릭 가능한 포인터 */
  transition: transform 0.2s, background-color 0.3s; /* 클릭/호버 애니메이션 */
  flex: 1;

  &:hover {
    background-color: #333; /* 호버 시 밝은 검정 */
  }

  &:active {
    transform: scale(0.95); /* 클릭 시 살짝 작아짐 */
  }
`;

const ItemCard = ({ item, index, openModal }) => {
  return (
    <Card key={index} height="400px" width="260px" marginBottom="6px">
      <Image src={item.image} alt="Green double couch with wooden legs" maxH="200px" minW="200px" />
      <CardHeader>{item.name}</CardHeader>
      <CardBody maxH="50px" maxW="200px" display="flex" flexDirection="column">
        <Text textAlign="left" minW="200px" textStyle="2xl" fontWeight="medium">
          {item.details}
        </Text>
        <Text textAlign="left" textStyle="2xl" fontWeight="medium" letterSpacing="tight">
          포인트: {item.points}
        </Text>
      </CardBody>
      <CardFooter position="relative" top="30px">
        {/* 포인트 2: 매개변수로 전달된 openModal 호출하여 모달을 보여줌. */}
        <Button
          onClick={() => {
            openModal(item);
          }}
        >
          <Text fontSize="1em">교환하기</Text>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;

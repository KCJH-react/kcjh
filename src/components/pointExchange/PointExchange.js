import React, { useState } from "react";
import { Card, CardBody, Stack, Text, Image, Flex, Box, Center, Grid } from "@chakra-ui/react"; // 절대 경로로 무조건
import { useNavigate } from "react-router-dom";
import ExchangeModal from "./exchangeModal";
import UserData from "./PointExchangeUserData";
import ItemCard from "./ItemCard";

const PointExchange = () => {
  const navigate = useNavigate();

  const categories = [
    {
      categoryName: "카페&베이커리",
      items: [
        {
          name: "아메리카노",
          image: `/item/cafe/cafe1.jpg`,
          details: "고소한 원두로 내린 아메리카노",
          points: 75,
        },
        {
          name: "카페라떼",
          image: `/item/cafe/cafe2.jpg`,
          details: "부드러운 우유와 함께하는 카페라떼",
          points: 80,
        },
        {
          name: "치즈케이크",
          image: `/item/cafe/cafe3.jpg`,
          details: "부드럽고 진한 치즈케이크",
          points: 90,
        },
        {
          name: "블루베리 머핀",
          image: `/item/cafe/cafe4.jpg`,
          details: "신선한 블루베리가 들어간 머핀",
          points: 65,
        },
        {
          name: "바닐라 라떼",
          image: `/item/cafe/cafe5.jpg`,
          details: "달콤한 바닐라 시럽을 더한 라떼",
          points: 70,
        },
      ],
    },
    {
      categoryName: "독서",
      items: [
        {
          name: "베스트셀러 소설",
          image: `/item/book/book1.jpg`,
          details: "요즘 가장 인기 있는 소설",
          points: 85,
        },
        {
          name: "자기계발서",
          image: `/item/book/book2.jpg`,
          details: "성장을 돕는 자기계발서",
          points: 65,
        },
        {
          name: "미스터리 스릴러",
          image: `/item/book/book3.jpg`,
          details: "긴장감 넘치는 미스터리 스릴러",
          points: 78,
        },
        {
          name: "에세이집",
          image: `/item/book/book4.jpg`,
          details: "마음을 위로하는 따뜻한 에세이",
          points: 60,
        },
        {
          name: "경제학 책",
          image: `/item/book/book5.jpg`,
          details: "쉽게 읽는 경제학 개론",
          points: 70,
        },
      ],
    },
    {
      categoryName: "외식",
      items: [
        {
          name: "피자 세트",
          image: `/item/food/food1.jpg`,
          details: "온 가족이 함께 즐기는 피자 세트",
          points: 95,
        },
        {
          name: "스테이크",
          image: `/item/food/food2.jpg`,
          details: "고급 레스토랑 스타일 스테이크",
          points: 100,
        },
        {
          name: "햄버거 세트",
          image: `/item/food/food3.jpg`,
          details: "치즈와 패티가 듬뿍 들어간 햄버거 세트",
          points: 85,
        },
        {
          name: "초밥 플래터",
          image: `/item/food/food4.jpg`,
          details: "신선한 생선으로 만든 초밥 플래터",
          points: 90,
        },
        {
          name: "파스타",
          image: `/item/food/food5.jpg`,
          details: "토마토 소스와 함께 즐기는 정통 파스타",
          points: 88,
        },
      ],
    },
    {
      categoryName: "편의점",
      items: [
        {
          name: "라면",
          image: `/item/convenience/convenience1.jpg`,
          details: "한국인의 소울푸드 라면",
          points: 40,
        },
        {
          name: "즉석 도시락",
          image: `/item/convenience/convenience2.jpg`,
          details: "바쁜 당신을 위한 즉석 도시락",
          points: 50,
        },
        {
          name: "샌드위치",
          image: `/item/convenience/convenience3.jpg`,
          details: "간편하게 즐길 수 있는 샌드위치",
          points: 45,
        },
        {
          name: "컵밥",
          image: `/item/convenience/convenience4.jpg`,
          details: "즉석 조리 가능한 컵밥",
          points: 60,
        },
        {
          name: "음료수 세트",
          image: `/item/convenience/convenience5.jpg`,
          details: "다양한 음료수가 포함된 세트",
          points: 55,
        },
      ],
    },
    {
      categoryName: "운동",
      items: [
        {
          name: "요가매트",
          image: `/item/fitness/fitness1.jpg`,
          details: "피트니스 필수템 요가매트",
          points: 80,
        },
        {
          name: "아령",
          image: `/item/fitness/fitness2.jpg`,
          details: "근력 운동을 위한 기본 아령",
          points: 75,
        },
        {
          name: "운동화",
          image: `/item/fitness/fitness3.jpg`,
          details: "가볍고 편안한 운동화",
          points: 95,
        },
        {
          name: "점프 로프",
          image: `/item/fitness/fitness4.jpg`,
          details: "유산소 운동에 좋은 점프 로프",
          points: 60,
        },
        {
          name: "체중계",
          image: `/item/fitness/fitness5.jpg`,
          details: "운동 결과를 확인하는 체중계",
          points: 85,
        },
      ],
    },
    {
      categoryName: "대중문화",
      items: [
        {
          name: "영화 티켓",
          image: `/item/culture/culture1.jpg`,
          details: "최신 영화를 볼 수 있는 티켓",
          points: 70,
        },
        {
          name: "콘서트 티켓",
          image: `/item/culture/culture2.jpg`,
          details: "좋아하는 가수의 콘서트 티켓",
          points: 100,
        },
        {
          name: "드라마 DVD 세트",
          image: `/item/culture/culture3.jpg`,
          details: "인기 드라마의 전편을 볼 수 있는 DVD 세트",
          points: 85,
        },
        {
          name: "팝콘 세트",
          image: `/item/culture/culture4.jpg`,
          details: "영화 관람과 함께 즐길 팝콘 세트",
          points: 40,
        },
        {
          name: "뮤지컬 티켓",
          image: `/item/culture/culture5.jpg`,
          details: "화려한 무대를 즐길 수 있는 뮤지컬 티켓",
          points: 95,
        },
      ],
    },
    {
      categoryName: "문화상품권",
      items: [
        {
          name: "문화상품권 1만원권",
          image: `/item/giftcard/giftcard1.jpg`,
          details: "다양한 곳에서 사용할 수 있는 1만원권 상품권",
          points: 100,
        },
        {
          name: "문화상품권 5천원권",
          image: `/item/giftcard/giftcard2.jpg`,
          details: "가성비 좋은 5천원권 상품권",
          points: 50,
        },
        {
          name: "영화 예매권",
          image: `/item/giftcard/giftcard3.jpg`,
          details: "영화 예매에 사용할 수 있는 상품권",
          points: 60,
        },
        {
          name: "서점 상품권",
          image: `/item/giftcard/giftcard4.jpg`,
          details: "책 구매에 적합한 서점 상품권",
          points: 80,
        },
        {
          name: "온라인몰 할인권",
          image: `/item/giftcard/giftcard5.jpg`,
          details: "다양한 온라인몰에서 사용할 수 있는 할인권",
          points: 70,
        },
      ],
    },
  ];
  const visibleItems = categories.filter((a) => a.items);

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const [content, setContent] = useState("");

  const openModal = (item) => {
    setContent(item);
    setIsModalOpen(true);
  };

  return (
    <Grid>
      {isModalOpen && <ExchangeModal setIsModalOpen={setIsModalOpen} content={content} />}
      <div style={{ padding: "0PX 180px", background: "rgba(198,234,130,0.5)" }}>
        <Center position="relative" top="40px" marginY="40px">
          <Text fontSize="48px" fontWeight="bold">
            Point Exchange
          </Text>
        </Center>
        <Box
          display="flex"
          justifyContent="flex-end"
          borderBottom="1px solid"
          borderColor="gray"
          padding="10px"
          height="440px"
        >
          <UserData />
        </Box>
        <Box
          position="relative"
          top="-210px"
          shadow="0px 3px 10px 3px rgba(0, 0, 255, .2)"
          bg="white"
        >
          <Box>
            <Box w={80} paddingY="10px">
              <Center>
                <h4 style={{ fontSize: "21px", fontWeight: "bold" }}>카테고리별</h4>
              </Center>
            </Box>
            <Center display="flex" color="white">
              <Flex overflowX="auto" whiteSpace="nowrap" gap={4} marginX="25px" marginY="10px">
                {categories.map((category, i) => {
                  return <CategoriesCard category={category} i={i} navigate={navigate} />;
                })}
              </Flex>
            </Center>
          </Box>
        </Box>
      </div>
      <div style={{ padding: "0PX 180px" }}>
        <Box
          position="relative"
          top="-180px"
          bg="white"
          borderColor="gray"
          shadow="0px 3px 10px 3px rgba(0, 0, 255, .2)"
        >
          <Box w={80} marginY="10px" paddingY="5px">
            <Center>
              <h4 style={{ fontSize: "21px", fontWeight: "bold" }}>전체 상품 목록</h4>
            </Center>
          </Box>
          <Stack gap="4" margin="5px">
            <Grid
              templateColumns="repeat(4, auto)" // 4개의 컬럼으로 나눔
              gap="30px" // 아이템 간격
              justifyContent="center"
            >
              {visibleItems.map((items) => (
                <div>
                  {items.items.map((item, index) => {
                    return <ItemCard item={item} index={index} openModal={openModal} />;
                  })}
                </div>
              ))}
            </Grid>
          </Stack>
        </Box>
      </div>
    </Grid>
  );
};

const CategoriesCard = ({ navigate, category, i }) => {
  const categoryId = i + 1;

  return (
    <Card key={i} minWidth="140px">
      <CardBody>
        <Image
          objectFit="cover"
          maxW="100px"
          src={`/category/icon${categoryId}.png`}
          alt="Caffe Latte"
          onClick={() => {
            navigate(`/pointExchangeDetail/${categoryId}`, { state: { category } });
          }}
        />
      </CardBody>
      <Text>{category.categoryName}</Text>
    </Card>
  );
};

export default PointExchange;

import React,{useState,useEffect}from "react"
import { Card, CardHeader, CardBody, CardFooter, HStack, Stack, Text,Image,Flex,Box,Center,Grid, GridItem} from "@chakra-ui/react" // 절대 경로로 무조건
import { LuCheck, LuX } from "react-icons/lu"
import { useRef } from "react";
import {useNavigate} from 'react-router-dom'

function PointExchange(){
  const navigate = useNavigate();
    const pageSize = 4
    const [page, setPage] = useState(1)
    const count = 20

    const startRange = (page - 1) * pageSize
    const endRange = startRange + pageSize

    const categories = [
      {
        categoryName: "카페&베이커리",
        items: [
          {
            name: "아메리카노",
            image: "https://via.placeholder.com/150",
            details: "고소한 원두로 내린 아메리카노",
            points: 75,
          },
          {
            name: "카페라떼",
            image: "https://via.placeholder.com/150",
            details: "부드러운 우유와 함께하는 카페라떼",
            points: 80,
          },
          {
            name: "치즈케이크",
            image: "https://via.placeholder.com/150",
            details: "부드럽고 진한 치즈케이크",
            points: 90,
          },
          {
            name: "블루베리 머핀",
            image: "https://via.placeholder.com/150",
            details: "신선한 블루베리가 들어간 머핀",
            points: 65,
          },
          {
            name: "바닐라 라떼",
            image: "https://via.placeholder.com/150",
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
            image: "https://via.placeholder.com/150",
            details: "요즘 가장 인기 있는 소설",
            points: 85,
          },
          {
            name: "자기계발서",
            image: "https://via.placeholder.com/150",
            details: "성장을 돕는 자기계발서",
            points: 65,
          },
          {
            name: "미스터리 스릴러",
            image: "https://via.placeholder.com/150",
            details: "긴장감 넘치는 미스터리 스릴러",
            points: 78,
          },
          {
            name: "에세이집",
            image: "https://via.placeholder.com/150",
            details: "마음을 위로하는 따뜻한 에세이",
            points: 60,
          },
          {
            name: "경제학 책",
            image: "https://via.placeholder.com/150",
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
            image: "https://via.placeholder.com/150",
            details: "온 가족이 함께 즐기는 피자 세트",
            points: 95,
          },
          {
            name: "스테이크",
            image: "https://via.placeholder.com/150",
            details: "고급 레스토랑 스타일 스테이크",
            points: 100,
          },
          {
            name: "햄버거 세트",
            image: "https://via.placeholder.com/150",
            details: "치즈와 패티가 듬뿍 들어간 햄버거 세트",
            points: 85,
          },
          {
            name: "초밥 플래터",
            image: "https://via.placeholder.com/150",
            details: "신선한 생선으로 만든 초밥 플래터",
            points: 90,
          },
          {
            name: "파스타",
            image: "https://via.placeholder.com/150",
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
            image: "https://via.placeholder.com/150",
            details: "한국인의 소울푸드 라면",
            points: 40,
          },
          {
            name: "즉석 도시락",
            image: "https://via.placeholder.com/150",
            details: "바쁜 당신을 위한 즉석 도시락",
            points: 50,
          },
          {
            name: "샌드위치",
            image: "https://via.placeholder.com/150",
            details: "간편하게 즐길 수 있는 샌드위치",
            points: 45,
          },
          {
            name: "컵밥",
            image: "https://via.placeholder.com/150",
            details: "즉석 조리 가능한 컵밥",
            points: 60,
          },
          {
            name: "음료수 세트",
            image: "https://via.placeholder.com/150",
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
            image: "https://via.placeholder.com/150",
            details: "피트니스 필수템 요가매트",
            points: 80,
          },
          {
            name: "아령",
            image: "https://via.placeholder.com/150",
            details: "근력 운동을 위한 기본 아령",
            points: 75,
          },
          {
            name: "운동화",
            image: "https://via.placeholder.com/150",
            details: "가볍고 편안한 운동화",
            points: 95,
          },
          {
            name: "점프 로프",
            image: "https://via.placeholder.com/150",
            details: "유산소 운동에 좋은 점프 로프",
            points: 60,
          },
          {
            name: "체중계",
            image: "https://via.placeholder.com/150",
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
            image: "https://via.placeholder.com/150",
            details: "최신 영화를 볼 수 있는 티켓",
            points: 70,
          },
          {
            name: "콘서트 티켓",
            image: "https://via.placeholder.com/150",
            details: "좋아하는 가수의 콘서트 티켓",
            points: 100,
          },
          {
            name: "드라마 DVD 세트",
            image: "https://via.placeholder.com/150",
            details: "인기 드라마의 전편을 볼 수 있는 DVD 세트",
            points: 85,
          },
          {
            name: "팝콘 세트",
            image: "https://via.placeholder.com/150",
            details: "영화 관람과 함께 즐길 팝콘 세트",
            points: 40,
          },
          {
            name: "뮤지컬 티켓",
            image: "https://via.placeholder.com/150",
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
            image: "https://via.placeholder.com/150",
            details: "다양한 곳에서 사용할 수 있는 1만원권 상품권",
            points: 100,
          },
          {
            name: "문화상품권 5천원권",
            image: "https://via.placeholder.com/150",
            details: "가성비 좋은 5천원권 상품권",
            points: 50,
          },
          {
            name: "영화 예매권",
            image: "https://via.placeholder.com/150",
            details: "영화 예매에 사용할 수 있는 상품권",
            points: 60,
          },
          {
            name: "서점 상품권",
            image: "https://via.placeholder.com/150",
            details: "책 구매에 적합한 서점 상품권",
            points: 80,
          },
          {
            name: "온라인몰 할인권",
            image: "https://via.placeholder.com/150",
            details: "다양한 온라인몰에서 사용할 수 있는 할인권",
            points: 70,
          },
        ],
      },
    ];
    const allItems = categories.filter(a => a.items);
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
            {
                categories.map((category, i)=>{
                  const categoryId = i+1;
                    return(
                      
                    <Card key={i} minWidth="140px">
                    <CardBody> 
                      
                    <Image
                   objectFit="cover"
                   maxW="100px"
                   src={`/category/icon${i+1}.png`}
                   alt="Caffe Latte"
                   onClick={()=>{navigate(`/pointExchangeDetail/${categoryId}`,{state: {category}})}}
                 />
                    </CardBody>
                    <Text>{category.categoryName}</Text>
                   </Card>
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
            <Grid
        templateColumns="repeat(4, auto)" // 4개의 컬럼으로 나눔
        gap="20px" // 아이템 간격
        justifyContent="center"
      >
        {
          console.log(visibleItems[0].items)
        }
        {visibleItems.map((items,index) => (
          <div>
            {
             
              items.items.map((item,index)=>{
                return(
                <Card key={index} overflow="hidden" height="400px" width="260px">
                <Image
                  src={item.image}
                  alt="Green double couch with wooden legs"
                  maxH="200px"
                  minW="200px"
                />
                <CardHeader>{item.name}</CardHeader>
                <CardBody gap="2">
                  {
                    console.log(item.name)
                  }
                  <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    {item.details}
                  </Text>
                  <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    {item.points}
                  </Text>
                </CardBody>
                <CardFooter gap="2">
                  <button onClick={()=>{setContent(item)}}><Text fontSize='1em'>교환하기</Text></button>
                </CardFooter>
               </Card>
                )
              })
              
            }
          </div>
        ))}
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


export default PointExchange
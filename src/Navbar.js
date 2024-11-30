'use client';

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/system';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login'); // 로그인 화면으로 이동
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // 회원가입 화면으로 이동
  };

  return (
    <Box width="100%" overflow="hidden">
      <Flex
        bg={useColorModeValue('rgba(256, 256, 256, 0.8)', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        height={'60px'}
        px={4}
        align={'center'}
        boxShadow={'md'}
        justify="space-between"
        overflow="hidden">
        
        {/* 로고와 메뉴 버튼 */}
        <Flex align="center" flex="0 1 auto">
          <Box
            onClick={handleMenuClick}
            as="button"
            p={2}
            bg={useColorModeValue('teal.300', 'teal.500')}
            borderRadius={'md'}
            color={'white'}
            _hover={{ bg: useColorModeValue('teal.300', 'teal.700') }}
            boxShadow={'sm'}
            mr={4}>
            메뉴
          </Box>
          {/* 로고 */}
          <Text
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            fontWeight={700}>
            RANDOM CHALLENGE
          </Text>
        </Flex>

        {/* 네비게이션 항목을 한 줄에 고정 */}
        <Flex align="center" justify="center" flex="1" overflow="hidden">
          <DesktopNav />
        </Flex>

        {/* 로그인, 회원가입 버튼 */}
        <Stack flex="0 1 auto" justify={'flex-end'} direction={'row'} spacing={6}>
          <Button
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            onClick={handleLoginClick}>
            로그인
          </Button>
          <Button
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'teal.400'}
            onClick={handleSignUpClick} // 회원가입 클릭 이벤트 추가
            _hover={{
              bg: 'teal.300',
            }}
            boxShadow={'md'}>
            회원가입
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

{/*네비바*/}
const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('rgba(256, 256, 256, 0.8)', 'gray.800');

  return (
    <Stack direction={'row'} spacing={{ base: 8, md: 10, lg: 20 }} flexWrap="nowrap">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                whiteSpace="nowrap"
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

{/*네비바 하위 메뉴 항목 랜더링*/}
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'teal.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
      </Stack>
    </Box>
  );
};

{/* 메뉴항목 */}
const NAV_ITEMS = [
  {
    label: '소개',
    href: 'information',
  },
  {
    label: '커뮤니티',
    href: 'commain',
  },
  {
    label: '보상',
    href: 'pointExchange',
  },
  {
    label: '내 도전',
    href: '#',
  },
  {
    label: '공지사항',
    href: '#',
  },
  {
    label: '랭킹',
    href: 'rank',
  },
];
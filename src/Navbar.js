'use client';

import {Box,
        Flex,
        Text,
        Button,Stack,
        Collapse,
        Popover,
        PopoverTrigger,
        PopoverContent,
        useBreakpointValue,
        useDisclosure,} from '@chakra-ui/react';
import {useColorModeValue} from '@chakra-ui/system';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('rgba(256, 256, 256, 0.8)', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        boxShadow={'md'}>
        {/*로고 옆 버튼*/}
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align='center'>
          <Box
            onClick={onToggle}
            as="button"
            p={2}
            bg={useColorModeValue('gray.100', 'gray.700')}
            borderRadius={'md'}
            _hover={{ bg: useColorModeValue('gray.200', 'gray.600') }}
            boxShadow={'sm'}
            mr={4}>
            메뉴
          </Box>
          {/*로고*/}
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            fontWeight={700}>
            RANDOM CHALLENGE
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={40}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/*로그인, 회원가입 버튼*/}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
            로그인
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'teal.400'}
            href={'#'}
            _hover={{
              bg: 'teal.300',
            }}
            boxShadow={'md'}>
            회원가입
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
{/*데스크탑에서의 네비바*/}
const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('rgba(256, 256, 256, 0.8)', 'gray.800');

  return (
    <Stack direction={'row'} spacing={{ base: 20, md: 30, lg: 44 }}>
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
{/*데스크탑에서의 네비바 하위 메뉴 항목 랜더링*/}
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
{/*모바일에서의 네비바*/}
const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }} boxShadow={'md'}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
{/*모바일에서의 네비바 하위 메뉴 항목 랜더링*/}
const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
{/* 메뉴항목*/}
const NAV_ITEMS = [
  {
    label: '소개',
    href: 'inf',
  },
  {
    label: '커뮤니티',
    href: '#',
  },
  {
    label: '보상',
    href: '#',
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
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Text,
  StackDivider,
  Heading,
  Stack,
  Center,
  Flex,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const Pagination = ({ contents, setContents }) => {
  const start = 0;
  const end = 5;
  const size = end - start;
  const [page, setPage] = useState(1);

  let show = contents.filter((a, i) => (page - 1) * size <= i && i < page * size);

  let count = Math.round(contents.length / size);
  const button = Array.from({ length: count }, (_, index) => index + 1);

  useEffect(() => {}, [contents]);
  function SortPopover() {
    return (
      <Popover placement="bottom" closeOnBlur={false}>
        <PopoverTrigger>
          <button class="sort">정렬</button>
        </PopoverTrigger>
        <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
          <PopoverArrow bg="blue.800" />
          <PopoverBody>
            <Flex direction="column">
              <Button
                colorScheme="green"
                onClick={() => {
                  let newContent = [...contents].sort((a, b) => a.date - b.date);
                  setContents([...newContent]);
                }}
              >
                최신순
              </Button>
              <Button
                colorScheme="blue"
                onClick={() => {
                  let newContent = [...contents].sort((a, b) => b.like - a.like);
                  setContents([...newContent]);
                }}
              >
                인기순
              </Button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <div>
      <Box p="40" bg="white" borderRadius="3px" shadow="0px 0px 10px 3px rgba(0, 0, 255, .2)">
        <Flex justifyContent="space-between" marginX="18px">
          <Text fontSize="28" fontWeight="bold">
            게시물
          </Text>
          <SortPopover></SortPopover>
        </Flex>
        {show.map((c, i) => {
          return (
            <Box m="10" borderBottom="1px solid" borderColor="gray">
              <Card p="10">
                <CardHeader>
                  <Heading size="md">{c.title}</Heading>
                </CardHeader>
                <CardBody>
                  <Stack divider={<StackDivider />} spacing="2">
                    <Flex direction="column">
                      <Text pt="2" fontSize="1em">
                        LIKE: {c.like}
                      </Text>
                      <Text pt="2" fontSize="1em">
                        DATE: {c.date}
                      </Text>
                    </Flex>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          );
        })}
        <Center>
          <Text fontSize="28" fontWeight="bold">
            - {page} -
          </Text>
        </Center>
      </Box>
      <Center position="relative" top="10px">
        <button
          class="w-btn w-btn-indigo"
          onClick={() => {
            let p = page - 1;
            setPage(p);
          }}
        >
          이전
        </button>
        {button.map((c, i) => {
          return (
            <button
              class="w-btn w-btn-indigo"
              onClick={() => {
                setPage(i + 1);
              }}
            >
              {c}
            </button>
          );
        })}
        <button
          class="w-btn w-btn-indigo"
          onClick={() => {
            let p = page + 1;
            setPage(p);
          }}
        >
          다음
        </button>
      </Center>
    </div>
  );
};

export default Pagination;

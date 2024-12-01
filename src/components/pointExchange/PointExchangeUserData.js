import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Stack,
  Text,
  Image,
  Flex,
  Box,
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react"; // 절대 경로로 무조건
import { usePoint, useSetUserPoint, useName } from "../../redux/userData";

const UserData = () => {
  // const userId = sessionStorage.getItem("authToken");
  // console.log(userId);
  // const jsonUser = localStorage.getItem("totalUserData");
  // const users = JSON.parse(jsonUser);
  // const addItem = () => {
  //   users.map((u) => {
  //     if (u.id === Number(userId)) u.exchange.push(Math.floor(Math.random() * 1001));
  //   });
  //   localStorage.setItem("totalUserData", JSON.stringify(users));
  // };
  const user = useName();
  const userpoint = usePoint();
  return (
    <Box
      position="relative"
      top="-100px"
      marginY="auto"
      borderTop="2px solid"
      borderBottom="2px solid"
      borderColor="black"
      paddingX="2"
      w="290px"
      padding="20px"
    >
      <Box width="100%">
        <Flex justify="flex-end">
          <Text fontSize="2xl" fontWeight="bold">
            {user}
          </Text>
        </Flex>
      </Box>
      <Text
        color="black"
        fontSize="3xl"
        fontWeight="bold"
        marginLeft="20px"
        marginTop="10px"
        textAlign="end"
      >
        {userpoint}POINT
      </Text>
    </Box>
  );
};
export default UserData;

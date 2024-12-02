import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react"; // 절대 경로로 무조건
import { usePoint, useName } from "../../redux/userData";

const UserData = () => {
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

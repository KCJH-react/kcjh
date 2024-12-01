import React,{useState,useEffect}from "react"
import { Card, CardHeader, CardBody, CardFooter, HStack, Stack, Text,Image,Flex,Box,Center,Grid, GridItem} from "@chakra-ui/react" // 절대 경로로 무조건
import { LuCheck, LuX } from "react-icons/lu"
import { useRef } from "react";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setPoint, addChallengeSuccess } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import {usePoint, useSetUserPoint, useName} from '../../redux/userData'
import ExchangeModal from './exchangeModal';

const UserData = () =>{
  
    const user = useName();
    const userpoint = usePoint();
    return (
      <Box position="relative" top="-100px" marginY="auto" borderTop="2px solid" borderBottom="2px solid" borderColor="black" paddingX="2" w="290px" padding="20px"> 
      <Box width="100%">
        <Flex justify="flex-end">
          <Text  fontSize="2xl" fontWeight="bold">{user}</Text>
        </Flex>
      </Box>
      <Text color="black" fontSize="3xl" fontWeight="bold" marginLeft="20px" marginTop="10px" textAlign="end">{userpoint}POINT</Text> 
    </Box>
    )
  }
export default UserData;
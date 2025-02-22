import React, { useState } from "react";
import { Box, Flex, Image, Input, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import userIcon from "../../asset/user-icon.png";
import lockIcon from "../../asset/lock-icon.png";
import axios from "axios";
import styled from "styled-components";
import apiClient from "../../apiClient";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = apiClient("login", formData);
  };
  return (
    <Container>
      <Title>RANDOM CHALLENGE</Title>

      <FormContainer>
        <StyledInputContainer>
          <img src={userIcon} alt="User Icon" width="40" style={{ marginRight: "16px" }} />
          <StyledInput
            type="text"
            placeholder="ID or Email"
            name="email" // ✅ name 추가
            value={formData.email}
            onChange={handleChange}
          />
        </StyledInputContainer>

        <StyledInputContainer mb="32px">
          <img src={lockIcon} alt="Lock Icon" width="40" style={{ marginRight: "16px" }} />
          <StyledInput
            type="password"
            placeholder="Password"
            name="password" // ✅ name 추가
            value={formData.password}
            onChange={handleChange}
          />
        </StyledInputContainer>

        <StyledButton onClick={handleSubmit}>로그인</StyledButton>
        {/* <SignUpText onClick={handleSignUpClick}>회원가입</SignUpText> */}
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: #f5f5f5;
  padding-top: 150px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4caf50;
  margin-bottom: 48px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 700px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 30px;
  padding: 16px 24px;
  margin-bottom: ${(props) => props.mb || "24px"};
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  outline: none;
`;

const StyledButton = styled.button`
  background-color: #bfe18b;
  color: white;
  width: 100%;
  height: 60px;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 24px;
  transition: background 0.3s;

  &:hover {
    background-color: #a8d178;
  }
`;

const SignUpText = styled.p`
  text-align: center;
  font-weight: bold;
  color: #4caf50;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Login;

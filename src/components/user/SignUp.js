import React, { useState } from "react";
import { Box, Flex, Input, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// 1. 이메일 작성.
// 2. 이메일 인증 진행.
// 3. 이메일 인증 번호 작성.
// 4. 나머지 입력값 작성.
// 5. 회원가입 버튼 클릭 후 생성.

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    alert("회원가입 성공!");
    navigate("/login");
  };
  const handleEmailVerify = async (email) => {
    try {
      const response = await axios.post("http://localhost:8020/api/v1/email/send", { email });
      console.log("Email sent successfully:", response.data);
      alert("이메일이 성공적으로 전송되었습니다.");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("이메일 전송에 실패했습니다.");
    }
  };

  return (
    <Wrapper>
      <Title as="h1">RANDOM CHALLENGE</Title>

      <FormContainer>
        <StyledInput
          type="text"
          placeholder="ID"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => handleEmailVerify(email)}>인증</button>

        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignUpButton onClick={handleSignUp}>회원가입</SignUpButton>
      </FormContainer>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: #f7fafc;
  padding-top: 150px;
`;

const Title = styled(Heading)`
  margin-bottom: 12px;
  color: #4caf50;
  font-size: 2rem;
`;

const FormContainer = styled(Flex)`
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled(Input)`
  background-color: #f7fafc;
  border-radius: 9999px;
  font-size: 1.125rem;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  margin: 10px;
`;

const SignUpButton = styled(Button)`
  background-color: #bfe18b;
  color: white;
  width: 100%;
  height: 60px;
  font-size: 2xl;
  padding: 0 2rem;
`;

export default SignUp;

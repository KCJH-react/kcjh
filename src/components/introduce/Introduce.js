import React from "react";
import { Box, Heading, Text, VStack, Stack, Image } from "@chakra-ui/react";
import styled from "styled-components";

const FeaturesSection = styled.section`
  margin-bottom: 64px;
`;

const FeaturesTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 32px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
`;

const FeatureCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #ffffff;
  font-size: 24px;
  background-color: ${(props) => props.color};
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #000;
  text-align: left;
  margin: "10px";
`;

function Feature({ title, description }) {
  return (
    <FeatureCard>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureCard>
  );
}

function Introduce() {
  // return (
  //   <Box w="100%" minH="100vh" bg="#F7FCED" p={8} display="flex" alignItems="center" justifyContent="center">
  //     <VStack spacing={8} maxW="800px">
  //       <Heading as="h1" size="2xl" color="#4CAF50" textAlign="center">
  //         RANDOM CHALLENGE에 오신 것을 환영합니다
  //       </Heading>
  //       <Stack spacing={4} textAlign="center">
  //         <Text fontSize="lg" color="gray.700">
  //           RANDOM CHALLENGE는 여러분이 삶의 다양한 측면에서 성장하고 발전할 수 있도록 흥미로운 도전을 제공하는 플랫폼입니다. 건강과 피트니스부터 새로운 기술 습득에 이르기까지, 항상 여러분이 탐험하고 정복할 수 있는 새로운 도전이 기다리고 있습니다.
  //         </Text>
  //         <Text fontSize="lg" color="gray.700">
  //           우리의 커뮤니티에 참여하여 여러분의 여정을 공유하고, 다른 사람들에게서 영감을 얻으며, 도전 과정을 통해 보상을 받아보세요. 일일 챌린지부터 장기 목표까지, 여러분의 한계를 넘어서도록 도와줄 지지적인 환경을 제공합니다.
  //         </Text>
  //         <Text fontSize="lg" color="gray.700">
  //           오늘 바로 여러분의 모험을 시작하세요. RANDOM CHALLENGE를 수락하고, 여러분이 얼마나 멀리 갈 수 있는지 확인해 보세요!
  //         </Text>
  //       </Stack>
  //     </VStack>
  //   </Box>
  // );
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(rgba(198,234,130,0.7), #FFFFFF)",
        padding: "48px 16px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <header
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "16px",
            }}
          >
            RANDOM CHALLENGE
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "#666",
            }}
          ></p>
        </header>

        <FeaturesSection>
          <FeaturesTitle>TaskMaster가 제공하는 기능</FeaturesTitle>

          <FeatureGrid>
            <FeatureCard textAlign="left">
              <FeatureTitle>주요 라이브러리</FeatureTitle>
              <FeatureDescription>" CHAKRA UI"</FeatureDescription>
              <FeatureDescription>"REDUX"</FeatureDescription>
              <FeatureDescription>"STYLED-COMPONENTS"</FeatureDescription>
              <FeatureDescription>"ROUTER"</FeatureDescription>
            </FeatureCard>
            <Feature
              title="일정 추적"
              description="작업 기한을 설정하고 진행 상황을 실시간으로 모니터링할 수 있습니다."
            />
            <Feature
              title="팀 협업"
              description="팀원들과 작업을 공유하고 실시간으로 소통할 수 있습니다."
            />
            <Feature
              title="자동화 기능"
              description="반복적인 작업을 자동화하여 생산성을 높일 수 있습니다."
            />
          </FeatureGrid>
        </FeaturesSection>

        <section
          style={{
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "16px",
            }}
          >
            시작하기
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              marginBottom: "32px",
            }}
          >
            TaskMaster는 무료로 시작할 수 있습니다. 지금 바로 가입하고 작업 관리의 새로운 경험을
            만나보세요.
          </p>
          <a
            href="#"
            style={{
              display: "inline-block",
              background: "#007BFF",
              color: "#FFFFFF",
              fontSize: "18px",
              fontWeight: "bold",
              padding: "12px 24px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "background-color 0.3s",
            }}
          >
            무료로 시작하기
          </a>
        </section>
      </div>
    </div>
  );
}

export default Introduce;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, rgba(198, 234, 130, 0.7), #ffffff);
  padding: 48px 16px;
  font-family: Arial, sans-serif;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 64px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #666;
`;

const FeaturesSection = styled.section`
  margin-bottom: 64px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
`;

const FeatureCard = styled.div`
  background: #ffffff;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const Section = styled.section`
  text-align: center;
`;

const Button = styled.a`
  display: inline-block;
  background: #38b2ac;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
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
  return (
    <Container>
      <Content>
        <Header>
          <Title>RANDOM CHALLENGE</Title>
          <Subtitle>무기력하게 하루를 보내는 당신에게 RANDOM CHALLENGE를 소개합니다</Subtitle>
        </Header>

        <FeaturesSection>
          <FeatureGrid>
            <Feature
              title={"하루에 한번 작은 챌린지를 실천해보세요!"}
              description={
                "우리의 웹 서비스는 매일 새로운 도전 과제를 제공합니다. 사용자가 동기를 얻고 일상의 목표를 성취함으로써 더 보람찬 하루를 보낼 수 있도록 돕는 플랫폼입니다. 이 서비스는 도전을 통해 긍정적인 변화를 추구하고 성취감을 느낄 수 있도록 설계되었습니다."
              }
            />
          </FeatureGrid>
          <FeatureGrid>
            <Feature
              title={"목표를 달성하고 포인트를 적립해보세요!"}
              description={
                "랜덤으로 생성된 도전 과제를 수행해서 얻은 보상으로 영화관람권, 문화상품권, 등의 다양한 상품과 교환할 수 있습니다."
              }
            />
          </FeatureGrid>
          <FeatureGrid>
            <Feature
              title={"친구들과 챌린지를 공유해보세요!"}
              description={
                "친구들의 챌린지를 보거나 사용자의 챌린지를 공유할 수 있습니다. 서로의 챌린지를 확인하고 이야기를 나눠 보세요."
              }
            />
          </FeatureGrid>
        </FeaturesSection>

        <Section>
          <Button href="/SelfChallenge">바로 시작하기</Button>
        </Section>
      </Content>
    </Container>
  );
}

export default Introduce;

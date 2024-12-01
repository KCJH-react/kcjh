import { useState } from "react";
import { usePoint, useSetUserPoint } from "../../redux/userData";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// styled-components 스타일 정의
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff; /* 흰색 배경 */
  border-radius: 10px; /* 둥근 모서리 */
  width: 400px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #000;
  }
`;

const Button = styled.button`
  background-color: #4caf50; /* 초록색 배경 */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #45a049; /* 밝은 초록 */
  }

  &:active {
    transform: scale(0.95); /* 클릭 시 살짝 축소 */
  }

  &.secondary {
    background-color: #f44336; /* 빨간색 배경 */
    &:hover {
      background-color: #d32f2f; /* 밝은 빨강 */
    }
  }
`;

const Message = styled.p`
  font-size: 18px;
  color: #333;
  margin-top: 20px;
  text-align: center;

  &.error {
    color: #e53935; /* 빨간색 텍스트 */
    font-weight: bold;
  }
`;

// ExchangeModal 컴포넌트
const ExchangeModal = ({ setIsModalOpen, content }) => {
  const userId = sessionStorage.getItem("authToken");
  console.log(userId);
  const jsonUser = localStorage.getItem("totalUserData");
  const users = JSON.parse(jsonUser);
  const addItem = () => {
    users.map((u) => {
      if (u.id === Number(userId)) u.exchange.push(Math.floor(Math.random() * 1001));
    });
    localStorage.setItem("totalUserData", JSON.stringify(users));
  };

  const [test, setTest] = useState(true);
  const userpoint = usePoint();
  const dispatch = useDispatch();
  const setPoint = useSetUserPoint(dispatch);

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
        <h2>포인트 교환</h2>
        <Message>
          {content.name}의 {content.points} 포인트입니다. 교환하시겠습니까?
        </Message>
        {!test && <Message className="error">고객님의 포인트가 부족합니다.</Message>}
        <Button
          onClick={() => {
            const exchangedPoint = Number(userpoint) - Number(content.points);
            if (exchangedPoint < 0) {
              setTest(false);
              return;
            }
            setPoint(exchangedPoint);
            addItem();
            setIsModalOpen(false);
          }}
        >
          교환하기
        </Button>
        <Button className="secondary" onClick={() => setIsModalOpen(false)}>
          닫기
        </Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ExchangeModal;

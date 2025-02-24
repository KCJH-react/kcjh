import React, { useState } from "react";
import { Box, VStack, Flex, Text, Image, Button, Select, Input } from "@chakra-ui/react";
import ExerciseIcon from "../../asset/icon-exercise.png";
import StudyIcon from "../../asset/icon-study.png";
import MindIcon from "../../asset/icon-mind.png";
import Challenge from "./Challenge";
import { useLocation, useNavigate } from "react-router-dom";

function MakeChallenge() {
  const [category, setCategory] = useState("Study");
  const [content, setContent] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [points, setPoints] = useState(10);

  const authToken = sessionStorage.getItem("authToken");
  const userData = JSON.parse(localStorage.getItem("totalUserData"));
  const userIndex = userData.findIndex((user) => String(user.id) === String(authToken));
  const currentUser = userData[userIndex];

  const navigate = useNavigate();

  const handleDifficultyChange = (value) => {
    setDifficulty(value);
    if (value === "Easy") setPoints(10);
    else if (value === "Medium") setPoints(30);
    else if (value === "Hard") setPoints(50);
  };

  const handleAddChallenge = () => {
    const newChallenge = {
      id: Challenge.length,
      category,
      icon: category === "Exercise" ? ExerciseIcon : category === "Study" ? StudyIcon : MindIcon,
      content,
      difficulty,
      points,
    };
    if (!newChallenge.content.trim()) {
      alert("챌린지 내용을 채워주세요.");
      return;
    }
    currentUser.personalChallengeList.push(newChallenge);
    userData[userIndex] = currentUser;
    localStorage.setItem("totalUserData", JSON.stringify(userData));
    Challenge.push(newChallenge);
    alert("새로운 챌린지가 추가되었습니다!");

    const randomChallenge = Challenge[Math.floor(Math.random() * Challenge.length)];
    navigate("/SelfChallenge", { state: randomChallenge });
  };

  return (
    <div
      style={{
        padding: "0px 180px",
        background: "linear-gradient(rgba(198, 234, 130, 0.7) 50%, white 50%)",
        height: "150vh",
      }}
    >
      <Flex direction="column" align="center" justify="center" p="8">
        <Flex direction="row" align="center" mx="8" mt="4" width="100%">
          <Flex direction="column" align="center" flex="1" mx="8">
            <Text fontSize="2xl" fontWeight="bold" mb="4">
              RANDOM CHALLENGE:
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                ml={2}
                width="150px"
                display="inline-block"
              >
                <option value="Study">Study</option>
                <option value="Exercise">Exercise</option>
                <option value="Mind">Mind</option>
              </Select>
            </Text>

            <Box
              id="B_display"
              bg="white"
              p={10}
              width="800px"
              height="600px"
              display="flex"
              justifyContent="center"
              borderRadius="lg"
              boxShadow="md"
            >
              <VStack>
                <Text id="Point" fontWeight="bold">
                  {points} 포인트
                </Text>
                <Box
                  id="S_display"
                  bg="gray.100"
                  width="500px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="lg"
                  p={4}
                >
                  <VStack>
                    <Input
                      placeholder="챌린지 내용을 입력하세요"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      mt={6}
                    />
                    <Image
                      src={
                        category === "Exercise"
                          ? ExerciseIcon
                          : category === "Study"
                          ? StudyIcon
                          : MindIcon
                      }
                      alt="Icon"
                      boxSize="150px"
                      mt={1}
                    />
                  </VStack>
                </Box>

                <Box display="flex" flexDirection="row" alignItems="center">
                  <Box
                    bg="gray.100"
                    display="flex"
                    width="300px"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="40px"
                    mt="3"
                    p={4}
                  >
                    <Text>난이도: </Text>
                    <Select
                      value={difficulty}
                      onChange={(e) => handleDifficultyChange(e.target.value)}
                      ml={2}
                      width="100px"
                    >
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </Select>
                  </Box>
                </Box>

                <Button colorScheme="teal" onClick={handleAddChallenge} mt={4}>
                  챌린지 만들기
                </Button>
              </VStack>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default MakeChallenge;

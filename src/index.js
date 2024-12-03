import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";

if (!localStorage.getItem("totalUserData")) {
  const initialData = [
    {
      id: 1,
      name: "김지훈",
      point: 120,
      email: "kim1234@naver.com",
      password: "abcd",
      startDate: "2024-11-20",
      challengeListNum: 8,
      challengeSuccessList: [{ "id": 0,"id":1,"id":2,"id":3,"id":4,"id":5,"id":6,"id":7,"id":8  }],
      personalChallengeList: [],
      currentChallengeNum: 0,
      currentChallenge: [],
      exchange: [],
      friendList: [{ id: 2, name: "이수진", challengeSuccess: 5 }],
      requestList: [{ id: 3, name: "박정민", challengeSuccess: 12 }],
      responseList: [{ id: 4, name: "정우성", challengeSuccess: 15 }],
    },
    {
      id: 2,
      name: "이수진",
      point: 90,
      email: "lee1234@naver.com",
      password: "efgh",
      startDate: "2024-11-18",
      challengeListNum: 5,
      challengeSuccessList: [{ "id": 0,"id":1,"id":2,"id":3,"id":4,"id":5,"id":6,"id":7,"id":8  }],
      personalChallengeList: [],
      currentChallengeNum: 0,
      currentChallenge: [],
      exchange: [],
      friendList: [{ id: 1, name: "김지훈", challengeSuccess: 8 }],
      requestList: [{ id: 4, name: "정우성", challengeSuccess: 15 }],
      responseList: [{ id: 5, name: "이동호", challengeSuccess: 7 }],
    },
    {
      id: 3,
      name: "박정민",
      point: 75,
      email: "park1234@naver.com",
      password: "ijkl",
      startDate: "2024-11-15",
      challengeListNum: 12,
      challengeSuccessList: [{ "id": 0,"id":1,"id":2,"id":3,"id":4,"id":5,"id":6,"id":7,"id":8  }],
      personalChallengeList: [],
      currentChallengeNum: 0,
      currentChallenge: [],
      exchange: [],
      friendList: [{ id: 4, name: "정우성", challengeSuccess: 15 }],
      requestList: [{ id: 5, name: "이동호", challengeSuccess: 7 }],
      responseList: [{ id: 6, name: "정하영", challengeSuccess: 6 }],
    },
    {
      id: 4,
      name: "정우성",
      point: 110,
      email: "jung1234@naver.com",
      password: "mnop",
      startDate: "2024-11-10",
      challengeListNum: 15,
      challengeSuccessList: [{ "id": 0,"id":1,"id":2,"id":3,"id":4,"id":5,"id":6,"id":7,"id":8  }],
      personalChallengeList: [],
      currentChallengeNum: 0,
      currentChallenge: [],
      exchange: [],
      friendList: [{ id: 5, name: "이동호", challengeSuccess: 7 }],
      requestList: [{ id: 2, name: "이수진", challengeSuccess: 5 }],
      responseList: [{ id: 1, name: "김지훈", challengeSuccess: 8 }],
    },
    {
      id: 5,
      name: "이동호",
      point: 100,
      email: "lee2345@naver.com",
      password: "qrst",
      startDate: "2024-11-05",
      challengeListNum: 7,
      challengeSuccessList: [{ "id": 0,"id":1,"id":2,"id":3,"id":4,"id":5,"id":6,"id":7,"id":8  }],
      personalChallengeList: [],
      currentChallengeNum: 0,
      currentChallenge: [],
      exchange: [],
      friendList: [{ id: 3, name: "박정민", challengeSuccess: 12 }],
      requestList: [{ id: 1, name: "김지훈", challengeSuccess: 8 }],
      responseList: [{ id: 2, name: "이수진", challengeSuccess: 5 }],
    },
    {
      id: 6,
      name: "한지은",
      point: 80,
      email: "han1234@naver.com",
      password: "wxyz",
      startDate: "2024-11-01",
      challengeListNum: 9,
      challengeSuccessList: [{ "id": 0,"id":1,"id":2,"id":3,"id":4,"id":5,"id":6,"id":7,"id":8  }],
      personalChallengeList: [],
      currentChallengeNum: 0,
      currentChallenge: [],
      exchange: [],
      friendList: [{ id: 3, name: "박정민", challengeSuccess: 12 }],
      requestList: [{ id: 4, name: "정우성", challengeSuccess: 15 }],
      responseList: [{ id: 5, name: "이동호", challengeSuccess: 7 }],
    },
  ];
  localStorage.setItem("totalUserData", JSON.stringify(initialData));
  //localStorage.setItem("friends", JSON.stringify(["Friend1", "Friend2", "Friend3"])); // 친구 리스트
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

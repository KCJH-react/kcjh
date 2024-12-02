import { createSlice } from "@reduxjs/toolkit";

const savedUserData = localStorage.getItem("totalUserData");
const parsedUserData = JSON.parse(savedUserData);
console.log(parsedUserData);
const userId = sessionStorage.getItem("authToken");
const user = userId ? parsedUserData.find((u) => u.id === Number(userId)) : null;
const initialState = user || {
  id: -1,
  name: "USER",
  point: 100,
  email: "qwer1234@naver.com",
  password: "1234",
  startDate: "2024-11-29",
  exchange: [],
  challengeListNum: 10, // 챌린지 성공 목록 계정정보에 챌린지 성공률 표시 위해서.
  challengeSuccessList: [], // 챌린지 성공 목록
  personalChallengeList: [], // 개인 챌린지 목록
  currentChallenge: 0,
  friendList: [],
  requestList: [],
  responseList: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPoint: (state, action) => {
      state.point = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setStartDate: (state, action) => {
      state.password = action.payload;
    },
    setChallengeListNum: (state, action) => {
      state.challengeListNum = action.payload;
    },
    addExchange: (state, action) => {
      state.exchange.push(action.payload);
    },
    addChallengeSuccess: (state, action) => {
      state.challengeSuccessList.push(action.payload);
    },
    setCurrentChallenge: (state, action) => {
      state.currentChallenge = action.payload;
    },
    removeChallengeSuccess: (state, action) => {
      state.challengeSuccessList = state.challengeSuccessList.filter(
        (challenge) => challenge.id !== action.payload
      );
    },
    addChallenge: (state, action) => {
      state.challengeList.push(action.payload);
    },
    removeChallenge: (state, action) => {
      state.challengeList = state.challengeList.filter(
        (challenge) => challenge.id !== action.payload
      );
    },
    addPersonalChallenge: (state, action) => {
      state.personalChallengeList.push(action.payload);
    },
    removePersonalChallenge: (state, action) => {
      state.personalChallengeList = state.personalChallengeList.filter(
        (challenge) => challenge.id !== action.payload
      );
    },
    addFriend: (state, action) => {
      const newFriend = state.responseList.filter((challenge) => {
        if (challenge.name === action.payload)
          return { name: challenge.name, challengeSuccess: challenge.challengeSuccess };
      });
      state.friendList.push(...newFriend);
      state.responseList = state.responseList.filter(
        (challenge) => challenge.name !== action.payload
      );
    },
    removeFriend: (state, action) => {
      state.friendList = state.friendList.filter((challenge) => challenge.id !== action.payload);
    },
    addRequestList: (state, action) => {
      state.requestList.push(action.payload);
    },
    removeRequestList: (state, action) => {
      state.requestList = state.requestList.filter(
        (challenge) => challenge.name !== action.payload
      );
    },
    addResponseList: (state, action) => {
      state.responseList.push(action.payload);
    },
    removeResponseList: (state, action) => {
      state.responseList = state.requestList.filter(
        (challenge) => challenge.name !== action.payload
      );
    },
  },
});

export const {
  setId,
  setName,
  setPoint,
  setEmail,
  setStartDate,
  setPassword,
  setChallengeListNum,
  addChallengeSuccess,
  removeChallengeSuccess,
  addPersonalChallenge,
  removePersonalChallenge,
  setCurrentChallenge,
  addFriend,
  removeFriend,
  addRequestList,
  removeRequestList,
  addResponseList,
  removeResponseList,
} = userSlice.actions;

export default userSlice.reducer;

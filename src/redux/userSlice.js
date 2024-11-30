import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'USER',
  point: 100,
  email: 'qwer1234@naver.com',
  password: '1234',
  startDate: '2024-11-29',
  challengeListNum: 10, // 챌린지 성공 목록 계정정보에 챌린지 성공률 표시 위해서.
  challengeSuccessList: [], // 챌린지 성공 목록
  personalChallengeList: [], // 개인 챌린지 목록
  currentChallenge: 0,
  friendList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
    addChallengeSuccess: (state, action) => {
      state.challengeSuccessList.push(action.payload);
    },
    setCurrentChallenge: (state, action) => {
      state.currentChallenge = action.payload
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
      state.friendList.push(action.payload);
    },
    removeFriend: (state, action) => {
      state.friendList = state.friendList.filter(
        (challenge) => challenge.id !== action.payload
      );
    },
  },
});

export const {
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
  removeFriend
} = userSlice.actions;

export default userSlice.reducer;
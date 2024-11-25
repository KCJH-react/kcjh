import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  point: 0,
  challengeSuccessList: [], // 챌린지 성공 목록
  personalChallengeList: [], // 개인 챌린지 목록
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPoint: (state, action) => {
      state.point = action.payload;
    },
    addChallengeSuccess: (state, action) => {
      state.challengeSuccessList.push(action.payload);
    },
    removeChallengeSuccess: (state, action) => {
      state.challengeSuccessList = state.challengeSuccessList.filter(
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
  },
});

export const {
  setPoint,
  addChallengeSuccess,
  removeChallengeSuccess,
  addPersonalChallenge,
  removePersonalChallenge,
} = userSlice.actions;

export default userSlice.reducer;

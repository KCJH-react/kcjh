import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import memberReducer from './memberSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    members: memberReducer
  },
});
export default store;

//데이터 읽기 예시
// import { useSelector } from 'react-redux';

// const UserInfo = () => {
//   const { point, challengeSuccessList, personalChallengeList } = useSelector(
//     (state) => state.user
//   );

//   return (
//     <div>
//       <p>Points: {point}</p>
//       <p>Successful Challenges: {challengeSuccessList.length}</p>
//       <p>Personal Challenges: {personalChallengeList.length}</p>
//     </div>
//   );
// };

// 데이터 업데이트 예시(삭제, 변경)
// import { useDispatch } from 'react-redux';
// import { setPoint, addChallengeSuccess } from './userSlice';

// const UpdateUser = () => {
//   const dispatch = useDispatch();

//   const addPoint = () => dispatch(setPoint(100));
//   const addChallenge = () =>
//     dispatch(addChallengeSuccess({ id: 1, name: 'New Challenge' }));

//   return (
//     <div>
//       <button onClick={addPoint}>Add Points</button>
//       <button onClick={addChallenge}>Add Challenge</button>
//     </div>
//   );
// };


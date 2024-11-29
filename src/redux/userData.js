import { useSelector } from 'react-redux';
import { setPoint, setEmail, setName, setPassword, setChallengeListNum, addFriend, removeFriend } from './userSlice';

export const useName = () => {
    const { name } = useSelector(
      (state) => state.user
    );
    return name;
};
export const usePoint = () => {
  const { point } = useSelector(
    (state) => state.user
  );
  return point;
};
export const usePassword = () => {
  const { password } = useSelector(
    (state) => state.user
  );
  return password;
};
export const useStartDate = () => {
  const { startDate } = useSelector(
    (state) => state.user
  );
  return startDate;
};
export const useEmail = () => {
  const { email } = useSelector(
    (state) => state.user
  );
  return email;
};
//사용자 정보 get함수.

export const useChallengeListNum = () => {
  const { challengeListNum } = useSelector(
    (state) => state.user
  );
  return challengeListNum;
};
export const useChallengeSuccessList = () => {
    const { challengeSuccessList } = useSelector(
      (state) => state.user
    );
    return challengeSuccessList;
};
export const usePersonalChallengeList = () => {
  const { personalChallengeList } = useSelector(
    (state) => state.user
  );

  return personalChallengeList;
};
//챌린지 정보 get함수.

export const useFriendList = () => {
  const { friendList } = useSelector(
    (state) => state.user
  );

  return friendList;
};
//친구 정보 get함수.

export const useSetUserPoint = (dispatch) => {
    const setUserPoint = (value) => {
      dispatch(setPoint(value));
    };
    return setUserPoint;
};
export const useSetUserEmail = (dispatch) => {
  const setUserEmail = (value) => {
    dispatch(setEmail(value));
  };
  return setUserEmail;
};
export const useSetUserName = (dispatch) => {
  const setUserName = (value) => {
    dispatch(setName(value));
  };
  return setUserName;
};
export const useSetUserPw = (dispatch) => {
  const setUserPw = (value) => {
    dispatch(setPassword(value));
  };
  return setUserPw;
};
//유저 정보 set함수.

export const useSetChallengeListNum = (dispatch) => {
  const setUserChallengeListNum = (value) => {
    dispatch(setChallengeListNum(value));
  };
  return setUserChallengeListNum;
};
//챌린지 정보 set함수.

export const useAddFriendListNum = (dispatch) => {
  const setUserAddFriend = (value) => {
    dispatch(addFriend(value));
  };
  return setUserAddFriend;
};
export const useRemoveFriendListNum = (dispatch) => {
  const setUserRemoveFriend = (value) => {
    dispatch(removeFriend(value));
  };
  return setUserRemoveFriend;
};
//친구 정보 set함수.

//주의사항
//1. 사용자 저의 함수는 무조건 use로 시작해야 됨.
//2. useSetUserPoint 형식 참고해서 다른 redux 함수 만들 것.

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


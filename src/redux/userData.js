import { 
  useSelector 
} from 'react-redux';
import { 
  setId, 
  setPoint, 
  setEmail, 
  setName, 
  setPassword, 
  setChallengeListNum, 
  addFriend, 
  removeFriend, 
  addRequestList, 
  removeRequestList, 
  addResponseList, 
  removeResponseList,
  setCurrentChallenge
} from './userSlice';

export const useId = () => {
  const { id } = useSelector(
    (state) => state.user
  );
  return id;
};
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
export const useCurrentChallenge = () => {
  const { currentChallenge } = useSelector(
    (state) => state.user
  );
  return currentChallenge;
};
//챌린지 정보 get함수.

export const useFriendList = () => {
  const { friendList } = useSelector(
    (state) => state.user
  );

  return friendList;
};
//친구 정보 get함수.
export const useRequestList = () => {
  const { requestList } = useSelector(
    (state) => state.user
  );

  return requestList;
};
//

export const useResponseList = () => {
  const { responseList } = useSelector(
    (state) => state.user
  );

  return responseList;
};
//

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
export const useSetCurrentChallenge = (dispatch) => {
  const setChallenge = (value) => {
    dispatch(setCurrentChallenge(value));
  };
  return setChallenge;
};
//챌린지 정보 set함수.

export const useAddFriendList = (dispatch) => {
  const setUserAddFriend = (value) => {
    dispatch(addFriend(value));
  };
  return setUserAddFriend;
};
export const useRemoveFriendList = (dispatch) => {
  const setUserRemoveFriend = (value) => {
    dispatch(removeFriend(value));
  };
  return setUserRemoveFriend;
};
//친구 정보 set함수.
export const useAddRequestList = (dispatch) => {
  const setUserAddRequestList = (value) => {
    dispatch(addRequestList(value));
  };
  return setUserAddRequestList;
};
export const useRemoveRequestList = (dispatch) => {
  const setUserRemoveRequestList = (value) => {
    dispatch(removeRequestList(value));
  };
  return setUserRemoveRequestList;
};
export const useAddResponseList = (dispatch) => {
  const setUserAddResponseList = (value) => {
    dispatch(addResponseList(value));
  };
  return setUserAddResponseList;
};
export const useRemoveResponseList = (dispatch) => {
  const setUserRemoveResponseList = (value) => {
    dispatch(removeResponseList(value));
  };
  return setUserRemoveResponseList;
};

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

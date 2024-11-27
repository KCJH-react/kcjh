import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPoint, addChallengeSuccess } from '../userSlice';

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
export const useChallengeSuccessList = () => {
    const { challengeSuccessList } = useSelector(
      (state) => state.user
    );
    return challengeSuccessList;
  };
export const UserPersonalChallengeList = () => {
  const { personalChallengeList } = useSelector(
    (state) => state.user
  );

  return personalChallengeList;
};
//각 사용자 정보를 가져오는 get함수.

export const useSetUserPoint = (dispatch) => {
    const setUserPoint = (value) => {
      dispatch(setPoint(value));
    };
    return setUserPoint;
};
//사용자의 정보를 수정하는 set함수.

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


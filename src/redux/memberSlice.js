const initialState = {
    members: [
      { id: 1,  name: '이영희', challengeSuccess: 3 },
      { id: 2, name: '김철수', challengeSuccess: 5 },
      { id: 3, name: '박민수', challengeSuccess: 7 },
      { id: 4, name: '최지은', challengeSuccess: 4 },
      { id: 5, name: '한지민', challengeSuccess: 6 },
      { id: 6, name: '정하영', challengeSuccess: 2 },
      { id: 7, name: '유민호', challengeSuccess: 8 },
      { id: 8, name: '오세연', challengeSuccess: 1 },
      { id: 9, name: '강수진', challengeSuccess: 0 },
      { id: 10, name: '홍길동', challengeSuccess: 9 },
    ],
  };
  
  const updateMember = (id, name, challengeCount) => ({
    type: 'UPDATE_MEMBER',
    payload: { id, name, challengeCount },
  });
  
const memberReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_MEMBER':
        return {
          ...state,
          members: state.members.map((member) =>
            member.name === action.payload.name
              ? { ...member, challengeCount: action.payload.challengeCount }
              : member
          ),
        };
        case 'GET_ALL_MEMBERS':
            return {
              ...state, // 상태는 변경하지 않지만, 여기에 포함시켜도 됩니다.
            };
      
      default:
        return state;
    }
    
  };
  export default memberReducer;
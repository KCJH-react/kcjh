const initialState = {
    members: [
      { name: '이영희', challengeSuccess: 3 },
      { name: '김철수', challengeSuccess: 5 },
      { name: '박민수', challengeSuccess: 7 },
      { name: '최지은', challengeSuccess: 4 },
      { name: '한지민', challengeSuccess: 6 },
      { name: '정하영', challengeSuccess: 2 },
      { name: '유민호', challengeSuccess: 8 },
      { name: '오세연', challengeSuccess: 1 },
      { name: '강수진', challengeSuccess: 0 },
      { name: '홍길동', challengeSuccess: 9 },
    ],
  };
  
  const updateMember = (name, challengeCount) => ({
    type: 'UPDATE_MEMBER',
    payload: { name, challengeCount },
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
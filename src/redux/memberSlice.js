const initialState = {
    members: [
      { name: '김철수', challengeCount: 5 },
      { name: '이영희', challengeCount: 3 },
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
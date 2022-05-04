initialstate = {
  data: [],
};

const loginReducer = (state = initialstate, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'LOGIN':
      return {...state, ...payload};
      case 'LOGOUT':
        return {undefined, initialstate}
  
    default:
      return {...state};
  }
};

export default loginReducer;

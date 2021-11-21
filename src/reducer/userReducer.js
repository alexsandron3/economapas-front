import { USER_LOGIN } from '../actions/actions-types';
const INITIAL_STATE = {
  username: '',
  isLoggedin: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case USER_LOGIN:
      return { username: payload, isLoggedin: true };
    default:
      return state;
  }
};
export default userReducer;

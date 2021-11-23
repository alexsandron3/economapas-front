import { USER_LOGIN, DEFAULT_STATE } from '../actions/actions-types';
const INITIAL_STATE = {
  username: '',
  isLoggedin: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case USER_LOGIN:
      return { ...payload, isLoggedin: true };
    case DEFAULT_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
export default userReducer;

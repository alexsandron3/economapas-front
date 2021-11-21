import { USER_LOGIN } from '../actions/actions-types';
const INITIAL_STATE = {
  username: '',
  isLoggedin: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default userReducer;

import {
  NEW_GROUP,
  EDIT_GROUP,
  REFRESH_GROUP_LIST,
  DELETE_GROUP,
} from '../actions/actions-types';

const INITIAL_STATE = {
  groupList: [],
  refresh: false,
};

const groupReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case EDIT_GROUP:
      return { ...state, referesh: true };
    case NEW_GROUP:
      return { ...state, refresh: true };
    case DELETE_GROUP:
      return { ...state, refresh: true };
    case REFRESH_GROUP_LIST:
      return { ...state, refresh: false, groupList: payload };
    default:
      return state;
  }
};

export default groupReducer;

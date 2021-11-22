import {
  NEW_GROUP,
  EDIT_GROUP,
  REFRESH_GROUP_LIST,
} from '../actions/actions-types';

const INITIAL_STATE = {
  groupList: [],
};

const groupReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case EDIT_GROUP:
      return { ...state };
    case NEW_GROUP:
      return { ...state };
    case REFRESH_GROUP_LIST:
      return { ...state, groupList: payload };
    default:
      return state;
  }
};

export default groupReducer;

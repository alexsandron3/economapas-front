import { NEW_GROUP, EDIT_GROUP, RESET_STATUS } from '../actions/actions-types';

const INITIAL_STATE = {
  success: false,
  groupList: [
    { groupName: 'Grupo 1', selectedCities: ['Manaus - AM', 'Macapá - AP'] },
    { groupName: 'Grupo 2', selectedCities: ['Manaus - AM', 'Macapá - AP'] },
  ],
};

const groupReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case EDIT_GROUP:
      return { ...state, payload };
    case NEW_GROUP:
      return { ...state, success: true };
    case RESET_STATUS:
      return { ...state, success: false };
    default:
      return state;
  }
};

export default groupReducer;

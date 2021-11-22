import { NEW_GROUP, EDIT_GROUP } from '../actions/actions-types';

const INITIAL_STATE = {
  groupIndex: 0,
  groupList: [
    // { groupName: 'Grupo 1', selectedCities: ['Manaus - AM', 'Macapá - AP'] },
    // { groupName: 'Grupo 2', selectedCities: ['Manaus - AM', 'Macapá - AP'] },
  ],
};

const groupReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case EDIT_GROUP:
      return { ...state, payload };

    default:
      return state;
  }
};

export default groupReducer;

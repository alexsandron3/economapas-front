import { toast } from 'react-toastify';
import deleteGroupReq from '../services/deleteGroup';
import editGroupReq from '../services/editGroup';
import { fetchGroups } from '../services/fetchGroups';
import { fetchLogin } from '../services/fetchLogin';
import addGroupReq from '../services/newGroup';
import {
  NEW_GROUP,
  REFRESH_GROUP_LIST,
  USER_LOGIN,
  EDIT_GROUP,
  DELETE_GROUP,
  DEFAULT_STATE,
} from './actions-types';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const addGroup = (payload) => ({
  type: NEW_GROUP,
  payload,
});

export const updateGroup = (payload) => ({
  type: EDIT_GROUP,
  payload,
});

export const deleteGroup = (payload) => ({
  type: DELETE_GROUP,
  payload,
});

export const refreshGroupList = (payload) => ({
  type: REFRESH_GROUP_LIST,
  payload,
});

export const resetState = () => ({ type: DEFAULT_STATE });

export const newLogin = (payload) => async (dispatch) => {
  try {
    const {
      data: { success, message, userId },
    } = await fetchLogin(payload);
    if (success === 1) {
      toast.success(message, {
        pauseOnFocusLoss: false,
      });
      localStorage.setItem(
        'userInfo',
        JSON.stringify({
          username: payload.username,
          isLoggedin: true,
          userId,
        }),
      );
      dispatch(userLogin({ username: payload.username, userId }));
    } else {
      toast.error(message, {
        pauseOnFocusLoss: false,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const newGroup = (payload) => async (dispatch) => {
  try {
    const {
      data: { success, message },
    } = await addGroupReq(payload);

    if (success === 1) {
      toast.success(message, {
        pauseOnFocusLoss: false,
      });
      dispatch(addGroup());
    } else {
      toast.error(message, {
        pauseOnFocusLoss: false,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const fetchGroupList = (payload) => async (dispatch) => {
  try {
    const {
      data: { success, message, grupos },
    } = await fetchGroups(payload);

    if (success === 1) {
      dispatch(refreshGroupList(grupos));
    } else {
      toast.error(message, {
        pauseOnFocusLoss: false,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const editGroup = (payload) => async (dispatch) => {
  try {
    const {
      data: { success, message },
    } = await editGroupReq(payload);

    if (success === 1) {
      toast.success(message, {
        pauseOnFocusLoss: false,
      });
      dispatch(addGroup());
    } else {
      toast.error(message, {
        pauseOnFocusLoss: false,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeGroup = (payload) => async (dispatch) => {
  try {
    const {
      data: { success, message },
      data,
    } = await deleteGroupReq(payload);

    console.log(data);
    if (success === 1) {
      toast.success(message, {
        pauseOnFocusLoss: false,
      });
      dispatch(deleteGroup());
    } else {
      toast.error(message, {
        pauseOnFocusLoss: false,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
export default newGroup;

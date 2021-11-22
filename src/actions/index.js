import { toast } from 'react-toastify';
import { fetchGroups } from '../services/fetchGroups';
import { fetchLogin } from '../services/fetchLogin';
import addGroupReq from '../services/newGroup';
import { NEW_GROUP, REFRESH_GROUP_LIST, USER_LOGIN } from './actions-types';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const addGroup = (payload) => ({
  type: NEW_GROUP,
  payload,
});

export const refreshGroupList = (payload) => ({
  type: REFRESH_GROUP_LIST,
  payload,
});

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
      dispatch(userLogin(payload.username));
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
    } = await fetchGroups();

    if (success === 1) {
      toast.success(message, {
        pauseOnFocusLoss: false,
      });
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

export default newGroup;

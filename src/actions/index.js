import { toast } from 'react-toastify';
import { fetchLogin } from '../services/fetchLogin';
import addGroupReq from '../services/newGroup';
import { NEW_GROUP, RESET_STATUS, USER_LOGIN } from './actions-types';
export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const addGroup = (payload) => ({
  type: NEW_GROUP,
  payload,
});

export const resetStatus = () => ({ type: RESET_STATUS });

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

export default newGroup;

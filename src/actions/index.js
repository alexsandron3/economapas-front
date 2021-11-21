import { toast } from 'react-toastify';
import { fetchLogin } from '../services/fetchLogin';
import { USER_LOGIN } from './actions-types';
export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const newLogin = (payload) => async (dispatch) => {
  try {
    const {
      data: { success, message },
    } = await fetchLogin(payload);
    if (success === 1) {
      toast.success(message, {
        pauseOnFocusLoss: false,
      });
      localStorage.setItem(
        'userInfo',
        JSON.stringify({ username: payload.username, isLoggedin: true }),
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

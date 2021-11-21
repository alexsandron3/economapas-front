import { fetchLogin } from '../services/fetchLogin';
import { USER_LOGIN } from './actions-types';
export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const newLogin = (payload) => async (dispatch) => {
  try {
    const { data } = await fetchLogin(payload);
    console.log(data);
  } catch (error) {}
};

import axios from 'axios';
import { BASE_URL } from '../helpers/constantes';
const API_URL = `${BASE_URL}/user.php`;
export const fetchLogin = async ({ username, password }) => {
  const { data } = await axios({
    method: 'POST',
    url: API_URL,
    data: { username, password },
  });
  return { data };
};

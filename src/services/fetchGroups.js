import axios from 'axios';
import { BASE_URL } from '../helpers/constantes';
export const fetchGroups = async ({ userId }) => {
  const API_URL = `${BASE_URL}/group.php?userId=${userId}`;
  const { data } = await axios({
    method: 'GET',
    url: API_URL,
  });

  return { data };
};

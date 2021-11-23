import axios from 'axios';
import { BASE_URL } from '../helpers/constantes';

const API_URL = `${BASE_URL}/group.php`;

const deleteGroupReq = async ({ id, userId }) => {
  const { data } = await axios({
    method: 'DELETE',
    url: API_URL,
    data: { id, userId },
  });
  console.log({ id, userId });
  return { data };
};

export default deleteGroupReq;

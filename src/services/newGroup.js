import axios from 'axios';
import { BASE_URL } from '../helpers/constantes';

const API_URL = `${BASE_URL}/group.php`;

const addGroupReq = async (groupInfo) => {
  const { data } = await axios({
    method: 'POST',
    url: API_URL,
    data: groupInfo,
  });
  return { data };
};

export default addGroupReq;

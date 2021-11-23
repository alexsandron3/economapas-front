import axios from 'axios';
import { BASE_URL } from '../helpers/constantes';

const API_URL = `${BASE_URL}/group.php`;

const editGroupReq = async (groupInfo) => {
  console.log(groupInfo);
  const { data } = await axios({
    method: 'UPDATE',
    url: API_URL,
    data: groupInfo,
  });
  return { data };
};

export default editGroupReq;

// https://api-economapas.herokuapp.com/api

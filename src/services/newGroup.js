import axios from 'axios';

const API_URL =
  'http://localhost/desafios/economapas/economapas-API/api/group.php';

const addGroupReq = async (groupInfo) => {
  const { data } = await axios({
    method: 'POST',
    url: API_URL,
    data: groupInfo,
  });
  return { data };
};

export default addGroupReq;

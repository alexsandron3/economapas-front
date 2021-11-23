import axios from 'axios';

const API_URL = 'http://localhost/desafios/economapas/API/api/group.php';

const deleteGroupReq = async (id) => {
  const { data } = await axios({
    method: 'DELETE',
    url: API_URL,
    data: id,
  });
  return { data };
};

export default deleteGroupReq;

import axios from 'axios';
const API_URL =
  'http://localhost/desafios/economapas/economapas-API/api/user.php';
export const fetchLogin = async ({ username, password }) => {
  const { data } = await axios({
    method: 'POST',
    url: API_URL,
    data: { username, password },
  });
  return { data };
};

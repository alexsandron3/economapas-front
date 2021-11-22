import axios from 'axios';
const API_URL = 'http://api-economapas.herokuapp.com/api/group.php';
export const fetchGroups = async () => {
  const { data } = await axios({
    method: 'GET',
    url: API_URL,
  });

  return { data };
};

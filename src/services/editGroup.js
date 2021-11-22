import axios from 'axios';

const API_URL = 'http://api-economapas.herokuapp.com/api/group.php';

const editGroupReq = async (groupInfo) => {
  const { data } = await axios({
    method: 'UPDATE',
    url: API_URL,
    data: groupInfo,
  });
  return { data };
};

export default editGroupReq;
// http://api-economapas.herokuapp.com/api/group.php

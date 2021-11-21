const isLoggedin = () => {
  const storage = JSON.parse(localStorage.getItem('userInfo')) || [];
  // if (storage.isLoggedin === true) return true;
  // console.log(storage.isLoggedin === true);
  return storage.isLoggedin === true;
};

export default isLoggedin;

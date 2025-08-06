// session.js
const checkLogin = () => {
  const loggedIn = localStorage.getItem('loggedIn') === 'true' || sessionStorage.getItem('loggedIn') === 'true';
  if (!loggedIn && window.location.pathname.includes('idc.html')) {
    window.location.href = 'index.html';
  }
};

const setLogin = (remember) => {
  if (remember) localStorage.setItem('loggedIn', 'true');
  else sessionStorage.setItem('loggedIn', 'true');
};

const logout = () => {
  localStorage.removeItem('loggedIn');
  sessionStorage.removeItem('loggedIn');
};

checkLogin();

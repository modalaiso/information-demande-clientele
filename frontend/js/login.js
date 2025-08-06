// login.js
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const remember = document.getElementById('remember').checked;

  if (user === 'admin' && pass === 'abc_123') {
    setLogin(remember);
    window.location.href = 'idc.html';
  } else {
    document.getElementById('loginError').textContent = "Identifiants invalides.";
  }
});

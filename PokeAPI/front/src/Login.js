import React from 'react';

const clientId = 'Ov23liy5w5jlaWLV6S3i';
const redirectUri = 'http://localhost:3000/callback';

const Login = () => {
  const handleLogin = () => {
    const scope = 'read:user user:email';
    const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    window.location.href = url;
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Iniciar sesión con GitHub</h2>
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  box: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
};

export default Login;

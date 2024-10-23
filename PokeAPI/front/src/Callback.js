import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';

const Callback = () => {
  const { login } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      fetch('http://localhost:5000/auth/github', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
        .then(response => response.json())
        .then(data => {
          const userData = { token: data.token, username: data.username };
          login(userData);
          window.location.href = '/Home';
        })
        .catch(error => console.error('Error:', error));
    }
  }, [login]);

  return <div>Autenticando...</div>;
};

export default Callback;

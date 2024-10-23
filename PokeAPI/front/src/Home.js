import React from 'react';
import { useAuth } from './AuthContext';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div style={styles.container}>
      <h1>Bienvenido, {user?.username || 'Usuario'}</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
};

export default Home;

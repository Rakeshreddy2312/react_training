import { UserContext } from 'providers/userProviderContext';
import React, { useContext } from 'react';
import styles from './styles.module.css';
const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.homecontainerStyles}>
      <h2>HOME PAGE</h2>
      <p>welcome... {user ? user.name : 'user'}</p>
    </div>
  );
};

export default Home;

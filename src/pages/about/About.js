import { UserContext } from 'providers/userProviderContext';
import React, { useContext } from 'react';

const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>About</h2>
      {user && (
        <div>
          <p>{user.id + user.name}</p>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default About;

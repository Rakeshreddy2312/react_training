import { UserContext } from 'providers/userProviderContext';
import React, { useContext } from 'react';

const ContactUs = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>ContactUs</h2>
      {user && (
        <div>
          <h4>Phone Num: {user.phNo}</h4>
          <p>E-mail Id :{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;

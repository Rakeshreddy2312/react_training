// import { userData } from 'data/userData';
import React, { createContext, useEffect, useState } from 'react';
const UserContext = createContext();

const UserProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState();
  // document.addEventListener('visibilitychange', () => {
  //   if (document.visibilityState === 'hidden') {
  //     new Notification('NOTIFICATION ', {
  //       body: 'please come back RAKESH',
  //     });
  //   }
  // });
  useEffect(() => {
    if (localStorage.getItem('userData')) {
      setIsLogin(true);
      setUser(JSON.parse(localStorage.getItem('userData')));
    }
  }, []);
  const removeUserData = () => {
    localStorage.removeItem('userData');
  };
  const value = {
    isLogin,
    setIsLogin,
    user: user,
    setUser,
    removeUserData,
  };

  return (
    <UserContext.Provider value={value}> {props.children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };

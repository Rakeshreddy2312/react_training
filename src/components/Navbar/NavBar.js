import React, { useContext } from 'react';
import styles from './styles.module.css';
import { StringsContext } from 'providers/stringsProviderContext';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { UserContext } from 'providers/userProviderContext';

const NavBar = () => {
  const { stringsLanguage, setStringsLanguage, strings } =
    useContext(StringsContext);
  const { isLogin, setIsLogin, user, removeUserData } = useContext(UserContext);
  const { navBarStrings } = strings;
  const navigate = useNavigate();
  return (
    <div className={styles.navBarContainerStyles}>
      <div className={styles.navBarLeftStyles}>
        <div className={styles.logoContainer} onClick={() => navigate('/')}>
          <h2>ROSHOLM DELL</h2>
        </div>
      </div>

      <div className={styles.navBarRightStyles}>
        <div className={styles.navBarItemsStyles}>
          <p>{navBarStrings.menu}</p>
          <p onClick={() => navigate('/about')}>{navBarStrings.aboutUs}</p>
          <p onClick={() => navigate('/contactUs')}>
            {navBarStrings.contactUs}
          </p>
          <p>{navBarStrings.career}</p>
          <p>{navBarStrings.ourTeam}</p>
          <p>{navBarStrings.servicesSolutions}</p>
          <p onClick={() => navigate('/login')}>
            {!isLogin && <button>{navBarStrings.logIn}</button>}
            {isLogin && (
              <button
                onClick={() => {
                  setIsLogin(false);
                  removeUserData();
                }}
              >
                Log Out
              </button>
            )}
          </p>
        </div>
        <div className={styles.langSelectBlockStyles}>
          <select
            onChange={(e) => {
              setStringsLanguage(e.target.value);
            }}
            value={stringsLanguage}
          >
            <option value="english">ENG</option>
            <option value="swedish">SWE</option>
          </select>
        </div>

        <div className={styles.userIconStyles}>
          <FaUserAlt />
          {isLogin && <small>{user && user.name}</small>}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

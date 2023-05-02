import React, { useContext, useState } from 'react';
import { userData } from 'data/userData';
import { useNavigate } from 'react-router-dom';
import { UserContext } from 'providers/userProviderContext';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { setIsLogin, setUser } = useContext(UserContext);
  //-----handling form------//
  const handleForm = (e) => {
    e.preventDefault();
    if (
      userData.email === formData.email &&
      userData.password === formData.password
    ) {
      localStorage.setItem('userData', JSON.stringify(userData));
      setUser(userData);
      setIsLogin(true);
      // setUser();
      // Notification.requestPermission().then((perm) => {
      //   new Notification('Logged In', {
      //     body: 'you are successfully logged in to your accout',
      //     icon: 'logo192.png',
      //   });
      //   console.log(perm);
      // });
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // console.log(history);
  return (
    <div style={{ margin: '0 auto', width: 'fit-content' }}>
      <h3>Login</h3>
      <form
        onSubmit={(e) => {
          handleForm(e);
        }}
      >
        <div>
          <input
            type="email"
            name="email"
            placeholder="enter email id"
            value={formData.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="enter password"
            value={formData.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <input type="submit" value="login" />
        </div>
      </form>
    </div>
  );
};

export default Login;

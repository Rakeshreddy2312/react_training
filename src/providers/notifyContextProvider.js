import { getFCMToken, onMessageListener } from '../firebase.js';
import notificationPermission from 'permissions/notificationsPermission';
import React, { createContext, useEffect, useState } from 'react';
// import { getImage } from '../components/notification/Notification.js';
import { useScreenshot, createFileName } from 'use-react-screenshot';
import { ref } from 'App';
const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [reqNotifationStatus, setReqNotificationStatus] = useState(false);
  const [show, setShow] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [notification, setNotification] = useState({ title: '', body: '' });

  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => {
    takeScreenshot(ref.current).then(download);
  };
  const download = (image, { name = 'img', extension = 'jpg' } = {}) => {
    const a = document.createElement('a');
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  let audio = new Audio(
    'http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a'
  );
  //get notification permission and token
  useEffect(() => {
    notificationPermission().then((res) => setShow(res));
    getFCMToken();
  }, [reqNotifationStatus]);
  //creating foregournd messages in app
  onMessageListener()
    .then((payload) => {
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      setShowNotif(true);
      a.play();
      console.log(payload);
      setTimeout(() => {
        getImage();
        setShowNotif(false);
      }, 5000);
    })
    .catch((err) => console.log('failed: ', err.message));

  const value = {
    setReqNotificationStatus,
    show,
    setShow,
    showNotif,
    setShowNotif,
    notification,
    setNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };

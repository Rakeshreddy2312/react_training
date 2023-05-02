import React, { createRef, useContext } from 'react';
import styles from './styles.module.css';
import notificationPermission from 'permissions/notificationsPermission';

import { NotificationContext } from 'providers/notifyContextProvider';
// import { useScreenshot, createFileName } from 'use-react-screenshot';
// import { ref } from 'App';
const Notification = () => {
  const {
    show,
    setShow,
    showNotif,
    setShowNotif,
    notification,
    setNotification,
  } = useContext(NotificationContext);

  // const [image, takeScreenshot] = useScreenshot();
  // const getImage = () => {
  //   takeScreenshot(ref.current).then(download);
  //   // dwldScreenShot();
  // };
  // const download = (image, { name = 'img', extension = 'jpg' } = {}) => {
  //   const a = document.createElement('a');
  //   a.href = image;
  //   a.download = createFileName(extension, name);
  //   a.click();
  // };
  // const dwldScreenShot = () => {
  //   takeScreenshot(ref.current).then(download);
  // };
  return (
    <>
      {!show && (
        <div className={styles.notificationReqContainerStyles}>
          <h4>you denied permissions for notifications </h4>
          <div className={styles.ntfctnRightcontainerStyles}>
            <button
            // onClick={() => setShow(true)}
            >
              No Thanks
            </button>
            <button
              onClick={() => {
                console.log('caling onclick');

                notificationPermission().then((res) => console.log(res));
              }}
            >
              Allow
            </button>
          </div>
        </div>
      )}
      {showNotif && (
        <div className={styles.notificationStyles}>
          <div>
            <p>{notification.title}</p>
            <p>{notification.body}</p>
          </div>
        </div>
      )}
      {/* <button
      //  onClick={getImage}
      >
        take screenshot
      </button> */}
      {/* <img src={image} width={'1000px'} height={'100px'} alt="screenshot" /> */}
    </>
  );
};

export { Notification };

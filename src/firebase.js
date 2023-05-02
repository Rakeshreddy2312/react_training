import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyAvmcsMab-1eYBKAxKyP6pX-flSqJoN-dA',
  authDomain: 'reacttrainingapp1.firebaseapp.com',
  projectId: 'reacttrainingapp1',
  storageBucket: 'reacttrainingapp1.appspot.com',
  messagingSenderId: '841295999257',
  appId: '1:841295999257:web:82ca7db6f5451edbadd588',
  measurementId: 'G-0BBEJ35NCS',
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

export const getFCMToken = async () => {
  return getToken(messaging, {
    vapidKey:
      'BMwNxeaa-VkwKBoQtXMXwvTTjDMpNTGHv5ciV_VqoF9uHMM4ldMDWHvI4LW5Xg7P33kxFOdBQDppRol12Ht2r78',
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        );
        // setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  // const token = await getToken(messaging, {
  //   vapidKey:
  //     'BMwNxeaa-VkwKBoQtXMXwvTTjDMpNTGHv5ciV_VqoF9uHMM4ldMDWHvI4LW5Xg7P33kxFOdBQDppRol12Ht2r78',
  // });
  // console.log(token);
  // return token;
};

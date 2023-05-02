importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);
console.log('firebase-messaging-sw');
const firebaseConfig = {
  apiKey: 'AIzaSyAvmcsMab-1eYBKAxKyP6pX-flSqJoN-dA',
  authDomain: 'reacttrainingapp1.firebaseapp.com',
  projectId: 'reacttrainingapp1',
  storageBucket: 'reacttrainingapp1.appspot.com',
  messagingSenderId: '841295999257',
  appId: '1:841295999257:web:82ca7db6f5451edbadd588',
  measurementId: 'G-0BBEJ35NCS',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
  self.addEventListener('notificationclick', (event) => {
    if (event.action) {
      clients.openWindow(event.action);
    }
    event.notification.close();
  });
});

importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

// Gunakan konfigurasi web dari firebase_options.dart Anda
firebase.initializeApp({
  apiKey: "AIzaSyDMfwl1a68DAwkPHOJ0-ZVLowXPqqAi9C8",
  authDomain: "notes-9d0f2.firebaseapp.com",
  projectId: "notes-f9956'",
  storageBucket: "notes-f9956.firebasestorage.app",
  messagingSenderId: "1068146226144",
  appId: "1:1068146226144:web:1f8f7789d5956bdc173185",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/favicon.png",
  };
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
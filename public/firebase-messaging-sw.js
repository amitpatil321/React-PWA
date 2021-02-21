// importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js");

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("../fireabse-messaging-sw.js")
//     .then((registration) => {
//       console.log("Success!");
//     })
//     .catch((err) => {
//       console.log("Registration failed :", err);
//     });
// }

// firebase.initializeApp({
//   messagingSenderId: "1041195257685",
// });

// const initMessaging = firebase.messaging();

/** ----------------------------------------- */

importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

firebase.initializeApp({
  messagingSenderId: "1041195257685",
});

const initMessaging = firebase.messaging();

/** --------------------------------- */

// Scripts for firebase and firebase messaging
// importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// // Initialize the Firebase app in the service worker by passing the generated config
// var firebaseConfig = {
//   apiKey: "AIzaSyBite08WKoPU9qDgOFkN4v9tsEhbhwQQ34",
//   authDomain: "react-pwa-116cb.firebaseapp.com",
//   projectId: "react-pwa-116cb",
//   storageBucket: "react-pwa-116cb.appspot.com",
//   messagingSenderId: "1041195257685",
//   appId: "1:1041195257685:web:bed8ddc6ca53533b6ba9dc",
// };

// firebase.initializeApp(firebaseConfig);

// // Retrieve firebase messaging
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//   console.log("Received background message ", payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

/** -------------------------------- */
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("./firebase-messaging-sw.js")
//     .then(function (registration) {
//       console.log("Registration successful, scope is:", registration.scope);
//     })
//     .catch(function (err) {
//       console.log("Service worker registration failed, error:", err);
//     });
// }

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  messagingSenderId: "1041195257685",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

const messaging = firebase.messaging();

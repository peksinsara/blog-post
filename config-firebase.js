  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCzoWXWGySj2N7MQsD56Wmw0tEozTw1w74",
    authDomain: "user-ed760.firebaseapp.com",
    databaseURL: "https://user-ed760.firebaseio.com",
    projectId: "user-ed760",
    storageBucket: "user-ed760.appspot.com",
    messagingSenderId: "386475036582",
    appId: "1:386475036582:web:3214d650f6992a92194967"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //make auth and firestore reference
  const auth=firebase.auth();
  const db = firebase.firestore();
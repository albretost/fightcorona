import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDaB0a1GlVhBmJr8BJ3HGj7T2HSyCY-xiY",
    authDomain: "sakti-jako.firebaseapp.com",
    databaseURL: "https://sakti-jako.firebaseio.com",
    projectId: "sakti-jako",
    storageBucket: "sakti-jako.appspot.com",
    messagingSenderId: "110385663463",
    appId: "1:110385663463:web:4490ed31947ca7e2ad0142",
    measurementId: "G-6PDQ3KC575"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;
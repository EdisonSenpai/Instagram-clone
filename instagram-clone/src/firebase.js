  import firebase from 'firebase'
  
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_AouzYzock46aob6vc9Dgs-dYr_wQAHs",
    authDomain: "instagram-clone-react-b8cbc.firebaseapp.com",
    projectId: "instagram-clone-react-b8cbc",
    storageBucket: "instagram-clone-react-b8cbc.appspot.com",
    messagingSenderId: "865728125872",
    appId: "1:865728125872:web:ac0c0190ff033392785475",
    measurementId: "G-DR0PKY8E81"
  });

  const db = firebaseApp.fireStore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };
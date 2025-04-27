import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyAnrNScd3tjnrtLi6ppKOPTHRxMc_dn58s",
  authDomain: "contact-a1d25.firebaseapp.com",
  databaseURL: "https://contact-a1d25-default-rtdb.firebaseio.com",
  projectId: "contact-a1d25",
  storageBucket: "contact-a1d25.appspot.com",
  messagingSenderId: "835008978330",
  appId: "1:835008978330:web:afd9c6a129c4e051b52e23"
  };

  const firedb = firebase.initializeApp(firebaseConfig);
  export default firedb.database().ref()
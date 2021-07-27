import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyAACGFwj1adxKbF_SZhQ1mrzJjQESUR0ag",
    authDomain: "slack-clone-3d176.firebaseapp.com",
    projectId: "slack-clone-3d176",
    storageBucket: "slack-clone-3d176.appspot.com",
    messagingSenderId: "482860032629",
    appId: "1:482860032629:web:ece7455d957956f2550e3c",
    measurementId: "G-FVRM90HHPJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
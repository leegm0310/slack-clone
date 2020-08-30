import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAp7SuwcbObd6aNT-zZ7o6L7VSPDWqaaJU",
    authDomain: "slack-clone-3da27.firebaseapp.com",
    databaseURL: "https://slack-clone-3da27.firebaseio.com",
    projectId: "slack-clone-3da27",
    storageBucket: "slack-clone-3da27.appspot.com",
    messagingSenderId: "125873301059",
    appId: "1:125873301059:web:f1cf31d7f0fef0b44716f6",
    measurementId: "G-57DZL05VC2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
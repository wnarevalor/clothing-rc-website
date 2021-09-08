import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWdoUPr4zuCzf4Z8uM_9TbJMeQFSfWtlw",
  authDomain: "crwn-db-dbd95.firebaseapp.com",
  projectId: "crwn-db-dbd95",
  storageBucket: "crwn-db-dbd95.appspot.com",
  messagingSenderId: "977306232121",
  appId: "1:977306232121:web:9feb947abb295cc127f4e8",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

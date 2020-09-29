import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    
        apiKey: "AIzaSyAJNK-mFCUCt-z5JSQNrKWii2OAGJQ5DZY",
        authDomain: "crwn-db-38102.firebaseapp.com",
        databaseURL: "https://crwn-db-38102.firebaseio.com",
        projectId: "crwn-db-38102",
        storageBucket: "crwn-db-38102.appspot.com",
        messagingSenderId: "490779529185",
        appId: "1:490779529185:web:793cb23363f2e140128ca0",
        measurementId: "G-RZHNC07J8K"
      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
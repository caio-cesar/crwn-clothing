import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAzSKQvJyOZeJykj-9unAehQyo6T3Heam4",
    authDomain: "crwn-db-8b11d.firebaseapp.com",
    databaseURL: "https://crwn-db-8b11d.firebaseio.com",
    projectId: "crwn-db-8b11d",
    storageBucket: "crwn-db-8b11d.appspot.com",
    messagingSenderId: "714557425776",
    appId: "1:714557425776:web:360bffa737191884504cb5",
    measurementId: "G-VG38YNYE1Q"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
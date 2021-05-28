import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAil-kqLUYbkiqOd0mav72ZrM53GGtfUsw",
    authDomain: "music-cavern.firebaseapp.com",
    projectId: "music-cavern",
    storageBucket: "music-cavern.appspot.com",
    messagingSenderId: "114669466220",
    appId: "1:114669466220:web:52d3b03961e93c07541e49"
})

export default app;
export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
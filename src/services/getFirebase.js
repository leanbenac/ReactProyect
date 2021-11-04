import firebase from "firebase/app"

import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCWwbWclnrpahnXsbr8xf6HbcGbiTb8Mo",
    authDomain: "reactproyectcoder.firebaseapp.com",
    projectId: "reactproyectcoder",
    storageBucket: "reactproyectcoder.appspot.com",
    messagingSenderId: "868452922435",
    appId: "1:868452922435:web:95a63ec57c10fb3be9d0f6"
    
};

const app = firebase.initializeApp(firebaseConfig)

// export function getFirebase(){
// return app
// }

export function getFirestore(){
    return firebase.firestore(app)

}



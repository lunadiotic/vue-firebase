import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAGIcMJj9iudb8HZotQxQwtWLSBx5PrwP4",
    authDomain: "vueblog-a04d9.firebaseapp.com",
    projectId: "vueblog-a04d9",
    storageBucket: "vueblog-a04d9.appspot.com",
    messagingSenderId: "692454676546",
    appId: "1:692454676546:web:9f34d46215c0ed46d635db"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }
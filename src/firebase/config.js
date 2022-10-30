import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDjqtyL8qM_RjT1BbZ_O9U8mGu2wgF11Kg",
    authDomain: "cooking-legend-app.firebaseapp.com",
    projectId: "cooking-legend-app",
    storageBucket: "cooking-legend-app.appspot.com",
    messagingSenderId: "988450312243",
    appId: "1:988450312243:web:7ccb9bb72dd53e54fc9346",
    measurementId: "G-1K8PLXCS5P"
  }

  // init firebase

  firebase.initializeApp(firebaseConfig)

  // init services

  const projectFirestore = firebase.firestore()

  export { projectFirestore }
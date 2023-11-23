import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDBsPhd4WC4-iQSd-KeUEIfgKOBQqvadR4',
  authDomain: 'musicvue-b0ecd.firebaseapp.com',
  projectId: 'musicvue-b0ecd',
  storageBucket: 'musicvue-b0ecd.appspot.com',
  messagingSenderId: '668948880667',
  appId: '1:668948880667:web:3222eb765874589e0247be'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()


const usersCollection = db.collection('users')
//const songsCollection = db.collection('songs')

// export as named exports
export { auth, db, usersCollection, storage }

/*
This file has firebase configuration and exports firebase auth and firestore
for some reason the firebase doesn't work so login and registering is faulty.
I don't know how to fix it
*/

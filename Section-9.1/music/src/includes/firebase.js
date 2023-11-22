import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDBsPhd4WC4-iQSd-KeUEIfgKOBQqvadR4',
  authDomain: 'musicvue-b0ecd.firebaseapp.com',
  projectId: 'musicvue-b0ecd',
  storageBucket: 'musicvue-b0ecd.appspot.com',
  messagingSenderId: '668948880667',
  appId: '1:668948880667:web:3222eb765874589e0247be'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore() 

const usersCollection = collection(db, 'users')

// export as named exports
export { auth, db, usersCollection }


/*
This file has firebase configuration and exports firebase auth and firestore
for some reason the firebase doesn't work so login and registering is faulty.
I don't know how to fix it
*/
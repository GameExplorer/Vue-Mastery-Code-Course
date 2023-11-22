import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCIiUve5pRcrkTWkTgdxaGR2ICH_MNz1Xs',
  authDomain: 'music-ec0bc.firebaseapp.com',
  projectId: 'music-ec0bc',
  storageBucket: 'music-ec0bc.appspot.com',
  messagingSenderId: '701841677443',
  appId: '1:701841677443:web:185ce9a33b6a8862f5cfb6'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()

const usersCollection = collection(db, 'users')

// export as named exports
export { auth, db, usersCollection }
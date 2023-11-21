import { initializeApp } from 'firebase/app'
import 'firebase/auth' // for authentication features

const firebaseConfig = {
  apiKey: 'AIzaSyCIiUve5pRcrkTWkTgdxaGR2ICH_MNz1Xs',
  authDomain: 'music-ec0bc.firebaseapp.com',
  projectId: 'music-ec0bc',
  storageBucket: 'music-ec0bc.appspot.com',
  messagingSenderId: '701841677443',
  appId: '1:701841677443:web:185ce9a33b6a8862f5cfb6'
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
export default firebase

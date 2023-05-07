import { getFirestore } from 'firebase/firestore'
import { firebaseApp } from './firebase'

console.log({env: process.env})

export const connection = getFirestore(firebaseApp)
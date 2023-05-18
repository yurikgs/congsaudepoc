import { getFirestore } from 'firebase/firestore'
import { firebaseApp } from './firebase'

export const connection = getFirestore(firebaseApp)
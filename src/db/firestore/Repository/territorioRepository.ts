
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import 'firebase/firestore';
import { connection } from "../connection";
import { TerritorioType } from "../../../common/types/territorio-type";

const db = connection;
const territoriosCollection = collection(db, 'territorios')

export async function listTerritorio () {
    const docsData = await getDocs(territoriosCollection)
    const data = docsData.docs.map( (doc) => ({...doc.data(), id: doc.id}))

    return data
}

export async function showTerritorio (id: string) {
    const docRef = doc(db,`territorios/${id}`)
    const docData = await getDoc(docRef)
    const data = {...docData.data(), id: docData.id} as TerritorioType
    return data
}
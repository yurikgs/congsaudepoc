
import { collection, getDocs, doc, getDoc, query, where, setDoc, addDoc, deleteDoc } from "firebase/firestore";
import { connection } from "../connection";

const db = connection;
export const atividadesCollection = collection(db, 'atividades')

export async function list () {
    const data = await getDocs(atividadesCollection)
    const docs = data.docs.map( (doc) => ({...doc.data(), id: doc.id}))

    return docs
}

export async function showAtividade (id: string) {
    const docRef = doc(db,`atividades/${id}`)
    const docData = await getDoc(docRef)
    const data = {...docData.data(), id: docData.id}

    return data
}

export async function showAtividadeByTerritorio (id: string) {
    // docRef: Territorio is setted as a ref
    const docRef = doc(db,`territorios/${id}`)
    // query config:
    const whereClause = where('territorio', '==', docRef)
    const queryConfig = query(atividadesCollection, whereClause)
    // query exec:
    const docsData = await getDocs(queryConfig)
    // data transform:
    const data = docsData.docs.map( doc => ({...doc.data(), id: doc.id}))

    return data
}

export async function createAtividade (atividade: any) {
    // TODO: tipar atividade aqui
    const data = await addDoc(atividadesCollection, atividade)
    return data
}

export async function updateAtividade (atividade: any) {
    // TODO: tipar atividade aqui
    const docRef = doc(db,`atividades/${atividade.id}`)
    const data = setDoc(docRef, atividade)
    return data;
}

export async function deleteAtividade (atividade: any) {
    // TODO: tipar atividade aqui
    const docRef = doc(db ,`atividades/${atividade.id}`)
    await deleteDoc(docRef)
}

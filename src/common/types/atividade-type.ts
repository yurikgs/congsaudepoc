import { DocumentData, DocumentReference } from "firebase/firestore";

export type AtividadeType = {
    id: string;
    inicio: string;
    fim?: string;
    obss: string;
    territorio: DocumentReference<DocumentData> | string;
} | null
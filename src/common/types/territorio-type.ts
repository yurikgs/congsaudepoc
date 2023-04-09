export type TerritorioType = {
    id: number;
    photo_link: string;
    name: string;
    status: string;  // Criar uma enum
    ultimoTrabalhador: string;
    dataUltimaAtividade: string;
    idDaUltimaAtividade: number;
    detalhes: string;
    obss:string; 
    atividades?: number[]
  } | null;
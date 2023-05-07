export type TerritorioType = {
    id: string;
    photo_link: string;
    name: string;
    status: string;  // Criar uma enum
    ultimoTrabalhador: string;
    dataUltimaAtividade: string;
    idDaUltimaAtividade: string;
    detalhes: string;
    obss:string; 
    atividades?: string[]
  } | null;
import { TerritorioType } from "../types/territorio-type";

export const territorios: TerritorioType[] = [
    {
      id: "1",
      photo_link: "../../assets/img/teste_cartao.png",
      name: "Pedra Lisa",
      status: "Ativo", // Criar uma enum
      ultimoTrabalhador: "João Victor",
      dataUltimaAtividade: "01/04/2023",
      idDaUltimaAtividade: '5', // relacionamento
      detalhes: "Limites: ruas A, B & C.",
      obss: "João Victor: Paramos no campo de futebol",
      atividades: ["1", "3", "5"]
    },
    {
      id: "2",
      photo_link: "../../assets/img/teste_cartao.png",
      name: "Senador Pompeu",
      status: "Disponível", 
      ultimoTrabalhador: "Rosana",
      dataUltimaAtividade: "31/03/2023",
      idDaUltimaAtividade: '6',
      detalhes: "Limites: ruas C, D & E. Não falar na casa 171, da rua D",
      obss: "Rosana: Trabalhamos de manhã, faltam os não em casa, anotados com o irmão Juarez",
      atividades: ["1", "2", "7"]
    },
    {
      id: "3",
      photo_link: "../../assets/img/teste_cartao.png",
      name: "Praça da Harmonia",
      status: "Ativo", 
      ultimoTrabalhador: "José",
      dataUltimaAtividade: "30/03/2023",
      idDaUltimaAtividade: '7',
      detalhes: "Limites: ruas F, G & H.",
      obss: "",
      atividades: ["2", "3", "5", "7"]
    },
  ];
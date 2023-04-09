import React, { useState } from "react";
import AppLayout from "../../layouts/AppLayout/AppLayout";
import withAuthorization from "../../layouts/Authentication/withAuthorization";
import "./TerritoriosList.css";

type Territory = {
  id: number;
  photo_link: string;
  nome: string;
  status: string;  // Criar uma enum
  ultimoTrabalhador: string;
  dataUltimaAtividade: string;
  detalhes: string;
  obss:string; 
};

function TerritoriosList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTerritory, setSelectedTerritory] = useState<Territory | null>(
    null
  );

  const territories: Territory[] = [
    {
      id: 1,
      photo_link: "../../assets/img/teste_cartao.png",
      nome: "Pedra Lisa",
      status: "Ativo", // Criar uma enum
      ultimoTrabalhador: "João Victor",
      dataUltimaAtividade: "01/04/2023",
      detalhes: "Limites: ruas A, B & C.",
      obss: "João Victor: Paramos no campo de futebol"
    },
    {
      id: 2,
      photo_link: "../../assets/img/teste_cartao.png",
      nome: "Senador Pompeu",
      status: "Disponível", 
      ultimoTrabalhador: "Rosana",
      dataUltimaAtividade: "31/03/2023",
      detalhes: "Limites: ruas C, D & E. Não falar na casa 171, da rua D",
      obss: "Rosana: Trabalhamos de manhã, faltam os não em casa, anotados com o irmão Juarez"
    },
    {
      id: 3,
      photo_link: "../../assets/img/teste_cartao.png",
      nome: "Praça da Harmonia",
      status: "Ativo", 
      ultimoTrabalhador: "José",
      dataUltimaAtividade: "30/03/2023",
      detalhes: "Limites: ruas F, G & H.",
      obss: ""
    },
  ];

  function handleClick(territory: Territory) {
    setSelectedTerritory(territory);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setSelectedTerritory(null);
  }

  return (   
  <AppLayout title="">
    <div className="territorios-list-container">
    {territories.map((territory, index) => (
      <div
        key={index}
        className="territorio-card"
        onClick={() => handleClick(territory)}
      >
        <img src={territory.photo_link} alt="territorio-img" />
        <div className="territory-card-info">
          <h2>{territory.nome}</h2>
          <p className={`${territory.status==='Disponível'?'status':'ultimoTrabalhador'}`}>
            {territory.status === 'Disponível'?territory.status:territory.ultimoTrabalhador}
          </p>
        </div>
        <p className="data-ultimo-trabalho">
          Última atividade: <span> {territory.dataUltimaAtividade}</span>
        </p>
        <button className='territorio-card-button'>
          Ver
        </button>
      </div>
    ))}
    {showModal && (
      <div className="modal">
        <div className="modal-content">
          <h2>{selectedTerritory?.nome}</h2>
          <div className="img-container">
            <img src={selectedTerritory?.photo_link} alt={selectedTerritory?.nome} />
          </div>
          
          <div className="territory-modal-info">
          <p className={`${selectedTerritory?.status==='Disponível'?'status':'ultimoTrabalhador'}`}>
            {selectedTerritory?.status === 'Disponível'?`${selectedTerritory?.status}`:`Está com: ${selectedTerritory?.ultimoTrabalhador}`}
          </p>
        </div>
        <p className="data-ultimo-trabalho">
          Última atividade: <span> {selectedTerritory?.dataUltimaAtividade}</span>
        </p>
        <div className="detalhes">
            <h3>Detalhes do Território</h3>
            <hr />
            {selectedTerritory?.detalhes}
        </div>
        <div className="observacoes-atividade">
            <h3>Observações da Atividade</h3>
            <hr />
            <p>
              {selectedTerritory?.obss}
            </p>
            <button className="editar-obss">
              Adicionar/Editar
            </button>
        </div>


          <button className='close-modal' onClick={handleCloseModal}>Fechar</button>
        </div>
      </div>
    )}
  </div>
  </AppLayout>
  );
}

export default withAuthorization(TerritoriosList);

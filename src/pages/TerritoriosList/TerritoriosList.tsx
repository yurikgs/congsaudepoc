import React, { useState } from "react";
import AppLayout from "../../layouts/AppLayout/AppLayout";
import withAuthorization from "../../layouts/Authentication/withAuthorization";
import "./TerritoriosList.css";

type Territory = {
  nome: string;
  ultimoTrabalhador: string;
  dataUltimoTrabalho: string;
};

function TerritoriosList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTerritory, setSelectedTerritory] = useState<Territory | null>(
    null
  );

  const territories: Territory[] = [
    {
      nome: "Pedra Lisa",
      ultimoTrabalhador: "João",
      dataUltimoTrabalho: "01/04/2023",
    },
    {
      nome: "Senador Pompeu",
      ultimoTrabalhador: "Rosana",
      dataUltimoTrabalho: "31/03/2023",
    },
    {
      nome: "Praça da Harmonia",
      ultimoTrabalhador: "José",
      dataUltimoTrabalho: "30/03/2023",
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
  <AppLayout>
    <div className="territorios-list-container">
    {territories.map((territory, index) => (
      <div
        key={index}
        className="territorio-card"
        onClick={() => handleClick(territory)}
      >
        <h2>{territory.nome}</h2>
        <p className="ultimo-trabalhador">
          Último trabalhador: {territory.ultimoTrabalhador}
        </p>
        <p className="data-ultimo-trabalho">
          Último trabalho: {territory.dataUltimoTrabalho}
        </p>
      </div>
    ))}
    {showModal && (
      <div className="modal">
        <div className="modal-content">
          <h2>{selectedTerritory?.nome}</h2>
          <p>Modal</p>
          <button onClick={handleCloseModal}>Fechar</button>
        </div>
      </div>
    )}
  </div>
  </AppLayout>
  );
}

export default withAuthorization(TerritoriosList);

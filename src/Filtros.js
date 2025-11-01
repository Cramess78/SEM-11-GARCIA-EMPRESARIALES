import React from "react";

function Filtros({ filtrarTareas, ordenarTareas }) {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
      <div className="btn-group mb-2">
        <button className="btn btn-outline-primary" onClick={() => filtrarTareas("todas")}>
          Todas
        </button>
        <button className="btn btn-outline-warning" onClick={() => filtrarTareas("pendientes")}>
          Pendientes
        </button>
        <button className="btn btn-outline-success" onClick={() => filtrarTareas("completadas")}>
          Completadas
        </button>
      </div>

      <div className="btn-group mb-2">
        <button className="btn btn-outline-dark" onClick={() => ordenarTareas("asc")}>
          Más antiguas
        </button>
        <button className="btn btn-outline-dark" onClick={() => ordenarTareas("desc")}>
          Más nuevas
        </button>
        <button className="btn btn-outline-secondary" onClick={() => ordenarTareas(null)}>
          Sin ordenar
        </button>
      </div>
    </div>
  );
}

export default Filtros;

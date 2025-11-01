import React, { useState } from "react";
import { FaTrashAlt, FaEdit, FaCheck, FaSave } from "react-icons/fa";

function Tarea({ tarea, eliminarTarea, alternarCompletada, editarTarea }) {
  const [editando, setEditando] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.texto);

  const guardarCambios = () => {
    editarTarea(tarea.id, nuevoTexto);
    setEditando(false);
  };

  return (
    <div
      className={`list-group-item d-flex justify-content-between align-items-center ${
        tarea.completada ? "list-group-item-success" : ""
      }`}
    >
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={tarea.completada}
          onChange={() => alternarCompletada(tarea.id)}
        />

        {editando ? (
          <input
            type="text"
            value={nuevoTexto}
            onChange={(e) => setNuevoTexto(e.target.value)}
            className="form-control"
          />
        ) : (
          <span
            style={{
              textDecoration: tarea.completada ? "line-through" : "none",
            }}
          >
            {tarea.texto}
          </span>
        )}
      </div>

      <div>
        {editando ? (
          <button className="btn btn-sm btn-success me-2" onClick={guardarCambios}>
            <FaSave />
          </button>
        ) : (
          <button
            className="btn btn-sm btn-primary me-2"
            onClick={() => setEditando(true)}
          >
            <FaEdit />
          </button>
        )}

        <button className="btn btn-sm btn-danger" onClick={() => eliminarTarea(tarea.id)}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default Tarea;

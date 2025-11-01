import React from "react";
import Tarea from "./Tarea";

function ListaTareas({ tareas, eliminarTarea, alternarCompletada, editarTarea }) {
  return (
    <div className="list-group">
      {tareas.length === 0 ? (
        <p className="text-center text-muted">No hay tareas</p>
      ) : (
        tareas.map((t) => (
          <Tarea
            key={t.id}
            tarea={t}
            eliminarTarea={eliminarTarea}
            alternarCompletada={alternarCompletada}
            editarTarea={editarTarea}
          />
        ))
      )}
    </div>
  );
}

export default ListaTareas;

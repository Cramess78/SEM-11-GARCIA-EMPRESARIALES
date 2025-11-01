import React, { useState } from "react";
import TareaForm from "./TareaForm";
import ListaTareas from "./ListaTareas";
import Filtros from "./Filtros";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("todas");
  const [orden, setOrden] = useState(null);

  const agregarTarea = (texto) => {
    // Validaciones
    if (!texto.trim()) {
      alert("No puedes agregar una tarea vacía.");
      return;
    }
    if (texto.length > 100) {
      alert("La tarea es demasiado larga (máx. 100 caracteres).");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      texto,
      completada: false,
      fecha: new Date()
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  const alternarCompletada = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };
  const editarTarea = (id, nuevoTexto) => {
    if (!nuevoTexto.trim()) {
      alert("No puedes dejar la tarea vacía al editar.");
      return;
    }
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, texto: nuevoTexto } : t))
    );
  };
  const filtrarTareas = (tipo) => setFiltro(tipo);
  const ordenarTareas = (tipo) => setOrden(tipo);

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  const tareasOrdenadas = [...tareasFiltradas].sort((a, b) => {
    if (orden === "asc") return a.fecha - b.fecha;
    if (orden === "desc") return b.fecha - a.fecha;
    return 0;
  });

  return (
    <div className="container p-4">
      <h1 className="text-center mb-4 text-primary">Lista de Tareas</h1>

      <TareaForm agregarTarea={agregarTarea} />

      <Filtros filtrarTareas={filtrarTareas} ordenarTareas={ordenarTareas} />

      <ListaTareas
        tareas={tareasOrdenadas}
        eliminarTarea={eliminarTarea}
        alternarCompletada={alternarCompletada}
        editarTarea={editarTarea}
      />
    </div>
  );
}

export default App;

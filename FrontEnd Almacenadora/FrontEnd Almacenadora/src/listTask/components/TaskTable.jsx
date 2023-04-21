import React from 'react'

export const TaskTable = () => {
  return (
    <>
    <h1 className="text-decoration-underline">LISTA DE TAREAS</h1>
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tarea</th>
            <th>Descripcion</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Estado</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button className='btn btn-danger margen-button'>Eliminar</button>
                  <button className='btn btn-warning margen-button'>Editar</button>
                  <button className='btn btn-sucess margen-button'>Ver</button>
                </td>
              </tr>
        </tbody>
      </table>
    </div>
  </>
  )
}

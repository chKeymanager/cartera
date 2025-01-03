const listadoUsuarios = (fecha_inicio=false, fecha_fin=false) => {
  fetch('/usuarios/lista')
  .then( (rs) => rs.json() )
  .then((response) => {
    const opciones = []
    if(response.data.length > 0) {
      opciones.push(`<option value="0">Selecciona un usuario</option>`)
      for (const op in response.data) {
        opciones.push(`<option value="${response.data[op]['valor']}">${response.data[op]['nombre']}</option>`)
      }
    } else {
      opciones.push('<option value="0">No se encontraron resultados</option>')
    }
    $("#select").html(opciones.join(''))
    })
}

const updateAccesosXDia = (chart, fecha_inicio, fecha_fin) => {
  console.log(window.my_accesos_por_dia)
  fetch(`/actividad/chart/accesos`)
  .then((rs) => rs.json())
  .then((response) => {
    ch.data.labels = response.labels
    ch.data.datasets = response.data
    ch.update()
  })
}

listadoUsuarios()
updateAccesosXDia(window.my_accesos_por_dia)



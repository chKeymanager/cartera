const actualizaCarteraTotal = () => {
  const filtro = Herramientas.filtros();
  fetch("/api/valor-cartera", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filtro),
  })
    .then((res) => res.json())
    .then((data) => {
      const valor_cartera = Herramientas.formatoMXN(data.data);
      $("#span-vc-total").html(`${valor_cartera}`);
    });
};

const actualizaCarteraMembresia = (membresia) => {
  const filtro = Herramientas.filtros();
  filtro.membresia = membresia;
  fetch("/api/valor-cartera-membresia", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filtro),
  })
    .then((res) => res.json())
    .then((data) => {
      const valor_cartera = Herramientas.formatoMXN(data.data);
      $(`#span-vc-${membresia.toLowerCase()}`).html(`${valor_cartera}`);
    });
};

$(document).ready(function () {
  actualizaCarteraTotal();

  ["Catalogo", "Codigo", "LEI"].map((elemento) =>
    actualizaCarteraMembresia(elemento)
  );

  $("#filterButton").on("click", function (e) {
    e.preventDefault();
    actualizaCarteraTotal();
  });
});

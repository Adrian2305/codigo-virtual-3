$("#example").DataTable({
  dom: "Bfrtip",
  buttons: ["copy", "csv", "excel", "pdf", "print"],
  responsive: true,
  language: {
    paginate: {
      first: "Primero",
      last: "Ultimo",
      next: "Siguiente",
      previous: "Anterior",
    },
    search: "Buscar:",
    lengthMenu: "Mostrando _MENU_ registros",
    info: "Showing _START_ to _END_ of _TOTAL_ entries",
  },
});

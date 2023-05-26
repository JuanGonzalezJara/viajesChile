$(document).ready(function(){
    $("#magia").css({ display: "none" });
});

// Cambiar color navbar segun ubicacion de elementos y su estado display
$(window).scroll(function () {
  if ($("#quienessomos").is(":visible")) {
    if ($("#navBar").offset().top > $("#quienessomos").offset().top) {
      $("#navBar").addClass("bg-success");
      $("#navBar").addClass("bordeContraste");
    } else {
      $("#navBar").removeClass("bg-success");
      $("#navBar").removeClass("bordeContraste");
    }
  } else {
    if ($("#navBar").offset().top > $("#destacados").offset().top) {
      $("#navBar").addClass("bg-success");
      $("#navBar").addClass("bordeContraste");
    } else {
      $("#navBar").removeClass("bg-success");
      $("#navBar").removeClass("bordeContraste");
    }
  }
});

// ToolTip para Boton de envio Formulario Contacto
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
//Alert Boton Formulario con validacion de datos
$("#enviarFormulario").on("click", function () {
    if ($("#textNombre").val().length == 0 ||
        $("#textAsunto").val().length == 0 ||
        $("#textMensaje").val().length == 0) {
        alert("Todos los campos deben estar completos.");
    } else { 
        alert("El contacto ha sido enviado correctamente, agradecemos su mensaje.");
    }
});

//Magia
$("#magic").on("click", function () {

    if ($("#magia").is(":hidden")) {
        $("#magia").css({ display: "" });
    } else { 
        $("#magia").css({ display: "none" });
    }
});
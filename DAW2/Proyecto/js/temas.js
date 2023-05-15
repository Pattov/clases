import * as local from "./localStorage.js";
let toggle = document.getElementById("theme");
let label = document.getElementById("label");


if(local.cargarLocalStorage("tema") == "oscuro"){
  document.body.classList.toggle("oscuro");
}

toggle.addEventListener("change", () => {
  let estado = local.cargarLocalStorage("tema")
  document.body.classList.toggle("oscuro");
  if (estado == "claro" || estado == null) {
    label.innerHTML = "<i class='bx bxs-sun'></i>";
    local.guardarLocalStorage("tema", "oscuro")
} else if(estado == "oscuro" ){
    label.innerHTML = "<i class='bx bxs-moon'></i>";
    local.guardarLocalStorage("tema", "claro")
  }
});

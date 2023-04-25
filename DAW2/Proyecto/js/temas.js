let toggle = document.getElementById("theme");
let label = document.getElementById("label");

toggle.addEventListener("change", (event) => {
  let estado = event.target.checked;
  document.body.classList.toggle("oscuro");
  if (estado == true) {
    label.innerHTML = "<i class='bx bxs-sun'></i>";
} else {
    label.innerHTML = "<i class='bx bxs-moon'></i>";
  }
});

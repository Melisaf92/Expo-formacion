// Simulación de datos de charlas y preinscritos
const charlas = [
  { id: 1, nombre: "Charla 1", hora: "10:00 AM", tema: "Tema 1" },
  { id: 2, nombre: "Charla 2", hora: "11:00 AM", tema: "Tema 2" },
  { id: 3, nombre: "Charla 3", hora: "12:00 PM", tema: "Tema 3" }
];

const preinscriptos = JSON.parse(localStorage.getItem('preinscriptos')) || [];

// Cargar charlas en la página
function cargarCharlas() {
  const listaCharlas = document.getElementById("charlas-list");
  listaCharlas.innerHTML = '';
  charlas.forEach(charla => {
    const li = document.createElement("li");
    li.innerText = `${charla.nombre} - ${charla.hora} - ${charla.tema}`;
    listaCharlas.appendChild(li);
  });
}

// Preinscripción
function preinscribirse() {
  const usuario = prompt("Ingresa tu nombre para preinscripción:");
  if (usuario) {
    preinscriptos.push(usuario);
    localStorage.setItem('preinscriptos', JSON.stringify(preinscriptos));
    actualizarPreinscriptos();
  }
}

// Actualizar lista de preinscriptos
function actualizarPreinscriptos() {
  const listaPreinscriptos = document.getElementById("preinscriptos-list");
  listaPreinscriptos.innerHTML = '';
  preinscriptos.forEach(usuario => {
    const li = document.createElement("li");
    li.innerText = usuario;
    listaPreinscriptos.appendChild(li);
  });
}

// Mostrar formulario de inscripción
function mostrarFormularioInscripcion() {
  const formulario = document.getElementById("form-inscripcion");
  formulario.style.display = "block";
}

// Registro de usuario
document.getElementById("form-inscripcion").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  alert(`Usuario ${username} registrado correctamente!`);
  // Aquí puedes agregar código para enviar los datos al backend si es necesario.
});

document.addEventListener("DOMContentLoaded", function() {
  cargarCharlas();
  actualizarPreinscriptos();
});

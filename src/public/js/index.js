// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCIc4AO3RfqdL8zS_I0k5wjLQz5rZxSz44",
  authDomain: "parcial-2-60ce5.firebaseapp.com",
  databaseURL: "https://parcial-2-60ce5.firebaseio.com",
  projectId: "parcial-2-60ce5",
  storageBucket: "parcial-2-60ce5.appspot.com",
  messagingSenderId: "737149947755",
  appId: "1:737149947755:web:a6c632b846571dfc4a462e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var storage = firebase.storage();

var proyectoTitulo = document.getElementById('proyectoTitulo');
var proyectoDescripcion = document.getElementById('proyectoDescripcion');

var trabajoTitulo = document.getElementById('trabajoTitulo');
var trabajoDescripcion = document.getElementById('trabajoDescripcion');
var trabajoLink = document.getElementById('trabajoLink');

var proyectos = document.getElementById('proyectos');
var trabajos = document.getElementById('trabajos');

var proyectosContainer = document.getElementById('proyectosContainer');
var trabajosContainer = document.getElementById('trabajosContainer');


function datosPersonales() {
}

function añadirProyectos() {
  db.collection("proyectos").doc().set({
    titulo: proyectoTitulo.value,
    descripcion: proyectoDescripcion.value
  }).then((docRef) => {
    alert('Proyecto agregado correctamente');
    limpiarFormProyectos()
    mostrarProyectos()
  })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function limpiarFormProyectos() {
  proyectoTitulo.value = "";
  proyectoDescripcion.value = "";
}

function añadirTrabajos() {
  db.collection("trabajos").doc().set({
    titulo: trabajoTitulo.value,
    descripcion: trabajoDescripcion.value,
    link: trabajoLink.value
  }).then((docRef) => {
    alert('Trabajo agregado correctamente');
    limpiarFormTrabajos()
    mostrarTrabajos()
  })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function limpiarFormTrabajos() {
  trabajoTitulo.value = "";
  trabajoDescripcion.value = "";
  trabajoLink.value = "";
}

function mostrarProyectos() {
  proyectos.innerHTML = "";
  db.collection("proyectos").get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        proyectos.innerHTML += `
          <div class="card m-3">
          <h3 class="card-header">${doc.data().titulo}</h3>
          <img style="height: 200px; width: 100%; display: block;" src="./img/descarga.jpg" alt="Card image">
          <div class="card-body">
          <p class="card-text">${doc.data().descripcion}</p>
          </div>
          <div> <button type="button" class="btn btn-danger m-3" onclick="">Borrar</button>
          <button type="button" class="btn btn-primary m-3" onclick="">Editar</button>
           </div>
          </div>            
              `;
      });
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}
function mostrarProyectosIndex() {
  proyectosContainer.innerHTML = "";
  db.collection("proyectos").get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        proyectosContainer.innerHTML += `
          <div class="col-md-4">
          <div class="card m-3">
          <h3 class="card-header">${doc.data().titulo}</h3>
          <img style="height: 200px; width: 100%; display: block;" src="./img/descarga.jpg" alt="Card image">
          <div class="card-body">
          <p class="card-text">${doc.data().descripcion}</p>
          </div>
          </div>  
          </div>          
              `;
      });
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}
function mostrarTrabajos() {
  trabajos.innerHTML = "";
  db.collection("trabajos").get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        trabajos.innerHTML += `   
          <div class="card m-3">
  <div class="card-body">
    <h4 class="card-title">${doc.data().titulo}</h4>
    <p class="card-text">${doc.data().descripcion}</p>
    <a href="${doc.data().link}" class="card-link">Card link</a>
    <a href="${doc.data().link}" class="card-link">Another link</a>
  </div>
  <div> <button type="button" class="btn btn-danger m-3" onclick="">Borrar</button>
  <button type="button" class="btn btn-primary m-3" onclick="">Editar</button>
  </div>
</div>
              `;
      });
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}
function mostrarTrabajosIndex() {
  trabajosContainer.innerHTML = "";
  db.collection("trabajos").get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        trabajosContainer.innerHTML += `   
        <div class="col-md-4">
        <div class="card m-3">
            <div class="card-body">
                <h4 class="card-title">${doc.data().titulo}</h4>
                <p class="card-text">${doc.data().descripcion}</p>
                <a href="${doc.data().link}" class="card-link">Card link</a>
                <a href="${doc.data().link}" class="card-link">Another link</a>
            </div>
        </div>
    </div>
              `;
      });
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}



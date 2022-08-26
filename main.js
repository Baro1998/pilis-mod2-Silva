
/* --------formulario--------------- */
function onClick (event) {
    event.preventDefault();
    this.style.backgroundColor = "black";
    console.log("click...");
    console.log(event);
  
  
    const mensaje = {
      comercio: document.getElementById('comercio').value,
      titular: document.getElementById('titular').value,
      celular: document.getElementById('celular').value
    }
    console.log(mensaje);
  
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
              'Enviado',
              'Gracias por tu comentario',
              'success'
          );
          cleanForm();
      })
      .catch((err) => console.log(err));
  
  }



function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}
function redirectUrl(){
    window.location.href = "https://google.com";    
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);




/* ------clims--------- */
window.addEventListener('load', ()=>{
    let lon;
    let lat;

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition( posicion => {
          lon = posicion.coords.longitude;
          lat = posicion.coords.latitude;

          const url ='https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cb619c04eaa1027aecd85b28a6da2891';

          console.log(url);
    })  
  }

})




/* --------PROMESA------- */

class Persona{
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};


const data = [
    ["Brian_Silva", "@BrianSILVA1998"],
    ["Maraz", "@Maraz19283"],
    ["RancioRamirez", "@RancioRamirez"],
    ["CamilaNesa"],
];

const personas = [];

for (let i = 0; i < data.length; i++){
    personas[i] = new Persona(data[i][0],data[i[1]]);
}

const obtenerPersona = (id) => {
    return new Promise((resolve,reject) =>{
        if (personas[id] == undefined) reject("No se ha encontrado la persona")
        else {resolve(personas[id])}
    })
}
const obtenerInstagram = (id) => {
    return new Promise((resolve, reject) =>{
        if (personas[id].instagram == undefined)reject("No se ha encontrado el instagram")
        else {resolve(personas[id].instagram)}
    })
}

let id = 0;

obtenerPersona(id).then((persona) => {
    console.log(persona.nombre);
    return obtenerInstagram(id);
}).then((instagram)=>{ 
    console.log(instagram)
    }).catch((e)=>{
        console.log(e)
    })



/* ----------AWAIT & ASYNC---------- */
  const objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
};

const obtenerInformacion = (text)=>{
    return new Promise((resolve,reyect)=>{
        setTimeout(()=> {resolve(text)},Math.random()*200)
    })
}

const mostrarResultado = async ()=>{
    resultado = await obtenerInformacion();
    console.log(resultado);
 }

 mostrarResultado();

 /* ------otro--- */

 obtenerInformacion("1: css").then(resultado => console.log(resultado))
 obtenerInformacion("2: js").then(resultado => console.log(resultado))
 obtenerInformacion("3: html").then(resultado => console.log(resultado))
 
  const mostrarData = async() =>{
    data1 = await obtenerInformacion("1: css");
    data2 = await obtenerInformacion("2: js");
    data3 = await obtenerInformacion("3: html");
    console.log(data1);
    console.log(data2);
    console.log(data3);
 }

 mostrarData()

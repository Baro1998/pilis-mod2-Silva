
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
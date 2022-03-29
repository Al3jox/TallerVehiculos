let btnServicios = document.querySelector(".btn-servicios");
let FecCalendario = document.querySelector(".color-num");
let datosFormulario = document.getElementById("enviarDatos");
let btnCompras = document.getElementById("comprar1");


btnServicios.addEventListener("click",ventanaProximo);
FecCalendario.addEventListener("click",ventanaProximo);
datosFormulario.addEventListener("click",enviarinfo);
btnCompras.addEventListener("click",ventanaProximo);


function ventanaProximo(){
    Swal.fire(
        'Proximamente podras gestionar tus productos y servicios',
        'Ok',
        'info'
      )
}

function enviarinfo(){
    Swal.fire({
      title: ('Vuelve pronto!'),
      width: 600,
      padding: '3em',
      color: '#212121',
      backdrop: 
            `
            rgba(255,127,80,0.4)
            url("https://media0.giphy.com/media/lqzTEiTTas73hm1LAQ/giphy.gif?cid=790b7611f9bf0002ce5001cb726a50dde295a70f9376e724&rid=giphy.gif&ct=s")
            left top
            repeat
            `   
  })
}



// ===================   PRODUCTOS

const cardsAcc = document.getElementById("cardsAcc");
const tabla = document.getElementById("tabla");

let carrito = {};

const consumirAccesorios = async () => {
  const res = await fetch("json/Bd.json");
  const data = await res.json();
  data.forEach((item) => {
    cardsAcc.innerHTML += `<div class="col-12 col-md-4">
          <div class="card text-center mb-3">
            <img src="${item.img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description} </p>
              <p class="card-text precio ">${item.precio} </p>
              <p  style="display: none;" class="card-text id">${item.id} </p>
                          </div>
          </div>
        </div>`;
  });
};

consumirAccesorios();






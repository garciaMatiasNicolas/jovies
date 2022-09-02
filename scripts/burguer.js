// ARRAYS Y VARIABLES //
let hamburguesas = [];
let carrito = JSON.parse(localStorage.getItem("carritoCompras")) || [] ;
let total = document.getElementById("modal-footer");
let modalCarrito = document.getElementById("modalBody");
let botonCarrito = document.getElementById("btnCarrito");
let btnVaciar = document.getElementById("btnVaciar");
let btnPedir = document.getElementById("btnEnd");
let div = document.getElementById("loader");

// FETCH OBJETOS //

const funcion = async ()=> {
   const api = await fetch("../db.json")
   const data = await api.json()
   print(data.hamburguesas) 
}

funcion()

// PLANTILLAS //

function print(array){
    array.forEach((element)=> {
        let producto = document.getElementById("sectionHamburguesas");
        let burguer = document.createElement("div");
        burguer.innerHTML=
                `<div class= " d-flex flex-column justify-content-between align-items-center mt-5 animacion">
                    <img class="imgBurguers imgAnimacion mb-3" src="${element.image}" alt="">
                    <h2 class="titleFooter">${element.name}</h2>
                    <button type="button" class="btn btnColor btn-lg text-white" data-bs-toggle="modal" data-bs-target="#${element.id}">
                    Descripcion
                    </button>
                    <div class="modal fade modals" id="${element.id}" tabindex="-1" aria-labelledby="${element.id}Label" aria-hidden="true">
                    <div class = "modal-dialog">   
                        <div class="modal-content">
                            <div class="modal-header d-flex flex-column justify-content-between">
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <h2 class="modal-title fontTitle" id="${element.id}Label">${element.name}</h2>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <img class="imgBurguers mb-3" src="${element.image}" alt="${element.name}">
                                <p class="fontP">${element.description}</p>
                            </div>
                            <div class="modal-body">
                                <h2 class="fontModal">¿Desea agregar esto a su combo?</h2>
                                <div class="d-flex  justify-content-evenly w-50 mt-2">
                                    <div class="d-flex flex-column justify-content-between align-items-center w-100">
                                        <label for="bebidas">Gaseosa($200)</label>
                                        <input type=checkbox id="gaseosa">
                                    </div>
                                    <div class="d-flex flex-column justify-content-between align-items-center w-100">  
                                        <label for="">Papas($200)</label>
                                        <input type=checkbox id="papas">
                                    </div>
                                </div>
                                <h2 class="fontModal mt-5">Alguna observacion que quieras agregar a tu hamburguesa</h2>
                                <textarea class="w-50 h-100" id="obs-${element.id}" placeholder="Escribe aqui.."></textarea>
                            </div>
                            <div class="modal-footer d-flex justify-content-between" id="modalF">
                                <h2 class="fontTitle">Precio: ${element.price}$</h2>
                                <button id="btn-${element.id}" type="button" class="btns btn btnColor text-white" data-bs-dismiss="modal" aria-label="Close">Añadir a mi pedido</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>`;
        producto.appendChild(burguer);
        let btnAdd = document.getElementById(`btn-${element.id}`);
        btnAdd.addEventListener("click", () => {
            agregarCarrito(element)
            Toastify({
                text: `${element.name} agregado`,
                duration: 1500,
                style: {
                    background: "black",
                  }
                }).showToast();
        });
    })
}


function ver(){
    let plantilla = ``; 
    carrito.forEach((element)=> {
        plantilla+= 
        `
        <div id="card${element.id}" class="d-flex w-100 justify-content-around align-items-start border-bottom">
            <img class="imgPedidosModal mb-3" src="${element.image}" alt="">
            <div class="d-flex w-100 flex-column justify-content-between align-items-start mt-3 ms-3">
                <h3 class="fontTitle1">Producto: ${element.name}</h3>
                <h3 class="fontTitle1">Precio: ${element.price}$</h3>
            </div>  
            <button id="delete-${element.id}" type="button" class="btn bg-transparent text-white mt-4 btnX"><img class="iconT" src="../img/trashpng.png"></button>      
        </div>
        `
        modalCarrito.innerHTML = plantilla;
        
    })
}

// BOTONES Y FUNCIONES// 

function eliminarProducto(id){
    const item = carrito.find((prod)=> prod.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    localStorage.setItem("carritoCompras", JSON.stringify(carrito));
}

function agregarCarrito(producto){
    carrito.push(producto)
    localStorage.setItem("carritoCompras", JSON.stringify(carrito));
}
function carritoVacio(){
    modalCarrito.innerHTML = `<h3 class="fontTitle1">No has seleccionado ningun producto</h3>`
}
function sumar(array){
    let acum = 0
    array.forEach((element => {
        acum += (element.price)
    }))
    let div = document.createElement("div");
    div.innerHTML = 
    `<div class="w-100 d-flex justify-content-between align-items-center">
        <div class="mt-3"> <h3 class="fontTitle">Total: ${acum}$ </div>
    </div>`
    acum === 0 ? carritoVacio() :  modalCarrito.appendChild(div);
}
btnVaciar.addEventListener("click", ()=> {
    carrito.splice(0, carrito.length);
    localStorage.removeItem("carritoCompras")
    ver()
})
botonCarrito.addEventListener("click", () => {
    ver();
    sumar(carrito);
});
btnPedir.addEventListener("click", ()=> {
    Swal.fire({
        title: 'Dejanos tus datos',
        text: "Nos estaremos comunicando con vos para darte el status de tu pedido",
        icon: 'question',
        iconColor:"#ff0000",
        input: "text",
        inputLabel: "Tu nombre y apellido",
        confirmButtonColor: ' #ff0000',
        confirmButtonText: 'Enviar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Dejanos tus datos',
            input: "text",
            inputLabel: "Tu numero de telefono",
            confirmButtonText: 'Enviar',
            icon: 'question',
            iconColor:"#ff0000",
            confirmButtonColor: ' #ff0000',
        }).then((result2)=> {
            if (result2.isConfirmed){
                Swal.fire({
                    title:"Gracias por comprar en Jovies",
                    text: "Tu compra ha sido confirmada, nos estaremos comunicando con vos para darte el status de tu pedido",
                    icon:"success",
                    iconColor:"#ff0000",
                    confirmButtonColor: ' #ff0000',
                })
                carrito.splice(0, carrito.length);
                localStorage.removeItem("carritoCompras")
                ver(carrito)
            }
        })
        }
      })
})

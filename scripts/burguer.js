// ARRAYS Y VARIABLES //

let carrito = JSON.parse(localStorage.getItem("carritoCompras")) || [] ;
let total = document.getElementById("modal-footer");
let modalCarrito = document.getElementById("modalBody");
let botonCarrito = document.getElementById("btnCarrito");
let btnVaciar = document.getElementById("btnVaciar");
let btnPedir = document.getElementById("btnEnd");
let div = document.getElementById("loader");

// FETCH OBJETOS // 

fetch("../json/hamburguesas.json")
.then(response => response.json())
.then((data)=>{
   print(data.hamburguesas)
})

// PLANTILLAS //

function print (array){
    array.forEach((element)=> {
        let producto = document.getElementById("sectionHamburguesas");
        let burguer = document.createElement("div");
        burguer.innerHTML=
                `<div class= " d-flex flex-column justify-content-between align-items-center mt-5 animacion">
                    <img class="imgBurguers imgAnimacion mb-3" src="${element.imagen}" alt="">
                    <h2 class="titleFooter">${element.nombre}</h2>
                    <button type="button" class="btn btnColor btn-lg text-white" data-bs-toggle="modal" data-bs-target="#${element.id}">
                    Descripcion
                    </button>
                    <div class="modal fade modals" id="${element.id}" tabindex="-1" aria-labelledby="${element.id}Label" aria-hidden="true">
                    <div class = "modal-dialog">   
                        <div class="modal-content">
                            <div class="modal-header d-flex flex-column justify-content-between">
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <h2 class="modal-title fontTitle" id="${element.id}Label">${element.nombre}</h2>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <img class="imgBurguers mb-3" src="${element.imagen}" alt="${element.nombre}">
                                <p class="fontP">${element.descripcion}</p>
                            </div>
                            <form>
                                <div class="modal-body">
                                    <h2 class="fontModal">¿Desea agregar esto a su combo?</h2>
                                    <div class="d-flex  justify-content-evenly w-50 mt-2">
                                        <div class="d-flex flex-column justify-content-between align-items-center w-100">
                                            <label for="bebidas">Gaseosa($200)</label>
                                            <input type=checkbox id="gaseosa${element.id}">
                                        </div>
                                        <div class="d-flex flex-column justify-content-between align-items-center w-100">  
                                            <label for="">Papas($200)</label>
                                            <input type=checkbox id="papas${element.id}">
                                        </div>
                                    </div>
                                    <button id="btnCalcular${element.id}" type="button" class="btn bg-dark mt-4 ms-2 text-white">Calcular</button>
                                    <button id="btnReiniciar${element.id}" type="submit" class="btn bg-dark mt-4 ms-2 text-white">Reiniciar</button>
                                </div>
                                <div class="modal-footer d-flex justify-content-between" id="modalF${element.id}">
                                    <h2 class="fontTitle">Precio: ${element.precio}$</h2>
                                    <button type="submit" id="btn-${element.id}1" class="btns btn bg-dark text-white" data-bs-dismiss="modal" aria-label="Close">Añadir a mi pedido</button>
                                </div>
                            </form>    
                        </div>
                    </div>
                    </div>
                </div>`;
        producto.appendChild(burguer);
        let btnAdd1 = document.getElementById(`btn-${element.id}1`);
        btnAdd1.addEventListener("click", () => {
            agregarCarrito(element)
            Toastify({
                text: `${element.nombre} agregado`,
                duration: 1500,
                style: {
                    background: "black",
                  }
                }).showToast();
        })
        let btnCalcular2 = document.getElementById(`btnCalcular${element.id}`);
        btnCalcular2.addEventListener("click", () =>{sumar2(array)});
    })
}

function ver(array){
    let plantilla = ``; 
    array.forEach((producto)=> {
        plantilla+= 
        `
        <div id="card${producto.id}" class="d-flex w-100 justify-content-around align-items-start border-bottom">
            <img class="imgPedidosModal mb-3" src="${producto.imagen}" alt="">
            <div class="d-flex w-100 flex-column justify-content-between align-items-start mt-3 ms-3">
                <h3 class="fontTitle1">Producto: ${producto.nombre}</h3>
                <h3 class="fontTitle1">Precio: ${producto.precio}$</h3>
            </div>  
            <button id="delete-${producto.id}" type="button" class="btns btn bg-transparent text-white mt-4"><img class="iconT" src="../img/trashpng.png"></button>      
        </div>
        `
        modalCarrito.innerHTML = plantilla;
        let trash = document.getElementById(`delete-${producto.id}`);
        trash.addEventListener("click", () => {
            let index = carrito.indexOf(producto);
            carrito.splice(0, index);
            console
        })
    })
}

// BOTONES Y FUNCIONES// 

function agregarCarrito(producto){
    carrito.push(producto)
    localStorage.setItem("carritoCompras", JSON.stringify(carrito));
}

function carritoVacio(){
    modalCarrito.innerHTML = `<h3 class="fontTitle1">No has seleccionado ningun producto</h3>`
}

function sumar(array){
    let acum = 0
    array.forEach((producto => {
        acum += (producto.precio)
    }))
    let div = document.createElement("div");
    div.innerHTML = 
    `<div class="w-100 d-flex justify-content-between align-items-center">
        <div class="mt-3"> <h3 class="fontTitle">Total: ${acum}$ </div>
    </div>`
    acum === 0 ? carritoVacio() :  modalCarrito.appendChild(div);
}

function sumar2(array){
    array.forEach((element)=>{
        let papas = document.getElementById(`papas${element.id}`);
        let bebida = document.getElementById(`gaseosa${element.id}`);
        let modalF = document.getElementById(`modalF${element.id}`);
        if(papas.checked){
            element.precio = element.precio + 200
            modalF.innerHTML = `
            <h2 class="fontTitle">Precio: ${element.precio}$</h2>
                            <button id="btn-${element.id}" type="submit" class="btns btn bg-dark text-white" data-bs-dismiss="modal" aria-label="Close">Añadir a mi pedido</button>
            `
            let btnAdd = document.getElementById(`btn-${element.id}`);
            btnAdd.addEventListener("click", () => {
                agregarCarrito(element)
                Toastify({
                    text: `${element.nombre} agregado`,
                    duration: 1500,
                    style: {
                        background: "black",
                      }
                    }).showToast();
            })
        }
        if (bebida.checked){
            element.precio = element.precio + 200
            modalF.innerHTML = `
            <h2 class="fontTitle">Precio: ${element.precio}$</h2>
                            <button id="btn-${element.id}" type="submit" class="btns btn bg-dark text-white" data-bs-dismiss="modal" aria-label="Close">Añadir a mi pedido</button>
            `
            let btnAdd = document.getElementById(`btn-${element.id}`);
            btnAdd.addEventListener("click", () => {
                agregarCarrito(element)
                Toastify({
                    text: `${element.nombre} agregado`,
                    duration: 1500,
                    style: {
                        background: "black",
                      }
                    }).showToast();
            })
        }
    })
   
}

btnVaciar.addEventListener("click", ()=> {
    carrito.splice(0, carrito.length);
    localStorage.removeItem("carritoCompras")
    ver(carrito)
})

botonCarrito.addEventListener("click", () => {
    ver(carrito);
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



// ARRAYS Y VARIABLES //

let hamburguesas = [];
let carrito = JSON.parse(localStorage.getItem("carritoCompras")) || [] ;
let total = document.getElementById("modal-footer");
let modalCarrito = document.getElementById("modalBody");
let botonCarrito = document.getElementById("btnCarrito");
let div = document.getElementById("loader");
let btnVaciar = document.getElementById("btnVaciar");

// CONSTRUCTORES //

class Hamburguesa {
    constructor (id, nombre, descripcion, precio, imagen){
        this.orden = hamburguesas.length;
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    } 
}

// OBJETOS //

const fatJoe = new Hamburguesa ("joe", "Fat Joe", "Ingredientes: Triple medallon de carne, cheddar, panceta, salsa jovie, mayonesa y cebolla caramelizada ", 1300, "../img/joe.png");
const fatLovie = new Hamburguesa ("lovie", "Fat Lovie", "Ingredientes: Doble Medallon de carne, huevo, lechuga, tomate, salsa jovie, mayonesa, panceta y cheddar", 1150, "../img/lovieMenu.png");
const rita = new Hamburguesa ("rita", "Rita's (Veggie)", "Ingredientes: Un medallon de soja texturizada, pepinillos, tomate. lechuga, cheddar y salsa jovie ", 1200, "../img/rita.png");
const dexterino = new Hamburguesa ("dexter", "Dexterino", "Ingredientes: Doble medallon de carne, extra panceta, cheddar y salsa jovie ", 1150, "../img/dexterino.png");
const harrison = new Hamburguesa ("harrison", "Harrison (Kids)", "Ingredientes: una hamburguesa simple con cheddar y salsa jovie ", 750, "../img/harrison.png");
const fatista = new Hamburguesa ("fatista", "Fatista", "Ingredientes: Cuadruple medallon de carne,queso roquefort, salsa jovie, cebolla caramelizada, panceta y lechuga", 1400, "../img/fatist.png");
const debras = new Hamburguesa ("debras", "Debra 's", "Ingredientes: Un medallon de carne de 150gr, lechuga, pan con semillas, cheddar y cebolla crispy y mayonesa", 1200, "../img/debras.png");
const doakes = new Hamburguesa ("doakes", "Doakes", "Ingredientes: Pan negro, un medallon de carne, lechuga, tomate, cebolla, mayonesa, salsa jovie y pepinillos ", 1200, "../img/doake.png");
hamburguesas.push(fatJoe, fatLovie, dexterino, harrison, fatista, rita, doakes, debras );

// PLANTILLAS //

function print(){

    hamburguesas.forEach((element)=> {
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
                            <div class="modal-body">
                                <h2 class="fontModal">¿Desea agregar esto a su combo?</h2>
                                <div class="d-flex  justify-content-evenly w-50 mt-2">
                                    <div class="d-flex flex-column justify-content-between align-items-center w-100">
                                        <label for="bebidas">Gaseosa($200)</label>
                                        <input type=checkbox id="">
                                    </div>
                                    <div class="d-flex flex-column justify-content-between align-items-center w-100">  
                                        <label for="">Papas($200)</label>
                                        <input type=checkbox id="">
                                    </div>
                                </div>
                                <h2 class="fontModal mt-5">Alguna observacion que quieras agregar a tu hamburguesa</h2>
                                <textarea class="w-50 h-100" id="obs-${element.id}" placeholder="Escribe aqui.."></textarea>
                            </div>
                            <div class="modal-footer d-flex justify-content-between">
                                <h2 class="fontTitle">Precio: ${element.precio}$</h2>
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
                text: `${element.nombre} agregado`,
                duration: 1500,
                style: {
                    background: "black",
                  }
                }).showToast();
        });
    })
}

function ver(array){
    let plantilla = ``; 
    array.forEach((producto)=> {
        let obs = document.getElementById(`obs-${producto.id}`).value
        plantilla+= 
        `
        <div id="card${producto.id}" class="d-flex w-100 justify-content-around align-items-start border-bottom">
            <img class="imgPedidosModal mb-3" src="${producto.imagen}" alt="">
            <div class="d-flex w-100 flex-column justify-content-between align-items-start mt-3 ms-3">
                <h3 class="fontTitle1">Producto: ${producto.nombre}</h3>
                <h3 class="fontTitle1">Observaciones: ${obs}</h3>
                <h3 class="fontTitle1">Precio: ${producto.precio}$</h3>
            </div>  
            <button id="delete-${producto.id}" type="button" class="btns btn bg-transparent text-white mt-4"><img class="iconT" src="../img/trashpng.png"></button>      
        </div>
        `
        modalCarrito.innerHTML = plantilla;
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

btnVaciar.addEventListener("click", ()=> {
    carrito.splice(0, carrito.length);
    localStorage.removeItem("carritoCompras")
    ver(carrito)
})

botonCarrito.addEventListener("click", () => {
    ver(carrito);
    sumar(carrito);
});

const loader = setTimeout(() => {
    div.innerHTML= "";
}, 1000)

const products = setTimeout(() => {
    print()
},1000  )


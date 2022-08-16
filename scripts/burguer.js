// ARRAYS //

const hamburguesas = [];

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

// OBJETOS (Hamburguesas) //

const fatJoe = new Hamburguesa ("joe", "Fat Joe", "Ingredientes: Triple medallon de carne, cheddar, panceta, salsa jovie, mayonesa y cebolla caramelizada ", 1300, "../img/joe.png");
hamburguesas.push(fatJoe);
const fatLovie = new Hamburguesa ("lovie", "Fat Lovie", "Ingredientes: Doble Medallon de carne, huevo, lechuga, tomate, salsa jovie, mayonesa, panceta y cheddar", 1500, "../img/lovieMenu.png");
hamburguesas.push(fatLovie);
const rita = new Hamburguesa ("rita", "Rita's (Veggie)", "Ingredientes: Un medallon de soja texturizada, pepinillos, tomate. lechuga, cheddar y salsa jovie ", 1500, "../img/rita.png");
hamburguesas.push(rita);
const dexterino = new Hamburguesa ("dexter", "Dexterino", "Ingredientes: Doble medallon de carne, extra panceta, cheddar y salsa jovie ", 1500, "../img/dexterino.png");
hamburguesas.push(dexterino);
const harrison = new Hamburguesa ("harrison", "Harrison (Kids)", "Ingredientes: una hamburguesa simple con cheddar y salsa jovie ", 1500, "../img/harrison.png");
hamburguesas.push(harrison);
const fatista = new Hamburguesa ("fatista", "Fatista", "Ingredientes: Cuadruple medallon de carne,queso roquefort, salsa jovie, cebolla caramelizada, panceta y lechuga", 1500, "../img/fatist.png");
hamburguesas.push(fatista);
const debras = new Hamburguesa ("debras", "Debra 's", "Ingredientes: Un medallon de carne de 150gr, lechuga, pan con semillas, cheddar y cebolla crispy y mayonesa", 1500, "../img/debras.png");
hamburguesas.push(debras);
const doakes = new Hamburguesa ("doakes", "Doakes", "Ingredientes: Pan negro, un medallon de carne, lechuga, tomate, cebolla, mayonesa, salsa jovie y pepinillos ", 1500, "../img/doake.png");
hamburguesas.push(doakes);

// PLANTILLAS //

hamburguesas.forEach((element)=> {
    let producto = document.getElementById("sectionHamburguesas");
    let burguer = document.createElement("div");
    burguer.innerHTML=
            `<div class= " d-flex flex-column justify-content-between align-items-center mt-5">
                <img class="imgBurguers mb-3" src="${element.imagen}" alt="">
                <h2 class="titleFooter text-white">${element.nombre}</h2>
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
                            <h2 class="fontTitle1">Dejanos tus datos asi agendamos tu pedido</h2>
                            <input type=text name="nombre" placeholder="Tu nombre..">
                            <input type=text name="direccion" placeholder="Direccion">
                            <h2 class="fontModal mt-5">Forma de pago</h2>
                            <div class="d-flex justify-content-evenly w-50 mt-2">
                                <div class="d-flex w-50">
                                    <label for="efectivo">Efectivo</label>
                                    <input class="ms-1" type=checkbox value="efectivo">
                                </div>
                                <div class="d-flex justify-content-evenly w-50">  
                                    <label for="transf">Transferencia</label>
                                    <input type=checkbox value="transf">
                                </div>
                            </div>
                            <h2 class="fontModal mt-5">¿Desea agregar esto a su combo?</h2>
                            <div class="d-flex  justify-content-evenly w-50 mt-2">
                                <div class="d-flex flex-column justify-content-between align-items-center w-100">
                                    <label for="bebida">Gaseosa($200)</label>
                                    <input type=checkbox value="bebida">
                                </div>
                                <div class="d-flex flex-column justify-content-between align-items-center w-100">  
                                    <label for="papas">Papas($200)</label>
                                    <input type=checkbox value="papas">
                                </div>
                            </div>
                            <h2 class="fontModal mt-5">Alguna observacion que quieras agregar a tu hamburguesa</h2>
                            <textarea class="w-50 h-100" placeholder="Escribe aqui.."></textarea>
                        </div>
                        <div class="modal-footer d-flex justify-content-between">
                            <h2 class="fontModal">Total : ${element.precio}$</h2>
                            <button type="button" class="btns btn btnColor text-white">Añadir a mi pedido</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>`;
    producto.appendChild(burguer);
})


// BOTONES // 
/*
function agregar(){
    console.log("Usted a agregado este producto a su pedido")
}

let botonesCarrito = document.getElementsByClassName("btns");
for(let boton of botonesCarrito){
    boton.addEventListener("click", agregar)
}

let pedidosJSON = JSON.stringify(hamburguesas);
localStorage.setItem("array", pedidosJSON);
    
*/




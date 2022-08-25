// ARRAYS Y VARIABLES //

let pollos = [];
let carrito = JSON.parse(localStorage.getItem("carritoCompras")) || [] ;
let botonCarrito = document.getElementById("btnCarrito1");
let total = document.getElementById("modal-footer1");
let btnVaciar = document.getElementById("btnVaciar2");
let modalCarrito = document.getElementById("modalBody2");

// CONSTRUCTORES //

class Pollo {
    constructor (id, nombre, descripcion, precio, imagen){
        this.orden = pollos.length;
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// OBJETOS //

const iceTruck = new Pollo ("ice", "Ice Truck bucket", "Contiene: 6 alitas, 6 pechugas y dip de salsa barbacoa", 1250, "../img/iceTruck.png");
const trinity = new Pollo ("trinity", "Trinity bucket", "Contiene: 6 alitas, 3 patitas, 7 pechugas y dip de salsa jovie", 1250, "../img/trinity.png");
const tray = new Pollo ("dooms", "Dooms Day Tray",  "Contiene:  2 patitas y 2 pechugas mas dos panes para acompañar", 750, "../img/trayPollo2.png")
pollos.push(trinity, iceTruck, tray)

// PLANTILLAS //

function armar(){
    let section = document.getElementById("sectionPollos");
    let armaBucket = document.createElement("div");
    armaBucket.className ="d-flex flex-column justify-content-between align-items-center mt-5";
    armaBucket.innerHTML = `
    <img class="imgBurguers mb-3" src="../img/bucketArma.png" alt="">
    <h2 class="titleFooter text-white">Arma Tu Bucket!</h2>
    <button type="button" class="btn btnColor btn-lg text-white" data-bs-toggle="modal" data-bs-target="#arma">Descripcion</button>
    <div class="modal fade" id="arma" tabindex="-1" aria-labelledby="armaLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex flex-column justify-content-between">
            <div class="d-flex justify-content-between align-items-center w-100">
              <h2 class="modal-title fontTitle" id="exampleModalLabel">Arma tu Bucket! (100$ x Pieza)</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <img class="imgBurguers mb-3" src="../img/bucketArma.png" alt="">
          </div>
           <form>
                <div class="modal-body">
                        <h2 class="fontTitle1">Armalo como quieras! (min. 8 piezas - max. 16 piezas)</h2>
                        <div class="d-flex justify-content-between align-items-start mt-3 w-100">
                            <div class="d-flex flex-column justify-content-evenly align-items-start mt-3">
                            <label for="pechuga">Pechugas</label>
                            <input id="pechuga" class="w-100" type="number" name="pechuga" placeholder="Cantidad.."  required>
                            </div>
                            <div class="d-flex flex-column justify-content-evenly align-items-start mt-3">
                            <label for="alitas">Alitas</label>
                            <input id="alas" class="w-100" type="number" name="alitas" placeholder="Cantidad.."  required>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-start mt-3 w-100">    
                            <div class="d-flex flex-column justify-content-evenly align-items-start mt-3">
                            <label for="patitas">Patitas</label>
                            <input id="patas" class="w-100" type="number" name="patitas" placeholder="Cantidad.."  required>
                            </div>
                            <div class="d-flex flex-column justify-content-evenly align-items-start mt-3">
                            <label for="muslo">Muslos</label>
                            <input id="muslo" class="w-100" type="number" name="muslo" placeholder="Cantidad.."  required>
                            </div>
                        </div>
                    <h2 class="fontModal mt-5">¿Desea agregar esto a su combo?(si va seleccionar hagalo ANTES de calcular)</h2>
                    <div class="d-flex  justify-content-evenly w-50 mt-2 mb-4">
                        <div class="d-flex flex-column justify-content-between align-items-center w-100">
                        <label for="bebida">Gaseosa($200)</label>
                        <input id="bebida" type=checkbox value="bebida">
                        </div>
                        <div class="d-flex flex-column justify-content-between align-items-center w-100">  
                            <label for="papas">Papas($200)</label>
                            <input id="papas" type=checkbox value="papas">
                        </div>
                    </div>
                    <div>
                        <button id="btnCalcular" type="button" class="btn bg-dark mt-3 text-white">Calcular</button>
                        <button id="btnReiniciar" type="button" class="btn bg-dark mt-3 text-white">Reiniciar</button>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-between align-items-center" id="footerArma"></div>
            </form>
        </div>
      </div>
    </div>
    `
    section.appendChild(armaBucket);
}
armar()
function imprimir(){
    pollos.forEach((element)=> {
        let producto = document.getElementById("sectionPollos");
        let pollo = document.createElement("div");
        pollo.innerHTML=
                `<div class= " d-flex flex-column justify-content-between align-items-center mt-5 animacion">
                    <img class="imgBurguers imgAnimacion mb-3" src="${element.imagen}" alt="">
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
                                <h2 class="fontModal">¿Desea agregar esto a su combo?("haga click antes de calcular")</h2>
                                <div class="d-flex  justify-content-evenly w-50 mt-2 mb-4">
                                    <div class="d-flex flex-column justify-content-between align-items-center w-100">
                                        <label for="bebida">Gaseosa($200)</label>
                                        <input type=checkbox value="bebida">
                                    </div>
                                    <div class="d-flex flex-column justify-content-between align-items-center w-100">  
                                        <label for="papas">Papas($200)</label>
                                        <input type=checkbox value="papas">
                                    </div>
                                </div>
                                <h2 class="fontModal mt-5">Alguna observacion que quieras agregar a tu pollo</h2>
                                <textarea class="w-50 h-100" id="obs-${element.id}" placeholder="Escribe aqui.."></textarea>
                            </div>
                            <div class="modal-footer">
                                <button type="button" id="btn-${element.id}" class="btns btn bg-dark text-white" data-bs-dismiss="modal" aria-label="Close">Añadir a mi pedido</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>`;
        producto.appendChild(pollo);
        let btnCartP = document.getElementById(`btn-${element.id}`);
        btnCartP.addEventListener("click",() =>  {
            agregarCarrito(element)
            Toastify({
                text: `${element.nombre} agregado`,
                duration: 1500,
                style: {
                    background: "black",
                  }
                }).showToast();
        })
    })
}
imprimir();
function ver(array){
    
    let plantilla = ``; 
    array.forEach((producto)=> {

        plantilla += 
        `
        <div class="d-flex w-100 justify-content-around align-items-start border-bottom">
        <img class="imgPedidosModal mb-3" src="${producto.imagen}" alt="">
        <div class="d-flex w-100 flex-column justify-content-between align-items-start mt-3 ms-2">
        <h3 class="fontTitle1">Producto: ${producto.nombre}</h3>
        <h3 class="fontTitle1">Precio: ${producto.precio}$</h3>
        </div>
        <button id="delete-${producto.id}" type="button" class="btns btn bg-transparent text-white mt-4"><img class="iconT" src="../img/trashpng.png"></button>          
        </div>
        `
        modalCarrito.innerHTML = plantilla;
    })
}

// BOTONES Y FUNCIONES //

botonCarrito.addEventListener("click", () => {
    ver(carrito);
    sumar(carrito);
});

btnVaciar.addEventListener("click", ()=> {
    carrito.splice(0, carrito.length);
    localStorage.removeItem("carritoCompras")
    ver(carrito)
})

let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", sumar2)

let btnReiniciar = document.getElementById("btnReiniciar");
btnReiniciar.addEventListener("click", reiniciar)

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


let acum = 0

function reiniciar(){
    acum = 0
    let footer = document.getElementById("footerArma"); 
    footer.innerHTML =`<h3 class="fontTitle" > Total: ${acum}$ </h3>
    <button id="btnañadir" type="submit" class="btn bg-dark mt-3 text-white">Añadir a mi pedido</button>
    `
}

function sumar2(){
    let footer = document.getElementById("footerArma"); 
    let pechuga = document.getElementById("pechuga").value;
    let alas = document.getElementById("alas").value;
    let muslo = document.getElementById("muslo").value;
    let patas = document.getElementById("patas").value;
    let papas = document.getElementById("papas");
    let bebida = document.getElementById("bebida");
    acum =  acum + (pechuga*100) + (alas*100) + (muslo*100) + (patas*100);
    if (papas.checked){
        acum = acum + 200
    } 
    if (bebida.checked){
        acum = acum + 200
    }
    footer.innerHTML =`<h3 class="fontTitle" > Total: ${acum}$ </h3>
    <button id="btnañadir" type="submit" class="btn bg-dark mt-3 text-white">Añadir a mi pedido</button>
    `
}




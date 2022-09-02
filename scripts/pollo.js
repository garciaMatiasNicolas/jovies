// ARRAYS Y VARIABLES //

let carrito = JSON.parse(localStorage.getItem("carritoCompras")) || [] ;
let botonCarrito = document.getElementById("btnCarrito1");
let total = document.getElementById("modal-footer1");
let btnVaciar = document.getElementById("btnVaciar2");
let modalCarrito = document.getElementById("modalBody2");
let btnPedir = document.getElementById("btnPedir");


// FETCH OBJETOS //

fetch("../db.json")
.then(response => response.json())
.then ((data) => {
    imprimir(data.pollos);
})

// PLANTILLAS //

function armar(){
    let section = document.getElementById("sectionPollos");
    let armaBucket = document.createElement("div");
    armaBucket.className ="d-flex flex-column justify-content-between align-items-center mt-5";
    armaBucket.innerHTML = `
    <img class="imgBurguers mb-3" src="../img/bucketArma.png" alt="">
    <div class="w-75">
        <h2 class="titleFooter text-center text-white">Arma tu bucket!</h2>
    </div>
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

function imprimir(array){
   array.forEach((element)=> {
        let producto = document.getElementById("sectionPollos");
        let pollo = document.createElement("div");
        pollo.innerHTML=
                `<div class= " d-flex flex-column justify-content-between align-items-center mt-5 animacion">
                    <img class="imgBurguers imgAnimacion mb-3" src="${element.image}" alt="">
                    <div class="w-75">
                        <h2 class="titleFooter text-center text-white">${element.name}</h2>
                    </div>
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
                text: `${element.name} agregado`,
                duration: 1500,
                style: {
                    background: "black",
                  }
                }).showToast();
        })
    })
}

function ver(array){
    let plantilla = ``; 
    array.forEach((producto)=> {

        plantilla += 
        `
        <div class="d-flex w-100 justify-content-around align-items-start border-bottom">
        <img class="imgPedidosModal mb-3" src="${producto.image}" alt="">
        <div class="d-flex w-100 flex-column justify-content-between align-items-start mt-3 ms-2">
        <h3 class="fontTitle1">Producto: ${producto.name}</h3>
        <h3 class="fontTitle1">Precio: ${producto.price}$</h3>
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

btnPedir.addEventListener("click", () => {
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
        acum += (producto.price)
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
    papas.checked && (acum = acum + 200);
    bebida.checked && (acum = acum + 200);
    footer.innerHTML =`<h3 class="fontTitle" > Total: ${acum}$ </h3>
    <button id="btnañadir" type="submit" class="btn bg-dark mt-3 text-white">Añadir a mi pedido</button>
    `
}




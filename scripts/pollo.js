// ARRAYS //

let pollos = [];
let carrito = [];

// CLASES //

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
pollos.push(iceTruck);
const trinity = new Pollo ("trinity", "Trinity bucket", "Contiene: 6 alitas, 3 patitas, 7 pechugas y dip de salsa jovie", 1250, "../img/trinity.png");
pollos.push(trinity)


// LOCAL STORAGE // 

 if (localStorage.getItem("carritoCompras")){
    carrito = JSON.parse(localStorage.getItem("carritoCompras"));
}else{
    console.log("Hola")
    localStorage.setItem("carritoCompras", []);
} 


// PLANTILLAS //

pollos.forEach((element)=> {
    let producto = document.getElementById("sectionPollos");
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
                            <div class="d-flex  justify-content-evenly w-50 mt-2 mb-4">
                                <div class="d-flex flex-column justify-content-between align-items-center w-100">
                                    <label for="bebida">Gaseosa($200)</label>
                                    <input type=checkbox value="bebida" id="cbx${element.id}">
                                </div>
                                <div class="d-flex flex-column justify-content-between align-items-center w-100">  
                                    <label for="papas">Papas($200)</label>
                                    <input type=checkbox value="papas" id="cbx2${element.id}">
                                </div>
                            </div>
                            <h2 class="fontModal mt-5">Alguna observacion que quieras agregar a tu pollo</h2>
                            <textarea class="w-50 h-100" placeholder="Escribe aqui.."></textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="button-${element.id}" class="btns btn btnColor text-white" data-bs-dismiss="modal" aria-label="Close">Añadir a mi pedido</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>`;
    producto.appendChild(burguer);
    let btnCarrito = document.getElementById(`button-${element.id}`);
    btnCarrito.addEventListener("click", () => {agregar(element)});
    let cbx = document.getElementById(`cbx${element.id}`);
    let cbx2 = document.getElementById(`cbx2${element.id}`)
    cbx.addEventListener('change' , () => {
        console.log(cbx.checked);
    })
    cbx2.addEventListener('change' , () => {
        console.log(cbx2.checked);
    })
})



function agregar(producto){
    carrito.push(producto)
    console.log(carrito)
    localStorage.setItem("carritoCompras", JSON.stringify(carrito));
}

// BOTONES //


let botonCarrito = document.getElementById("btnCarrito2");
botonCarrito.addEventListener("click", () => {
    ver(carrito);
});


let modalCarrito = document.getElementById("modalBody2");

function ver(array){
    array.forEach((producto)=> {
      
        modalCarrito.innerHTML = 
        `
        <div class="d-flex w-100 justify-content-around align-items-start">
            <img class="imgPedidosModal mb-3" src="${producto.imagen}" alt="">
            <div class="d-flex w-100 flex-column justify-content-between align-items-start mt-3 ms-2">
                <h2 class="fontTitle1">Producto: ${producto.nombre}</h2>
                <h2 class="fontTitle1">Gaseosa:</h2>
                <h2 class="fontTitle1">Observaciones:</h2>
                <h2 class="fontTitle1">Total: ${producto.precio}$</h2>
            </div>       
        </div>
           
        `

    })
}


const pedidos = [];

class Hamburguesa {
    constructor (nombre, descripcion, precio, imagen){
        this.id = pedidos.length
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    } 
}

const fatLovie = new Hamburguesa ( "Fat Lovie", "Ingredientes: Doble Medallon de carne, huevo, lechuga, tomate, salsa jovie, mayonesa, panceta y cheddar", 1500, "../img/lovieMenu.png");
pedidos.push(fatLovie)
const fatJoe = new Hamburguesa ( "Fat Joe", "Ingredientes: Triple medallon de carne, cheddar, panceta, salsa jovie, mayonesa y cebolla caramelizada ", 1300, "../img/joe.png");
pedidos.push(fatJoe)
const fatista = new Hamburguesa ( "Fatista", "Ingredientes: Cuadruple medallon de carne,queso roquefort, salsa jovie, cebolla caramelizada, panceta y lechuga", 1500, "../img/fatist.png");
pedidos.push(fatista)
const dexterino = new Hamburguesa ( "Dexterino", "Ingredientes: Doble medallon de carne, extra panceta, cheddar y salsa jovie ", 1500, "../img/dexterino.png");
pedidos.push(dexterino)
const debras = new Hamburguesa ( "Debra 's", "Ingredientes: Un medallon de carne de 150gr, lechuga, pan con semillas, cheddar y cebolla crispy y mayonesa", 1500, "../img/debras.png");
pedidos.push(debras)
const doakes = new Hamburguesa ( "Doakes", "Ingredientes: Pan negro, un medallon de carne, lechuga, tomate, cebolla, mayonesa, salsa jovie y pepinillos ", 1500, "../img/doake.png");
pedidos.push(doakes)
const harrison = new Hamburguesa ( "Hrrison (Kids)", "Ingredientes: una hamburguesa simple con cheddar y salsa jovie ", 1500, "../img/harrison.png");
pedidos.push(harrison)
console.log(pedidos)


let modalBurguer1 = document.getElementById("joe");
let divModalBurguer1 = document.createElement("div");
divModalBurguer1.className = "modal-dialog"
divModalBurguer1.innerHTML = 
`<div class="modal-content">
    <div class="modal-header d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-between align-items-center w-100">
            <h2 class="modal-title fontTitle" id="exampleModalLabel">${fatJoe.nombre}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal"aria-label="Close"></button>
        </div>
        <img class="imgBurguers mb-3" src=${fatJoe.imagen} alt="">
        <p class="fontP">${fatJoe.descripcion} </p>
    </div>
    <div class="modal-body">
        <input type=text name="nombre" placeholder="Tu nombre..">
        <div class="d-flex flex-column justify-content-between align-items-start mt-3">
        <textarea class="observacion" name="nombre" placeholder="Alguna observacion quequieras agregarle o sacarle a tu hamburguesa.."></textarea> 
        <h2 class="fontTitle1 mt-5">¿Quieres agregar esto a tu combo?</h2>
        <label for="bebidas">Gaseosa</label>
        <input type=checkbox value="bebidas">
        <label for="papas">Papas</label>
        <input type=checkbox value="papas">
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btnColor text-white">Añadir a mi pedido</button>
    </div>
</div>`
modalBurguer1.appendChild(divModalBurguer1);

let modalBurguer2 = document.getElementById("lovie");
let divModalBurguer2 = document.createElement("div");
divModalBurguer2.className = "modal-dialog"
divModalBurguer2.innerHTML = 
`<div class="modal-content">
    <div class="modal-header d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-between align-items-center w-100">
            <h2 class="modal-title fontTitle" id="exampleModalLabel">${fatLovie.nombre}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal"aria-label="Close"></button>
        </div>
        <img class="imgBurguers mb-3" src=${fatLovie.imagen} alt="">
        <p class="fontP">${fatLovie.descripcion} </p>
    </div>4
    <div class="modal-body">
        <input type=text name="nombre" placeholder="Tu nombre..">
        <div class="d-flex flex-column justify-content-between align-items-start mt-3">
        <textarea class="observacion" name="nombre" placeholder="Alguna observacion quequieras agregarle o sacarle a tu hamburguesa.."></textarea> 
        <h2 class="fontTitle1 mt-5">¿Quieres agregar esto a tu combo?</h2>
        <label for="bebidas">Gaseosa</label>
        <input type=checkbox value="bebidas">
        <label for="papas">Papas</label>
        <input type=checkbox value="papas">
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btnColor text-white">Añadir a mi pedido</button>
    </div>
</div>`
modalBurguer2.appendChild(divModalBurguer2);

let modalBurguer3 = document.getElementById("fatista");
let divModalBurguer3 = document.createElement("div");
divModalBurguer3.className = "modal-dialog"
divModalBurguer3.innerHTML = 
`<div class="modal-content">
    <div class="modal-header d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-between align-items-center w-100">
            <h2 class="modal-title fontTitle" id="exampleModalLabel">${fatista.nombre}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal"aria-label="Close"></button>
        </div>
        <img class="imgBurguers mb-3" src=${fatista.imagen} alt=lovie
        <p class="fontP">${fatista.descripcion} </p>
    </div>
    <div class="modal-body">
        <input type=text name="nombre" placeholder="Tu nombre..">
        <div class="d-flex flex-column justify-content-between align-items-start mt-3">
        <textarea class="observacion" name="nombre" placeholder="Alguna observacion quequieras agregarle o sacarle a tu hamburguesa.."></textarea> 
        <h2 class="fontTitle1 mt-5">¿Quieres agregar esto a tu combo?</h2>
        <label for="bebidas">Gaseosa</label>
        <input type=checkbox value="bebidas">
        <label for="papas">Papas</label>
        <input type=checkbox value="papas">
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btnColor text-white">Añadir a mi pedido</button>
    </div>
</div>`
modalBurguer3.appendChild(divModalBurguer3);

let modalBurguer4 = document.getElementById("harrison");
let divModalBurguer4 = document.createElement("div");
divModalBurguer4.className = "modal-dialog"
divModalBurguer4.innerHTML = 
`<div class="modal-content">
    <div class="modal-header d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-between align-items-center w-100">
            <h2 class="modal-title fontTitle" id="exampleModalLabel">${harrison.nombre}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal"aria-label="Close"></button>
        </div>
        <img class="imgBurguers mb-3" src=${harrison.imagen} alt="">
        <p class="fontP">${harrison.descripcion} </p>
    </div>
    <div class="modal-body">
        <input type=text name="nombre" placeholder="Tu nombre..">
        <div class="d-flex flex-column justify-content-between align-items-start mt-3">
        <textarea class="observacion" name="nombre" placeholder="Alguna observacion quequieras agregarle o sacarle a tu hamburguesa.."></textarea> 
        <h2 class="fontTitle1 mt-5">¿Quieres agregar esto a tu combo?</h2>
        <label for="bebidas">Gaseosa</label>
        <input type=checkbox value="bebidas">
        <label for="papas">Papas</label>
        <input type=checkbox value="papas">
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btnColor text-white">Añadir a mi pedido</button>
    </div>
</div>`
modalBurguer4.appendChild(divModalBurguer4);

let modalBurguer5 = document.getElementById("dexterino");
let divModalBurguer5 = document.createElement("div");
divModalBurguer5.className = "modal-dialog"
divModalBurguer5.innerHTML = 
`<div class="modal-content">
    <div class="modal-header d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-between align-items-center w-100">
            <h2 class="modal-title fontTitle" id="exampleModalLabel">${dexterino.nombre}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal"aria-label="Close"></button>
        </div>
        <img class="imgBurguers mb-3" src=${dexterino.imagen} alt="">
        <p class="fontP">${dexterino.descripcion} </p>
    </div>
    <div class="modal-body">
        <input type=text name="nombre" placeholder="Tu nombre..">
        <div class="d-flex flex-column justify-content-between align-items-start mt-3">
        <textarea class="observacion" name="nombre" placeholder="Alguna observacion quequieras agregarle o sacarle a tu hamburguesa.."></textarea> 
        <h2 class="fontTitle1 mt-5">¿Quieres agregar esto a tu combo?</h2>
        <label for="bebidas">Gaseosa</label>
        <input type=checkbox value="bebidas">
        <label for="papas">Papas</label>
        <input type=checkbox value="papas">
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btnColor text-white">Añadir a mi pedido</button>
    </div>
</div>`
modalBurguer5.appendChild(divModalBurguer5);

let modalBurguer6 = document.getElementById("debras");
let divModalBurguer6 = document.createElement("div");
divModalBurguer6.className = "modal-dialog"
divModalBurguer6.innerHTML = 
`<div class="modal-content">
    <div class="modal-header d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-between align-items-center w-100">
            <h2 class="modal-title fontTitle" id="exampleModalLabel">${debras.nombre}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal"aria-label="Close"></button>
        </div>
        <img class="imgBurguers mb-3" src=${debras.imagen} alt="">
        <p class="fontP">${debras.descripcion} </p>
    </div>
    <div class="modal-body">
        <input type=text name="nombre" placeholder="Tu nombre..">
        <div class="d-flex flex-column justify-content-between align-items-start mt-3">
        <textarea class="observacion" name="nombre" placeholder="Alguna observacion quequieras agregarle o sacarle a tu hamburguesa.."></textarea> 
        <h2 class="fontTitle1 mt-5">¿Quieres agregar esto a tu combo?</h2>
        <label for="bebidas">Gaseosa</label>
        <input type=checkbox value="bebidas">
        <label for="papas">Papas</label>
        <input type=checkbox value="papas">
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btnColor text-white">Añadir a mi pedido</button>
    </div>
</div>`
modalBurguer6.appendChild(divModalBurguer6);

let modalBurguer7 = document.getElementById("doakes");
let divModalBurguer7 = document.createElement("div");
divModalBurguer7.className = "modal-dialog"
divModalBurguer7.innerHTML = 
`<div class="modal-content">
    <div class="modal-header d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-between align-items-center w-100">
            <h2 class="modal-title fontTitle" id="exampleModalLabel">${doakes.nombre}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal"aria-label="Close"></button>
        </div>
        <img class="imgBurguers mb-3" src=${doakes.imagen} alt="">
        <p class="fontP">${doakes.descripcion} </p>
    </div>
    <div class="modal-body">
        <input type=text name="nombre" placeholder="Tu nombre..">
        <div class="d-flex flex-column justify-content-between align-items-start mt-3">
        <textarea class="observacion" name="nombre" placeholder="Alguna observacion quequieras agregarle o sacarle a tu hamburguesa.."></textarea> 
        <h2 class="fontTitle1 mt-5">¿Quieres agregar esto a tu combo?</h2>
        <label for="bebidas">Gaseosa</label>
        <input type=checkbox value="bebidas">
        <label for="papas">Papas</label>
        <input type=checkbox value="papas">
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btnColor text-white">Añadir a mi pedido</button>
    </div>
</div>`
modalBurguer7.appendChild(divModalBurguer7);




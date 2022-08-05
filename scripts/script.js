let modalArma = document.getElementById("modal-arma");
let formArma = document.createElement("form");
formArma.innerHTML = ` <h2 class="fontTitle1">Armala con los toppings que quieras!</h2>
                       <input type=text name="nombre" placeholder="Tu nombre..">
                       <input type=text name="cantidad" placeholder="Cant. de Carnes">
                       <div class="d-flex flex-column justify-content-between align-items-start mt-3">
                            <label for="bebidas">Gaseosa</label>
                            <input type=checkbox value="bebidas">
                            <label for="bacon">Bacon</label>
                            <input type=checkbox value="bacon">
                            <label for="papas">Papas</label>
                            <input type=checkbox value="papas">
                            <label for="cebCar">Cebolla Caramelizada</label>
                            <input type=checkbox value="cebCar">
                            <label for="ceb">Cebolla Morada</label>
                            <input type=checkbox value="ceb">
                            <label for="cheddar">Cheddar</label>
                            <input type=checkbox value="cheddar">
                            <label for="mayo">Mayonesa</label>
                            <input type=checkbox value="mayo">
                            <label for="salsa">Salsa Jovie</label>
                            <input type=checkbox value="salsa">
                        </div>`
modalArma.appendChild(formArma);

const usuario = prompt("Bienvenido a Jovies! Ingrese su Nombre");
let decision = 0;
const pedidos = []
class Hamburguesa {
    constructor (tipo, cantidad, bebida, papas){
        this.orden = pedidos.length;
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.bebida = bebida;
        this.papas = papas;
    } 
    
}

class Pollo {
    constructor(tipo, cantidad, bebida, papas){
        this.orden = pedidos.length;
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.bebida = bebida;
        this.papas = papas;
    }
  
}

class Helado {
    constructor(tipo, cantidad){
        this.orden = pedidos.length;
        this.tipo = tipo;
        this.cantidad = cantidad;
    }
    
}

function saludar () {
    let decision1 = prompt(`Bienvenido ${usuario}! Si desea ver el menu escriba 1, si desea navegar libremente por el sitio, escriba 2`)

    if (decision1 == 1){
       mostrarMenu();
    }else{
        alert("Descubrenos por tu cuenta!");
    }
}

function mostrarMenu () {
    let menu = parseInt(prompt("Si desea hamburguesa, escriba 1, si es pollo, 2 y si es postre 3"))
    if (menu == 1){
        armaTuJovie();
    }
    else if (menu == 2){
        armaTuPollo();
    }
    else if (menu == 3){
        armaTuHelado();
    }
    else{
        alert("Intente nuevamente");
        mostrarMenu();
    }

}

function agregar() {
    let decision = prompt("Si desea agregar algo mas a su pedido escriba 1, de lo contrario escriba 2")
    if (decision == 1){
        let producto = prompt(`${usuario}, nuestras opciones en el menu son: hamburguesa, pollo, o postres de todo tipo. Si desea hamburguesa, escriba 1, si es pollo, 2 y si es postre 3`); 
        if (producto == 1){
            armaTuJovie();
        }else if (producto == 2){
            armaTuPollo();
        }else if (producto == 3){
            armaTuHelado();
        }else{
            alert("Intente nuevamente");
            mostrarMenu();
        }
    }else{
        alert("Gracias por pedir en Jovies! Le llegara una notificacion en unos instantes sobre el envio de su pedido.")
    }
}

function armaTuJovie() {
    let tipo1 = prompt("¿De cuantas carnes quiere su hamburguesa? (Simple, doble, triple o cuadruple)");
    let topping = prompt("¿Cuantos toppings quiere en su hamburguesa? (1, 2, 3, 4 o 5)");
    let bebida = prompt("¿Desea agregar gaseosa a su combo?")
    let papas = prompt("¿Desea agregar papas a su combo?")
    let tuJovie = new Hamburguesa (tipo1, topping, bebida, papas);
    console.log(tuJovie);
    pedidos.push(tuJovie);
    agregar();
}

function armaTuPollo() {
    let tipo2 = prompt("¿Que tipo de pollo prefiere? (Pechuga, Muslo, Alitas, Patas)");
    let piezas = prompt("¿Cuantas piezas quiere? (5, 6, 7, 8, 9 o 10)");
    let bebida = prompt("¿Desea agregar gaseosa a su combo?")
    let papas = prompt("¿Desea agregar papas a su combo?")
    let tuPollo = new Pollo (tipo2, piezas, bebida, papas);
    console.log(tuPollo);
    pedidos.push(tuPollo);
    agregar();
}

function armaTuHelado() {
    let tipo3 = prompt("¿Que Helado prefiere? (Sundae, Dexter, Fatista, Cono)");
    let cant = prompt("¿Cuantas va a llevar? (1, 2, 3, 4 o 5)");
    let tuHelado = new Helado (tipo3, cant);
    console.log(tuHelado);
    pedidos.push(tuHelado);
    agregar();
}

saludar();
console.log(pedidos);
const filterPedidos = pedidos.filter((el) => el.cantidad > 2);
console.log(filterPedidos);



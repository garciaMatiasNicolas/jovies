// ARRAYS Y VARIABLES //

// OBJETOS FETCH //

const apiPostres = async () => {
    const call = await fetch("../db.json")
    const products = await call.json()
    plantilla1(products.postres)
}  
apiPostres()

// PLANTILLAS //
const plantilla1 = (array)=>{
    array.forEach(element => {
        let section = document.getElementById("postres");
        let div = document.createElement("div");
        div.innerHTML=
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
                    </div>
                    <div class="modal-footer d-flex justify-content-between" id="modalF">
                        <h2 class="fontTitle">Precio: ${element.price}$</h2>
                        <button id="btn-${element.id}" type="button" class="btns btn btnColor text-white" data-bs-dismiss="modal" aria-label="Close">Añadir a mi pedido</button>
                    </div>
                </div>
            </div>
            </div>
        </div>`;
        section.appendChild(div);
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

    });
}


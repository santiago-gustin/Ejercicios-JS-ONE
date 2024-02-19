let carrito = [];
const divisa = '$';
let total = 0;

const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbutton = document.querySelectorAll(".btn");
const DOMbuttonDelete = document.querySelectorAll(".btn-delete");

let cantidadProducto = [0, 0, 0];

DOMbutton.forEach((button) => {
    button.addEventListener("click", () => {
        //console.log(DOMbutton);
        let marcador = button.getAttribute('marcador');
        cantidadProducto[marcador-1] = cantidadProducto[marcador-1]+1; 
        let precio = button.dataset.precio;
        let totalParcial = sumarPrecios(parseInt(precio));
        //console.log(`El precio del boton ${marcador} es ${totalParcial}`);
        DOMtotal.innerHTML = totalParcial;
        let elemento = document.querySelector(`#carrito li[marcador="${marcador}"]`);
        //document.getElementById("numero").innerText = cantidadProducto[marcador - 1];
        document.getElementsByClassName("numero")[marcador - 1].innerText = cantidadProducto[marcador - 1];
        elemento.style.display = "block";
        //DOMcarrito.innerHTML = `<li class="list-group-item"> ${cantidadProducto[marcador - 1]} x Produc - ${precio}$ <button class="btn-delete btn btn-danger" marcador="${marcador}">X</button></li>`;
    });
});

function sumarPrecios(pre) {
    total = total + pre;
    return total;
}

DOMbuttonDelete.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(DOMbuttonDelete);
        let marcador = button.getAttribute('marcador');
        let cantidad = cantidadProducto[marcador - 1];
        let precio = button.dataset.precio;
        let totalParcial = restarPrecios(parseInt(precio), cantidad);
        let elemento = document.querySelector(`#carrito li[marcador="${marcador}"]`);
        elemento.style.display = "none";
        cantidadProducto[marcador - 1] = 0;
        DOMtotal.innerHTML = totalParcial;
    });
});

function restarPrecios(pre, cantidad) {
    total = total - (pre*cantidad);
    return total;
}
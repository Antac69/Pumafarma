document.addEventListener("DOMContentLoaded", () => {
  cantidadProductos = container_productos.children;
  cantidadProductos_actualizar = container_productos_actualizar.children;
});
const container_productos = document.getElementById("cards-productos--agregar");
const container_inputs_busqueda_agregar = document.getElementById(
  "sec_agregarProductos--agregar"
);
let busqueda_agregar = document.getElementById("busqueda--agregar");
let cantidadProductos;
let cont = 0;
/* actualizar */
const container_inputs_busqueda_actualizar = document.getElementById(
  "sec_agregarProductos--actualizar"
);
let busqueda_actualizar = document.getElementById("busqueda--actualizar");
let cantidadProductos_actualizar;
let cont_actualizar = 0;

container_inputs_busqueda_agregar.addEventListener("keyup", (e) => {
  cont=0;
  container_productos.scrollLeft = 0;
  buscarProducto_agregar(e);
});
container_inputs_busqueda_agregar.addEventListener("click", (e) => {
  moverProductos(e);
});
/* actualizar */
container_inputs_busqueda_actualizar.addEventListener("keyup", (e) => {
  cont_actualizar=0;
  container_productos_actualizar.scrollLeft = 0;
  buscarProducto_actualizar(e);
});
container_inputs_busqueda_actualizar.addEventListener("click", (e) => {
  moverProductos_actualizar(e);
});

const buscarProducto_agregar = (e) => {
    const palabra = busqueda_agregar.value.toUpperCase();
    const encontrado = Object.values(cantidadProductos).forEach((e) => {
      if (e.dataset.category.toUpperCase().indexOf(palabra) > -1 || e.dataset.nombre.toUpperCase().indexOf(palabra)> -1) {
        e.classList.remove('d-none')
      }else{
          e.classList.add('d-none')
      }
    });
};
/* actualizar */
const buscarProducto_actualizar = (e) => {
    const palabra = busqueda_actualizar.value.toUpperCase();
    const encontrado = Object.values(cantidadProductos_actualizar).forEach((e) => {
      if (e.dataset.category.toUpperCase().indexOf(palabra) > -1 || e.dataset.nombre.toUpperCase().indexOf(palabra)> -1) {
        e.classList.remove('d-none')
      }else{
          e.classList.add('d-none')
      }
    });
};
/* mover productos */
const moverProductos = e=>{
  const move = Object.values(cantidadProductos).filter(e=>!e.classList.contains('d-none'))[0].offsetWidth + 16;
  let max = Object.values(cantidadProductos).filter(e=>!e.classList.contains('d-none')).length - 2 
  if(e.target.classList.contains('btn-siguiente--agregar')){
    cont<=max ? cont++ : max;
    container_productos.scrollLeft = move * cont;
  }
  if(e.target.classList.contains('btn-atras--agregar')){
    cont > 0 ? cont-- : 0;
    container_productos.scrollLeft = move * cont;
  }
  /* console.log(cont) */
}
/* actualizar */
const moverProductos_actualizar = e=>{
  const move = Object.values(cantidadProductos_actualizar).filter(e=>!e.classList.contains('d-none'))[0].offsetWidth + 16;
  let max = Object.values(cantidadProductos_actualizar).filter(e=>!e.classList.contains('d-none')).length - 2 
  if(e.target.classList.contains('btn-siguiente--actualizar')){
    cont_actualizar<=max ? cont_actualizar++ : max;
    container_productos_actualizar.scrollLeft = move * cont_actualizar;
  }
  if(e.target.classList.contains('btn-atras--actualizar')){
    cont_actualizar > 0 ? cont_actualizar-- : 0;
    container_productos_actualizar.scrollLeft = move * cont_actualizar;
  }
  /* console.log(cont) */
}

/* Sumit agregar */
const form_venta = document.getElementById('formulario-venta')
const form_detalleVenta = document.getElementById('formulario-detalleVenta')
form_venta.addEventListener('submit',(e)=>{
  e.preventDefault();
  form_venta.submit()
  form_detalleVenta.submit()
})
/* Sumit actualizar */
const form_venta_actualizar = document.getElementById('formulario-venta--actualizar')
const form_detalleVenta_actualizar = document.getElementById('formulario-detalleVenta--actualizar')
form_venta_actualizar.addEventListener('submit',(e)=>{
  e.preventDefault();
  form_venta_actualizar.submit()
  form_detalleVenta_actualizar.submit()
})
let moduloProductos = require('./productos');

let process = require('process');
const { Console } = require('console');
let comando = process.argv[2];

switch (comando) {
  case 'listado':
    let Productos = moduloProductos.leerJSON();
      console.log("HHHHHHHHHHHHHHHHHH")
      console.log('Productos en Stock');
      console.log('HHHHHHHHHHHHHHHHHH');

    productos.forEach(producto => {
     console.log('id: '+ producto.id,'name: ' + producto.name ,'price: ' + producto.price)
      });
    
    break;
    
    case 'agregar': 
    let producto = process.argv[3];
    let price = Number(process.argv[4]);
    if(producto == undefined || price == undefined){
      console.log('/////////////////////////');
      console.log('Colocar producto y precio');
      console.log('/////////////////////////')
    }else{
    moduloProductos.escribirJSON(producto,precio)
    console.log('////////////////////////////////');
    console.log('Producto agregado correctamente!');
    console.log('////////////////////////////////');

    };
    break;

    case 'filtrar':

    let precioMinimo = process.argv[3];
    let precioMaximo = process.argv[4];
    if(precioMaximo === undefined){
      
      console.log('/////////////////////');
      console.log('colocar precio maximo');
      console.log('/////////////////////');
    }else if(minPrice===undefined){
     
      console.log('/////////////////////');
     console.log('Colocar precio minimo');
     console.log('/////////////////////');

    }else{
    let productosFiltrados = moduloProductos.filtrarJSON(minPrice,maxPrice);
     console.log('///////////////////');
     console.log('Lista personalizada');
     console.log('///////////////////');

     productosFiltrados.forEach(producto=>{
       console.log('producto: ' + producto.name,'precio: '  + producto.price)
     });
    };

   case 'CambiarPrecio':
     let id = Number(process.argv[3]);
     let nuevoPrecio = Number(process.argv[4]);
     if(id === undefined || nuevoPrecio === undefined){
       console.log("Colocar id y precio nuevo porfavor") 
     }
     moduloProductos.cambiarPrecio(id,precio);
     console.log('///////////////////////////////');
     console.log('Precio modificado correctamente');
     console.log('///////////////////////////////');
break;

  case 'eliminar':
    let deleteId = Number(process.argv[3]);
    if(deleteId=== undefined){
      console.log('//////////////////////////////////');
      console.log('Ingresar id de producto a eliminar');
      console.log('//////////////////////////////////');
    };
   moduloProductos.eliminar(deleteId);
   console.log('IIIIIIIIIIIIIIIIII');
   console.log('Producto eliminado');
   console.log('IIIIIIIIIIIIIIIIII');
break;

  case 'buscar':
    let nombreProducto = process.argv[3];
        let productosBuscados = moduloProductos.buscar(nombreProducto);
        if(productosBuscados.length !== 0){   
          console.log('/////////////////////////');
          console.log('Resultados de la búsqueda');
          console.log('/////////////////////////');
      productosBuscados.forEach(producto => {
      console.log('id: '+ producto.id +' Producto: ' + producto.name + ' Precio: ' + producto.price)
      });
      }else{
          console.log('//////////////////////');
          console.log('Producto no encontrado');
          console.log('//////////////////////');

      }
  
  }

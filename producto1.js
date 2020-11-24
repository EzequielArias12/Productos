const { Console } = require('console');
let fs = require('fs');

let moduloProductos ={
    leerJSON:function(){
     
    listadoDeProductos = fs.readFyleSync('./Productos.json','utf -8');

    let productos = JSON.parse(listadoDeProductos);
    return productos

    },

    escribirJSON: (nombreProducto,precio)=>{
    let listadoDeProductos = moduloProductos.leerJSON();
    let lastId = 1

    listadoDeProductos.map(function(producto){
    if(producto.id > lastId){
        lastId = producto.id
      }
    });
    
    let Producto = function(id,name,price){
      this.id = id,  
      this.name = name,
      this.price = price

    };
    let nuevoProducto = new Producto(lastId + 1, nombreProducto, precio); 
    listadoDeProductos.push(nuevoProducto);

    let productosActualizados = JSON.stringify(listadoDeProductos); 
    fs.writeFileSync('./productos.json', productosActualizados, 'utf-8') 
   
   },
   
   FiltrarJSONProductos:(maxPrice,minPrice)=>{
     let listadoDeProductos = moduleProductos.leerJSON();

     let filtrarProductos = listadoDeProductos.filter((producto)=>{
      return producto.price >=minPrice && producto.price <= maxPrice
     })
     return filtrarProducto
   },

   CambiarPrecio : (id,price)=>{
     
    let listadoDeProductos = moduloProductos.leerJSON();
     
    let productosModificar = listadoDeProductos.filter((producto)=>{
    if(producto.id == id){
    producto.price =nuevoPrecio

    };
    return listadoDePrecios
    })
    let productoModificado = JSON.stringify(productoAModificar);
    fs.writeFileSync('./productos.json',productoModificado,'utf-8')
   },
   search : (buscar)=>{
      let listadoDeProductos = moduloProductos.leerJSON();
       let productoBuscado = listadoDeProductos.filter(producto=>{
           return producto.name.TolowerCase().includes(buscar.TolowerCase())
       })
       return productoBuscado
   },
   delete : (id)=>{
       let listadoDeProductos = moduloProductos.leerJSON();
       let quitarProducto = listadoDeProductos.filter(producto=>{
        return producto.id !== id
       })

   }


   




}


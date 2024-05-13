// carrito.service.ts
import { Injectable } from '@angular/core';
import { Producto } from './common/catalogo';

const CART_ITEMS = 'cartItems';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {



  constructor() { }

  
  //para entenderlo mejor, lee primero el metodo obtenerProducto ( abajo)

  // localStorage = simula a una base de datos en tu local
  agregarAlCarrito(producto: Producto) { //metodo de obtencion de productos

    const productosEnCarrito:Producto[] = this.obtenerProductos(); //en una constante de array de productos meto el array que me devuelve el metodo "obtenerProductos"

    productosEnCarrito.push(producto); //añado el producto pasado por parametro a la constante de array de productos 

    localStorage.setItem(CART_ITEMS, JSON.stringify(productosEnCarrito)); // introduzco la constante de array de productos parseado a string en el localStorage (solo se almacenan strings y el json es String)
   


  }
// localStorage = simula a una base de datos en tu local que solo almacena string
  obtenerProductos(): Producto[] { //metodo de obtencion de los productos

    const cartItems: string | null = localStorage.getItem(CART_ITEMS); //en una variable meto un json(osea, un string) de todos los productos que hay en el localStorage

    if (cartItems!=null) { //si no esta vacio
      const productosEnCarrito: Producto[] = JSON.parse(cartItems); // en una constante array de productos meto el jason(cartItems) parseado a product
      return productosEnCarrito; // y returneo la constante array de productos
    }
    return [];
  }
  //att. la cabra Juancri

}

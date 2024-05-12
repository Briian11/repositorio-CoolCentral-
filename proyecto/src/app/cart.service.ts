// carrito.service.ts
import { Injectable } from '@angular/core';
import { Producto } from './common/catalogo';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos: Producto[] = [];

  constructor() { }

  agregarAlCarrito(producto: Producto) {
    this.productos.push(producto);
  }

  obtenerProductos() {
    return this.productos;
  }
}

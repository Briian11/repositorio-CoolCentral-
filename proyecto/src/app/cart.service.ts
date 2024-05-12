// carrito.service.ts
import { Injectable } from '@angular/core';
import { Producto } from './common/catalogo';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productosEnCarrito: Producto[] = [];

  constructor() { }

  agregarAlCarrito(producto: Producto) {
    this.productosEnCarrito.push(producto);
  }

  obtenerProductos(): Producto[] {
    return this.productosEnCarrito;
  }
}

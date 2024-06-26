import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarritoService } from './../../../app/cart.service';
import { Producto } from '../../common/catalogo';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
   productosEnCarrito : Producto[] = [];
  selectedPaymentMethod: string;
  cardholderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  paypalUsername: string;
  paypalPassword: string;
  accountHolderName: string;
  accountNumber: string;
  quantity: number = 1; // Inicializar cantidad
  totalCarrito: number = 0;
  cantidadProductos: number = 0;

  constructor(private carritoService: CarritoService) {
   
    this.selectedPaymentMethod = '';
    this.cardholderName = '';
    this.cardNumber = '';
    this.expirationDate = '';
    this.cvv = '';
    this.paypalUsername = '';
    this.paypalPassword = '';
    this.accountHolderName = '';
    this.accountNumber = '';
    
    
  }
 
  ngOnInit(): void {
    
    this.productosEnCarrito  = this.carritoService.obtenerProductos();
    this.calcularTotal();
    this.actualizarCantidadProductos();
    
  }
  eliminarProducto(producto: Producto) {
    this.carritoService.eliminarDelCarrito(producto);
    this.productosEnCarrito = this.carritoService.obtenerProductos();
    this.calcularTotal();
    this.actualizarCantidadProductos();
  }
  calcularTotal() {
    this.totalCarrito = this.productosEnCarrito.reduce((acumulado, producto) => acumulado + parseFloat(producto.precio), 0);
  }
  actualizarCantidadProductos() {
    this.cantidadProductos = this.productosEnCarrito.length;
  }

  
}

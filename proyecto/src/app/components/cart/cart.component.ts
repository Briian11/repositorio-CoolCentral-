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
  posicion:number=0;
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
    this.productosEnCarrito = this.carritoService.obtenerProductos();
    throw new Error('Method not implemented.');
  }

  // Función para incrementar la cantidad
  increaseQuantity = () => {
    this.quantity++;
  }

  // Función para decrementar la cantidad
  decreaseQuantity() {
    // Verificar que la cantidad sea mayor que 1 antes de decrementar
    if (this.quantity > 1) {
      this.quantity--
    }
  }
}

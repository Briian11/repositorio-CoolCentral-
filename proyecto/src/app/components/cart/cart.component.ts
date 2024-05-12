import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
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

  constructor() {
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

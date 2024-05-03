import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
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

constructor() {
  this.selectedPaymentMethod = ''; // Inicializar si es necesario
  this.cardholderName = '';
  this.cardNumber = '';
  this.expirationDate = '';
  this.cvv = '';
  this.paypalUsername = '';
  this.paypalPassword = '';
  this.accountHolderName = '';
  this.accountNumber = '';
}
}

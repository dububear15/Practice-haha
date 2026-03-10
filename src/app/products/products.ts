import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent {

  products = [
    { name: 'Lipstick', price: 2500, available: true },
    { name: 'Eyeliner', price: 1000, available: false },
    { name: 'Liquid Blush', price: 2000, available: true }
  ];

  cart: any[] = []; 
  cartTotal = 0;

  addToCart(product: any) {
    this.cart.push(product); 
    this.cartTotal += product.price; 
    alert(product.name + ' added to cart!');
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent],
  template: '<app-products></app-products>', // Simplified to show products immediately
})
export class App {
  title = 'My Angular Shop';
}
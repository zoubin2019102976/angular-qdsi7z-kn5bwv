import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  items: Product[] = [];

  addToCar(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCar() {
    this.items = [];
    return this.items;
  }
}

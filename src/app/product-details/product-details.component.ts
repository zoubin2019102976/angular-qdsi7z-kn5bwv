import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private carService: CartService) {}

  ngOnInit() {
    const routerParams = this.route.snapshot.paramMap;
    const productIdFromRouter = Number(routerParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRouter)
  }

  addToCar(product: Product) {
    this.carService.addToCar(product);
    window.alert('Your product has been added to the cart!');
  }
}

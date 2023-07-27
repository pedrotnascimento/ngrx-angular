import { Component, OnInit } from '@angular/core';


type Product = {
  name: string;
  quantity: number;
  id: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-experiment';
  product?: Product;

  ngOnInit(): void {
    this.product = {
      name: "Ipsum Lorem",
      quantity: 0,
      id: "8e37fbf7-ed01-4ffc-9d8f-48a440d81ed3"
    };
  }

  subtractProduct(product: Product) {
    if (product.quantity <= 0) {
      return;
    }
    product.quantity -= 1;
  }

  addProduct(product: Product) {
    product.quantity += 1;
  }

  removeProduct(product: Product){
    product.quantity = 0;
  }

  displayIfHasQuantity(product: Product) {
    return { 'product-action': product.quantity > 0, 'product-disable': product.quantity <= 0 };
  }
}

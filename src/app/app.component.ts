import { Component, OnInit } from '@angular/core';
import { Product } from './types/Product';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-experiment';
  product: Product = { id: "", name: "", quantity: 0 };

  ngOnInit(): void {
    this.product = {
      name: "Ipsum Lorem",
      quantity: 0,
      id: "8e37fbf7-ed01-4ffc-9d8f-48a440d81ed3"
    };
  }

}

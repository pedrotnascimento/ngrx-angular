import { Component, OnInit } from '@angular/core';
import { Product } from './types/Product';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setProductsAction } from './procuct.reducer';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-experiment';
  products: Product[] = [];
  products$: Observable<Product[]>;
  constructor(private store: Store<{ products: Product[]; }>) {
    this.products$ = store.select("products");
  }

  ngOnInit(): void {
    this.products = [
      {
        name: "Lorem Ipsum",
        quantity: 0,
        id: "8e37fbf7-ed01-4ffc-9d8f-48a440d81ed3"
      },
      {
        name: "dolor sit amet",
        quantity: 0,
        id: "91bf3344-6a7a-4132-b4da-68c683fe5fe1"
      },
    ];

    this.store.dispatch(setProductsAction({ products: this.products }));
  }

}

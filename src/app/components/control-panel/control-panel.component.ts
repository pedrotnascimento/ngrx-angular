import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, ObservableLike, map, mergeMap, of } from 'rxjs';
import { Product } from 'src/app/types/Product';
import { addProduct, resetProduct, subtractProduct } from './control-panel.actions';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent {
  @Input() product: Product = { id: "", name: "", quantity: 0 };
  product$?: Observable<Product>;
  constructor(private store: Store<{ controlPanel: Product; }>) {
    this.product$ = store.select("controlPanel");
  }


  subtractProduct(product: Product) {
    this.store.dispatch(subtractProduct());

    // if (product.quantity <= 0) {
    //   return;
    // }
    // product.quantity -= 1;
  }

  addProduct(product: Product) {
    this.store.dispatch(addProduct());
    // product.quantity += 1;
  }

  removeProduct(product: Product) {
    this.store.dispatch(resetProduct());
    // product.quantity = 0;
  }

  displayIfHasQuantity(product: Observable<Product> | undefined) {
    if (product == undefined) {
      return of();
    }
    const mapObject = product.pipe(
      map(product => ({ 'product-action': product.quantity > 0, 'product-disable': product.quantity <= 0 }))
    );
    return product.pipe(
      mergeMap(product => of({ 'product-action': product.quantity > 0, 'product-disable': product.quantity <= 0 }))
      // map(product => ({ 'product-action': product.quantity > 0, 'product-disable': product.quantity <= 0 })) // both works
    );

  }
}

import { Component, Input } from '@angular/core';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent {
  @Input() product: Product = { id: "", name: "", quantity: 0 };

  subtractProduct(product: Product) {
    if (product.quantity <= 0) {
      return;
    }
    product.quantity -= 1;
  }

  addProduct(product: Product) {
    product.quantity += 1;
  }

  removeProduct(product: Product) {
    product.quantity = 0;
  }

  displayIfHasQuantity(product: Product) {
    return { 'product-action': product.quantity > 0, 'product-disable': product.quantity <= 0 };
  }
}

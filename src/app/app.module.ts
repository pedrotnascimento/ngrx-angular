import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { ProductComponent } from './components/product/product.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

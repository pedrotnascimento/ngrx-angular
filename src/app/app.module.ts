import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ProductComponent } from './components/product/product.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { controlPanelReducer } from './components/control-panel/control-panel.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({controlPanel: controlPanelReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

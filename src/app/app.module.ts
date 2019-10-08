import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CartComponent,
    NavComponent,
    CheckoutComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

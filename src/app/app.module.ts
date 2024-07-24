import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopnowComponent } from './shopnow/shopnow.component';
import { MaterialComponent } from './material/material.component';
import { LogoComponent } from './logo/logo.component';
import { Carousal2Component } from './carousal2/carousal2.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopnowComponent,
    MaterialComponent,
    LogoComponent,
    Carousal2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

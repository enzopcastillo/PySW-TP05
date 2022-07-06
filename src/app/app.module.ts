import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { Punto1Component } from './components/pages/punto1/punto1.component';
import { Punto2Component } from './components/pages/punto2/punto2.component';
import { Punto3Component } from './components/pages/punto3/punto3.component';
import { Punto4Component } from './components/pages/punto4/punto4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Punto1Component,
    Punto2Component,
    Punto3Component,
    Punto4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

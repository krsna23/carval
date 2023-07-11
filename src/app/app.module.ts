import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EstimateComponent } from './modal/estimate/estimate.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './reuseable/navbar/navbar.component';
import { ModalModule } from './modal/modal.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    ModalModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvbarComponent } from './avbar/avbar.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AvbarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReuseableModule { }

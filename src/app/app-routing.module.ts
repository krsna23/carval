import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimateComponent } from './modal/estimate/estimate.component';


const routes: Routes = [
  { path:'modal', component: EstimateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimateComponent } from './estimate/estimate.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    EstimateComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EstimateComponent,
    ReportComponent
  ]
})
export class ModalModule {}

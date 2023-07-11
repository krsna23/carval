import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent {

  constructor(private modalService: NgbModal){}

  reportForm= new FormGroup({
    model:new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ])
  });

  submitForm(){
    console.log("saved");
    const model= this.reportForm.value;
    console.log('Model:', model);
  }
}
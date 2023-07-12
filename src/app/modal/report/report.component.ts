import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent {

  @Output() getData = new EventEmitter<string>();

  constructor(private modalService: NgbModal){}

  reportForm= new FormGroup({
    model:new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ])
  });

  submitForm(){
    let model:any;
    //console.log("saved");
    model= this.reportForm.value;
    this.getData.emit(model.model);
    console.log('Model:', model);
  }

  openModal(content: any){
    this.modalService.open(content);
  }
}
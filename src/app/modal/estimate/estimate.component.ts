import { Component, EventEmitter, Output  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Car{
  model: string,
  make: number,
  year: number,
  mileage: number,
  latitude: number,
  longitude: number
}

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent {
  
  @Output() carDataEvent = new EventEmitter<Car>();

  emailForm= new FormGroup({
    model: new FormControl('', [
      Validators.required,
      Validators.maxLength(4)
    ]),
    make: new FormControl('', [
      Validators.required,
      Validators.maxLength(4)
    ]),
    year: new FormControl('', [
      Validators.required,
      Validators.maxLength(4)
    ]),
    mileage: new FormControl('', [
      Validators.required,
      Validators.maxLength(200000)
    ]),
    latitude: new FormControl('', [
      Validators.required,
      Validators.maxLength(4)
    ]),
    longitude: new FormControl('', [
      Validators.required,
      Validators.maxLength(4)
    ])

  });
  
  car: Car = {
    model:'',
    make: 0,
    year: 0,
    mileage:0,
    latitude: 0,
    longitude: 0
  };
  
  constructor(private modalService: NgbModal){}

  openModal(content: any){
    //console.log("CLicked the button");
    this.modalService.open(content);
  }

  onSubmit(){
   const modelE= this.emailForm.controls.model.errors;
    //console.log("submit");
    //console.log(this.car);

    this.car = {
      model: this.emailForm.value.model!,
      make: parseInt(this.emailForm.value.make!),
      year: parseInt(this.emailForm.value.year!),
      mileage: parseInt(this.emailForm.value.mileage!),
      latitude: parseInt(this.emailForm.value.latitude!),
      longitude: parseInt(this.emailForm.value.longitude!)
    }
    //console.log(this.car);
    this.carDataEvent.emit(this.car);
    //console.log(modelE);
  }
}
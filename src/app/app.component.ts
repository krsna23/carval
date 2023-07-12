import { Component} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './api.service';

import { ViewChild } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstimateComponent } from './modal/estimate/estimate.component';

interface Car {
  model: string;
  make: number;
  year: number;
  mileage: number;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  @ViewChild(EstimateComponent)
  estimateComponent!: EstimateComponent;
  message!: string;
  title: any;

  constructor(private modalService: NgbModal,
              private http: HttpClient,
              private apiService: ApiService){}
  
  ngOnInit() {
    console.log("NGONIT");
  }
  carData(carData: Car){
    console.log("data parent", carData);
    this.apiService.postData(carData);
  }

  getData(id: string){
    this.apiService.getCar(id);
  }
  
  
  

  openModal(){
    this.modalService.open('modalId');
  }

}

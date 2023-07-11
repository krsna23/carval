import { Component} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private modalService: NgbModal,private http: HttpClient){}


  ngOnInit() {
    console.log("NGONIT");
  //   this.http.post(environment.apiUrl + '/estimate', carDetails)
  //   .pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error('An error occurred:', error);
  //       return throwError('Something went wrong. Please try again later.');
  //     })
  //   ).subscribe((response: any) => {
  //     console.log("After error")
  //     console.log(response);
  //     this.message = response.message;
  //     console.log(this.message);
  //   });
  }
  
  handleCarData(carData: Car){
    console.log("data parent", carData);
  }

  openModal(){
    this.modalService.open('modalId');
  }
}

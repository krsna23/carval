import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


interface Car {
  model: string;
  make: number;
  year: number;
  mileage: number;
  latitude: number;
  longitude: number;
}


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  constructor(private http: HttpClient) {}

  postData( carData: Car){
    //console.log("ApiSer data:", carData);
    this.http.post(environment.apiUrl + '/estimate', carData).subscribe(
      response => {
        console.log("Data Posted");
        // Handle the response here if needed
      },
      error => {
        console.error("Error while posting data:", error);
        // Handle the error here if needed
      }
    );;

    
    //console.log("Data Posted");
  }

  //Making use of reports-model for now to practice get requests
    // In the site, Go to reports and in the 'make' give id:

  getCar(id: string){
    console.log("GET route: " + id);
    return this.http.get(environment.apiUrl + '/estimate'+ `/${id}`).pipe(
      map((response: any) => response?.make)
    ).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log("Error while getting data", error);
      }
    });
    //console.log("Data Posted");
  }
}
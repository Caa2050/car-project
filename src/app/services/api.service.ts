import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../Car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/cars'
  constructor(private http:HttpClient) { 
   
  }

   getAll(): Observable<Car[]>{
    return this.http.get<Car[]>(this.apiUrl);
   }
    getItem(text:string): Observable<Car[]>{
    return this.http.get<Car[]>(`${this.apiUrl}?q=${text}`)
  }
  getCar(id:number): Observable<Car>{
    return this.http.get<Car>(`${this.apiUrl}/${id}`)
  }
}

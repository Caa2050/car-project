import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/Car';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-car-specs',
  templateUrl: './car-specs.component.html',
  styleUrls: ['./car-specs.component.css','./car-specs.responsive.component.css']
})
export class CarSpecsComponent {
  car?:Car
  constructor(private apiService:ApiService, private route:ActivatedRoute){
    this.getCar()
  }
  getCar(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.apiService.getCar(id).subscribe((car)=>(this.car = car));
  }
}

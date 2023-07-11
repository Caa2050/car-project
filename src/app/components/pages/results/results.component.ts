import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/Car';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css','results.responsive.component.css']
})
export class ResultsComponent implements OnInit {
  cars:Car[] = [];
  constructor(private apiService:ApiService, private route:ActivatedRoute){
    this.getCars()
  }
  ngOnInit(): void {
    
  }
  getall():void{
    this.apiService.getAll().subscribe((x) => (this.cars = x));
  }
  getCars(){
    // O comando abaixo vai pegar o id que está sendo mandado de list-render
    const text = String(this.route.snapshot.paramMap.get("text"))
    this.apiService.getItem(text).subscribe((cars)=>(this.cars = cars));
  }
}

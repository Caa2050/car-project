import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchCarsComponent } from './components/pages/search-cars/search-cars.component';
import { CarSpecsComponent } from './components/pages/car-specs/car-specs.component';
import { ResultsComponent } from './components/pages/results/results.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchCarsComponent},
  {path:':id',component:CarSpecsComponent},
  {path:'search/:text',component:ResultsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

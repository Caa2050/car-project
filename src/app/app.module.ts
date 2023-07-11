import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchCarsComponent } from './components/pages/search-cars/search-cars.component';
import { CarSpecsComponent } from './components/pages/car-specs/car-specs.component';
import { ResultsComponent } from './components/pages/results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchCarsComponent,
    CarSpecsComponent,
    ResultsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

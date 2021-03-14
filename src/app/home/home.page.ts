import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

interface Car {
  brand: string;
  model: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public brand: string;
  public model: string;

  public carbrands = ['Toyota', 'BMW'];
  public carmodels = [];
  public addedcars: Car[] = [];
  public allcars: Car[] = [
    {brand:'Toyota', model:'Hiace'},
    {brand:'Toyota', model:'Camry'},
    {brand:'BMW', model:'X7'},
    {brand:'Toyota', model:'Prius'}];
  
  public wrongCarEntry = '';
  public wrongCusEntry = '';

  constructor() {}


  onChangeBrand(selectedbrand) {
    this.carmodels = [];
    this.brand = selectedbrand.target.value;

    this.allcars.forEach(car => {
      if (car.brand == selectedbrand.target.value)
      {
        this.carmodels.push(car.model);
      }
      else
      {
        
      }
    });
  }

  onChangeModel(selectedmodel) {
    this.model = selectedmodel.target.value;
  }

  addCarclicked(){
    this.wrongCarEntry = '';

    if (this.brand == undefined || this.model == undefined) {
      this.wrongCarEntry = 'Invalid input in fields';
    }
    else {
      this.addedcars.push({brand: this.brand, model: this.model});
    }
  }
      


}

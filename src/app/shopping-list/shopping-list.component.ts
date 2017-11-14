import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {
  // here are declaring the type of the ingredient array to be of 
  // type Ingredient, and we add the array notation to denote it 
  // as a type array. 
  // make sure you import the model module above so this component has access
  // to the model that you created 
ingredients: Ingredient[] = [
  // using the new keyword is an example of 
  // OOP, or inheritance, or polymorphism
  new Ingredient('Apples', 5),
  new Ingredient('Tomatoes', 10),

];
  
  constructor() { }

  ngOnInit() {
  }

}

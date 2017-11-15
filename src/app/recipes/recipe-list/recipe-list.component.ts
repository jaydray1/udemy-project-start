import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {Recipe} from '../recipe.model';

// the @Component is a decorator; decorators contain meta-data about a component;
// meta-data is just additional information that the file needs in order 
// to CONFIGURE the BEHVIOR of the component.
// from Angular - Decorators are functions that modify JavaScript CLASSES
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is my descirptino of the recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A test Recipe', 'This is my descirptino of the recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A test Recipe', 'This is my descirptino of the recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    
  ];

  constructor() { }

  ngOnInit() {
  }

}

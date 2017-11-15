# UdemyProjectStart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

Main Points of Learning 
- Decorators are functions that contain meta-data about a JavaScript class - they basically tell the component how it should act and look and where it should get it's actions/looks from i.e. html template and style template
- CLASS is JavaScript simulation of a class from an OOP language. It is an object and rather than it's properties being simply copied over from another class, it inherits a class's properties through the prototypal chain, or prototypal inheritance
- You create model using typescript, and like C#, declare it's type and if it is visible publicly or privately - in our case we want to make the CLASS publicly available so we can access it in other classes. We then create constructor in our model file that takes in the parameters that we set as that class - this allows us to instantiate new instances of our constructor function using the 'new' keyword and passing in the data as the types we declared with our TS syntax. 
- SUBNOTE: the constructor is contained IN the model CLASS and rather than writing in our key:value pairs, we can declare them all at once in the constructor function, like so: 
export class Ingredient {
    constructor(public name: string, public amount: number) {}
}
- In our components, in our classes in our components, we can declare variables that represent different states or contain different data. In these components we are creating variables and using a colon we are declaring the type of the variable to be an array, like:
ingredient: Ingredient[] = [
    new Ingredient('apple', 4),
];
the 'new' keyword allows us to instantiate a new object, it serves as a template for use to create as many different objects as type Ingredient that we want - our template is contained in the model that we imported at the top of the component file

- we use *ngFor to 'for-loop' through our object array that we created in the component...we then access the key:value pairs in the array object by using
{{ string interpolation.name }} string interpolation allows us to display data on the DOM through an HTML element 
- we can also use property binding to bind data to an HTML object property, like the <img [src]="recipe.ImagePath" alt="{{recipe.name}}> and then string interpolation on a property to grab the .name data of our *ngFor directive 
- we can declare inline styles in our HTML elements simply using <img style="max-height: 50px;">

* These are the main points of data manipulation, traversing, and displaying that I learned in this project
ANGULAR NOTE: Use the CLI! It's super easy, creates a template for you, and automatically adds your component as an import in your @ngModule root module component, which is what gives your HTML files access to the data in your component files 
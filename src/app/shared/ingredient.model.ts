export class Ingredient {
   // public name: string,
   // public amount: number
   // ts offers a shortcut to writing these all out, you just add it to params 
   // in the constructor method

    constructor(public name: string, public amount: number) {    
        // this.name = name;
        // this.amount = amount;
        // the above can be deleted because TS offers us our shortcut by
        // putting all of this stuff in the params in the constructor
    }
}
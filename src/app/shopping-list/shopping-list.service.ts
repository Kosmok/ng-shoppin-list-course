import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    addIngredient(ingridient: Ingredient) {
        this.ingredients.push(ingridient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingridients: Ingredient[]) {
        this.ingredients.push(...ingridients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredient() {
        return this.ingredients.slice();
    }
}
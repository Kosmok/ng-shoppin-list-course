import { Ingredient } from '../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    addIngredient(ingridient: Ingredient) {
        this.ingredients.push(ingridient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingridients: Ingredient[]) {
        this.ingredients.push(...ingridients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredient() {
        return this.ingredients.slice();
    }
}
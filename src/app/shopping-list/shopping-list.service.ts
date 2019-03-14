import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingridient: Ingredient) {
        this.ingredients.push(ingridient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingridients: Ingredient[]) {
        this.ingredients.push(...ingridients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    updateIngrediet(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngedient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}

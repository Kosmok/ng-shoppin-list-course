import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
            'Bogracz',
            'A tasty Bogracz',
            `https://cdn.apartmenttherapy.info/image/fetch/q_auto,f_auto,fl_strip_profile,w_800,h_533,c_fill/https://s3.amazonaws.com/pixtruder/original_images/edfe9ed943ad0b8b60747f5f19df8177d89e0841`,
            [
                new Ingredient('Meat', 2),
                new Ingredient('Tomatoes', 20)
            ]),
        new Recipe('Big Burger',
            'Is the beast',
            `https://cdn.apartmenttherapy.info/image/fetch/q_auto,f_auto,fl_strip_profile,w_800,h_533,c_fill/https://s3.amazonaws.com/pixtruder/original_images/edfe9ed943ad0b8b60747f5f19df8177d89e0841`,
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 3)
            ])
    ];;

    constructor(private slService: ShoppingListService) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}

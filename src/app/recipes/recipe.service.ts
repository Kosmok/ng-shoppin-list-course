import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

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
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}

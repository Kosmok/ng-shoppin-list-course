import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
    providedIn: 'root'
})
export class DataStrorageService {
    private baseUrl = 'https://ng-test-1e5d1.firebaseio.com/ShoppingListApp';
    constructor(private http: HttpClient,
                private recipeService: RecipeService) { }

    storeRecipes() {
        return this.http.put<Recipe[]>(this.baseUrl + '/recipes.json',
                                    this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get<Recipe[]>(this.baseUrl + '/recipes.json')
        .pipe(
            map((recipes: Recipe[]) => {
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe.ingredients = [];
                    }
                }
                return recipes;
                })
            )
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            });
    }
}

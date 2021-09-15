import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Cabbage with meat',
      'Description of Cabbage with meat',
      'https://www.supichka.com/files/images/514/fit_1400_933.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Cabbage', 1)]
    ),
    new Recipe(
      'Caesar salad ',
      'Description of Caesar salad',
      'https://littlesunnykitchen.com/wp-content/uploads/Caesar-Salad-10-1024x1536.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Parmesan Cheese', 1),
        new Ingredient('Lettuce', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

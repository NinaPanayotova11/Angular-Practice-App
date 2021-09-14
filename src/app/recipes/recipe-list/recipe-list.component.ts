import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipes: Recipe[] = [
    new Recipe(
      'Cabbage with pulled pork',
      'Description of Cabbage with pulled pork',
      'https://www.supichka.com/files/images/514/fit_1400_933.jpg'
    ),
    new Recipe(
      'Caesar salad ',
      'Caesar salad with pork',
      'https://littlesunnykitchen.com/wp-content/uploads/Caesar-Salad-10-1024x1536.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

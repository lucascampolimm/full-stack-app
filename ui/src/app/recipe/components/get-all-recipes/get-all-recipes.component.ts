import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-get-all-recipes',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './get-all-recipes.component.html',
  styleUrl: './get-all-recipes.component.css'
})
export class GetAllRecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.recipeService.get().subscribe((data) => {
      this.recipes = data;
    });
  }
}

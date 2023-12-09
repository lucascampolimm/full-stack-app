import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-get-all-recipes',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule],
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

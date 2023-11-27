import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe.interface';

@Component({
  selector: 'app-all-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.recipeService.get().subscribe((data) => {
      this.recipes = data;
    });
  }
}

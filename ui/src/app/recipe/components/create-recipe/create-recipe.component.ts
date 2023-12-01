import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrUpdateRecipe } from '../../models/create-or-update-recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css'
})
export class CreateRecipeComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  recipe: CreateOrUpdateRecipe = {
    name: '',
    ingredients: '',
    preparationMethod: '',
    imageUrl: '',
    idAuthor: 0
  };

  ngOnInit(): void {}

  createRecipe() {
    this.recipeService.create(this.recipe).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

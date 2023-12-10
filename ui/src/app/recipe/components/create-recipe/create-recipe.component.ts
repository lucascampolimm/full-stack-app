import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrUpdateRecipe } from '../../models/create-or-update-recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule
  ],
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
    imageUrl: ''
  };

  ngOnInit(): void {}

  createRecipe() {
    this.recipeService.create(this.recipe).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }
}

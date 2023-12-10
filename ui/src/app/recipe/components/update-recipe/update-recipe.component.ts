import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { CreateOrUpdateRecipe } from '../../models/create-or-update-recipe.model';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-update-recipe',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule
  ],
  templateUrl: './update-recipe.component.html',
  styleUrl: './update-recipe.component.css'
})
export class UpdateRecipeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  itemId: string = '';

  recipe: CreateOrUpdateRecipe = {
    name: '',
    ingredients: '',
    preparationMethod: '',
    imageUrl: ''
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.itemId = params.get('id') ?? '';
      this.getById;
    });
  }

  getById() {
    this.recipeService.getById(this.itemId).subscribe((data) => {
      this.recipe.name = data.name;
      this.recipe.ingredients = data.ingredients;
      this.recipe.preparationMethod = data.preparationMethod;
      this.recipe.imageUrl = data.imageUrl;
    });
  }

  updateRecipe() {
    this.recipeService.update(this.itemId, this.recipe).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }
}

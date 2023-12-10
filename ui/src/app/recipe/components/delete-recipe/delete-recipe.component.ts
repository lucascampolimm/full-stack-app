import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-delete-recipe',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatToolbarModule],
  templateUrl: './delete-recipe.component.html',
  styleUrl: './delete-recipe.component.css'
})
export class DeleteRecipeComponent {
  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  itemId: string = '';

  deleteRecipe() {
    this.recipeService.delete(this.itemId).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent
} from '@angular/material/dialog';
import { DeleteRecipeComponent } from '../delete-recipe/delete-recipe.component';

@Component({
  selector: 'app-get-all-recipes',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent
  ],
  templateUrl: './get-all-recipes.component.html',
  styleUrl: './get-all-recipes.component.css'
})
export class GetAllRecipesComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  openDialog(data: string): void {
    this.dialog.open(DeleteRecipeComponent, {
      width: '280px',
      height: '200px',
      data
    });
  }

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.recipeService.get().subscribe((data) => {
      this.recipes = data;
    });
  }

  redirectToCreateRecipe() {
    this.router.navigate(['/create-recipe']);
  }

  updateRecipe(id: string) {
    this.router.navigate(['/update-recipe', id]);
  }
}

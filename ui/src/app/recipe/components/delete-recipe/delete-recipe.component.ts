import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { itemId: string }
  ) {}

  closeDialog() {
    this.dialog.closeAll();
  }

  itemId: string = this.data + '';

  deleteRecipe(id: string) {
    this.itemId = id;
    // console.log(this.itemId, this.data);
    this.recipeService.delete(this.itemId).subscribe(() => {
      window.location.reload();
    });
  }
}

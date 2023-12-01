import { Routes } from '@angular/router';
import { GetAllRecipesComponent } from './recipe/components/get-all-recipes/get-all-recipes.component';
import { CreateRecipeComponent } from './recipe/components/create-recipe/create-recipe.component';

export const routes: Routes = [
  { path: '', component: GetAllRecipesComponent },
  { path: 'get-all-recipes', component: GetAllRecipesComponent },
  { path: 'create-recipe', component: CreateRecipeComponent }
];

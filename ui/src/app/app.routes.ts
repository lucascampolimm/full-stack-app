import { Routes } from '@angular/router';
import { GetAllRecipesComponent } from './recipe/components/get-all-recipes/get-all-recipes.component';
import { CreateRecipeComponent } from './recipe/components/create-recipe/create-recipe.component';
import { UpdateRecipeComponent } from './recipe/components/update-recipe/update-recipe.component';
import { NotFoundComponent } from './recipe/components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: GetAllRecipesComponent },
  { path: 'get-all-recipes', component: GetAllRecipesComponent },
  { path: 'create-recipe', component: CreateRecipeComponent },
  { path: 'update-recipe/:id', component: UpdateRecipeComponent },
  { path: '**', component: NotFoundComponent }
];

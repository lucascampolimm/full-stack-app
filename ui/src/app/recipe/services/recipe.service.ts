import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { CreateOrUpdateRecipe } from '../models/create-or-update-recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }

  create(recipe: CreateOrUpdateRecipe) {
    return this.http.post('http://localhost:3000/recipes', recipe);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getById(id: string) {
    return this.http.get<Recipe>('http://localhost:3000/recipes/${id}');
  }

  update(id: string, recipe: CreateOrUpdateRecipe) {
    return this.http.put('http://localhost:3000/recipes/${id}', recipe);
  }
}

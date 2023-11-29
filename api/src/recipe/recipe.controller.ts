import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './schemas/recipe.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('recipes')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Get()
  async getAllRecipes(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }

  @UseGuards(AuthGuard())
  @Post()
  async createRecipe(
    @Body()
    recipe: CreateRecipeDto,
    @Req() req
  ): Promise<Recipe> {
    // console.log(req.user);

    return this.recipeService.create(recipe, req.id);
  }

  @Get(':id')
  async getRecipe(
    @Param('id')
    id: string
  ): Promise<Recipe> {
    return this.recipeService.findById(id);
  }

  @Put(':id')
  async updateRecipe(
    @Param('id')
    id: string,
    @Body()
    recipe: UpdateRecipeDto
  ): Promise<Recipe> {
    return this.recipeService.updateById(id, recipe);
  }

  @Delete(':id')
  async deleteRecipe(
    @Param('id')
    id: string
  ): Promise<Recipe> {
    return this.recipeService.deleteById(id);
  }
}

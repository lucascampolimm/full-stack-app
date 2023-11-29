import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { RecipeSchema } from './schemas/recipe.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, MongooseModule.forFeature([{ name: 'Recipe', schema: RecipeSchema }])],
  controllers: [RecipeController],
  providers: [RecipeService]
})
export class RecipeModule {}

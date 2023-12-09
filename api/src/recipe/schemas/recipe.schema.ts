import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../auth/schemas/user.schema';
import mongoose from 'mongoose';

@Schema({
  timestamps: true
})
export class Recipe {
  @Prop()
  name: string;

  @Prop()
  ingredients: string;

  @Prop()
  preparationMethod: string;

  @Prop()
  imageUrl: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true
})
export class User extends Document {
  @Prop({ unique: [true, 'E-mail já cadastrado.'] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

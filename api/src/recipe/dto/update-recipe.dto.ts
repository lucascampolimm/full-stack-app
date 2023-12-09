import { IsEmpty, IsOptional, IsString } from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class UpdateRecipeDto {
  @IsOptional()
  @IsString({ message: 'O campo name está esperando uma string.' })
  readonly name: string;

  @IsOptional()
  @IsString({ message: 'O campo ingredients está esperando uma string.' })
  readonly ingredients: string;

  @IsOptional()
  @IsString({ message: 'O campo preparationMethod está esperando uma string.' })
  readonly preparationMethod: string;

  @IsOptional()
  @IsString({ message: 'O campo imageUrl está esperando uma string.' })
  readonly imageUrl: string;

  @IsEmpty({ message: 'Você não pode passar o ID do usuário.' })
  readonly user: User;
}

import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class CreateRecipeDto {
  @IsNotEmpty({ message: 'O campo name não pode estar vazio.' })
  @IsString({ message: 'O campo name está esperando uma string.' })
  readonly name: string;

  @IsNotEmpty({ message: 'O campo ingredients não pode estar vazio.' })
  @IsString({ message: 'O campo ingredients está esperando uma string.' })
  readonly ingredients: string;

  @IsNotEmpty({ message: 'O campo preparationMethod não pode estar vazio.' })
  @IsString({ message: 'O campo preparationMethod está esperando uma string.' })
  readonly preparationMethod: string;

  @IsNotEmpty({ message: 'O campo imageUrl não pode estar vazio.' })
  @IsString({ message: 'O campo imageUrl está esperando uma string.' })
  readonly imageUrl: string;

  @IsEmpty({ message: 'Você não pode passar o ID do usuário.' })
  readonly user: User;
}

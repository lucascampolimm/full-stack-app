export interface Recipe {
  _id: string;
  name: string;
  ingredients: string;
  preparationMethod: string;
  imageUrl: string;
  idAuthor: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

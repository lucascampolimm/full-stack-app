export interface Recipe {
  _id: string;
  name: string;
  ingredients: string;
  preparationMethod: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

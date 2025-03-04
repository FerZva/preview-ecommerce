export interface Products {
  productName: string;
  productPrice: number;
  description?: string;
  colors?: string[];
  sizes?: string[];
  images?: string[];
  rating?: number;
  reviews?: number;
}

export interface Slides {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

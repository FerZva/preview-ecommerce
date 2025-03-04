// export interface Products {
//   productName: string;
//   productPrice: number;
//   description?: string;
//   colors?: string[];
//   sizes?: string[];
//   images?: string[];
//   rating?: number;
//   reviews?: number;
// }

export interface Products {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
}

export interface Slides {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

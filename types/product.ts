export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  description: string;
  features: string[];
  inStock: boolean;
}

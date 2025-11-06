export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  store: string;
  status: "available" | "unavailable";
  createdAt: string;
  images: string[];
  description: string;
}

import { get } from "../utils/api";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export async function getProducts(): Promise<Product[]> {
  const path = "products";

  try {
    const products = await get<Product[]>({ path });
    return products;
  } catch (error) {
    console.error("Ürünler alınırken bir hata oluştu:", error);
    throw error;
  }
}

import { get } from "../utils/api";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export async function getProducts(
  page: number = 1,
  limit: number = 12
): Promise<Product[]> {
  const path = `products?page=${page}&limit=${limit}`;

  try {
    const products = await get<Product[]>({ path });
    return products;
  } catch (error) {
    console.error("Ürünler alınırken bir hata oluştu:", error);
    throw error;
  }
}

export async function getProduct(id: number): Promise<Product> {
  const path = `products/${id}`;

  try {
    const product = await get<Product>({ path });
    return product;
  } catch (error) {
    console.error("Ürün alınırken bir hata oluştu:", error);
    throw error;
  }
}

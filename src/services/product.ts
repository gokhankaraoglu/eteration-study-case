import { get } from "../utils/api";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  model: string;
  brand: string;
  image: string;
  createdAt: string;
}

export enum SortOptions {
  PriceDesc = "priceDesc",
  PriceAsc = "priceAsc",
  DateDesc = "dateDesc",
  DateAsc = "dateAsc",
}

export enum SortingField {
  PRICE = "price",
  CREATED_AT = "createdAt",
}

export enum OrderType {
  DESC = "desc",
  ASC = "asc",
}

export async function getProducts(
  page: number = 1,
  limit: number = 12,
  sort: SortOptions = SortOptions.PriceDesc,
  selectedBrand: string,
  selectedModel: string,
  searchQuery: string
): Promise<Product[]> {
  let sortField = "";
  let order = "";

  switch (sort) {
    case SortOptions.PriceDesc:
      sortField = SortingField.PRICE;
      order = OrderType.DESC;
      break;
    case SortOptions.PriceAsc:
      sortField = SortingField.PRICE;
      order = OrderType.ASC;
      break;
    case SortOptions.DateDesc:
      sortField = SortingField.CREATED_AT;
      order = OrderType.DESC;
      break;
    case SortOptions.DateAsc:
      sortField = SortingField.CREATED_AT;
      order = OrderType.ASC;
      break;
    default:
      sortField = SortingField.PRICE;
      order = OrderType.DESC;
  }

  let path = `products?page=${page}&limit=${limit}&sortBy=${sortField}&order=${order}`;

  if (selectedBrand) {
    path += `&brand=${selectedBrand}`;
  }

  if (selectedModel) {
    path += `&model=${selectedModel}`;
  }
  if (searchQuery) {
    path += `&name=${searchQuery}`;
  }

  try {
    const products = await get<Product[]>({ path });
    return products;
  } catch (error) {
    console.error("An error occurred while fetching products:", error);
    return [];
  }
}

export async function getProduct(id: number): Promise<Product> {
  const path = `products/${id}`;

  try {
    const product = await get<Product>({ path });
    return product;
  } catch (error) {
    console.error("An error occurred while fetching the product:", error);
    throw error;
  }
}

export async function getProductModelandBrand() {
  const path = "products";
  try {
    const products = await get<Product[]>({ path });

    const uniqueModels = new Set<string>();
    const uniqueBrands = new Set<string>();

    products.forEach((product) => {
      uniqueModels.add(product.model);
      uniqueBrands.add(product.brand);
    });

    return {
      models: Array.from(uniqueModels),
      brands: Array.from(uniqueBrands),
    };
  } catch (error) {
    console.error("An error occurred while fetching models and brands:", error);
    throw error;
  }
}

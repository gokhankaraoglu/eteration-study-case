import ProductList from "./ProductList";
import CartSummary from "./CartSummary";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import {
  Product,
  SortOptions,
  getProductModelandBrand,
  getProducts,
} from "../services/product";
import Pagination from "./Pagination";

function ProductPage() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [filters, setFilters] = useState<{
    sort: SortOptions;
    selectedBrand: string;
    selectedModel: string;
  }>({
    sort: SortOptions.DateAsc,
    selectedBrand: "",
    selectedModel: "",
  });

  const limit = 12;
  const totalItemCount = 74;
  const totalPages = Math.ceil(totalItemCount / limit);

  useEffect(() => {
    const fetchInitialData = async () => {
      const { brands, models } = await getProductModelandBrand();
      setBrands(brands);
      setModels(models);
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts(
        page,
        limit,
        filters.sort,
        filters.selectedBrand,
        filters.selectedModel
      );
      setProductList(products);
    };

    fetchProducts();
  }, [page, filters]);

  const handlePageChange = (page: number) => {
    let newPage = page;
    if (page <= 0) newPage = 1;
    if (page > totalPages) newPage = totalPages;
    setPage(newPage);
  };

  const handleFilterChange = (newFilters: {
    sort: SortOptions;
    selectedBrand: string;
    selectedModel: string;
  }) => {
    setFilters(newFilters);
  };

  return (
    <div className="container">
      <div className="main-content">
        <Sidebar
          brands={brands}
          models={models}
          onFilterChange={handleFilterChange}
        />
        <div className="product-area">
          <ProductList products={productList} />
          {productList.length >= limit && (
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              onPageChange={handlePageChange}
            />
          )}
        </div>
        <CartSummary />
      </div>
    </div>
  );
}

export default ProductPage;

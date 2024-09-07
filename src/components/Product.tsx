import ProductList from "./ProductList";
import CartSummary from "./CartSummary";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import {
  Product,
  getProductModelandBrand,
  getProducts,
} from "../services/product";
import Pagination from "./Pagination";

function ProductPage() {
  const { sort, selectedBrand, selectedModel, searchQuery } = useSelector(
    (state: RootState) => state.filters
  );

  const [productList, setProductList] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);

  const limit = 12;
  const totalItemCount = 74; // Hardcoded value or can be dynamically set
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
        sort,
        selectedBrand,
        selectedModel,
        searchQuery
      );
      setProductList(products);
    };

    fetchProducts();
  }, [page, sort, selectedBrand, selectedModel, searchQuery]);

  const handlePageChange = (page: number) => {
    let newPage = page;
    if (page <= 0) newPage = 1;
    if (page > totalPages) newPage = totalPages;
    setPage(newPage);
  };

  return (
    <div className="container">
      <div className="main-content">
        <Sidebar brands={brands} models={models} />
        <div className="w-3/5 flex flex-col">
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

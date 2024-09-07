import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";

function RouterContainer() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<ProductDetailPage />} />
      </Route>
    </Routes>
  );
}

export default RouterContainer;

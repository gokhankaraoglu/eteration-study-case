import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import PanelCardLayout from "./PanelCardLayout";
import { SortOptions } from "../services/product";
import { useState } from "react";
import {
  setSelectedBrand,
  setSelectedModel,
  setSort,
} from "../store/filters/filtersReducer";

export interface SidebarProps {
  brands: string[];
  models: string[];
}

function Sidebar({ brands, models }: SidebarProps) {
  const dispatch = useDispatch();
  const { sort, selectedBrand, selectedModel } = useSelector(
    (state: RootState) => state.filters
  );

  const [brandFilter, setBrandFilter] = useState<string>("");
  const [modelFilter, setModelFilter] = useState<string>("");

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSort(e.target.value as SortOptions));
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const brand = e.target.value;
    dispatch(setSelectedBrand(selectedBrand === brand ? "" : brand));
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const model = e.target.value;
    dispatch(setSelectedModel(selectedModel === model ? "" : model));
  };

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(brandFilter.toLowerCase())
  );
  const filteredModels = models.filter((model) =>
    model.toLowerCase().includes(modelFilter.toLowerCase())
  );

  return (
    <aside className="w-1/5 flex flex-col gap-5">
      <PanelCardLayout name="Sort By">
        <div>
          <label>
            <input
              type="radio"
              name="sort"
              value={SortOptions.DateAsc}
              onChange={handleSortChange}
              checked={sort === SortOptions.DateAsc}
            />{" "}
            Old to new
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="sort"
              value={SortOptions.DateDesc}
              onChange={handleSortChange}
              checked={sort === SortOptions.DateDesc}
            />{" "}
            New to old
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="sort"
              value={SortOptions.PriceDesc}
              onChange={handleSortChange}
              checked={sort === SortOptions.PriceDesc}
            />{" "}
            Price high to low
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="sort"
              value={SortOptions.PriceAsc}
              onChange={handleSortChange}
              checked={sort === SortOptions.PriceAsc}
            />{" "}
            Price low to high
          </label>
        </div>
      </PanelCardLayout>

      <PanelCardLayout name="Brands">
        <input
          type="text"
          placeholder="Search Brands"
          className="p-2 bg-gray-100"
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
        />
        <div className="h-48 overflow-y-auto flex flex-col gap-2">
          {filteredBrands.map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                name="brand"
                value={brand}
                onChange={handleBrandChange}
                checked={selectedBrand === brand}
              />{" "}
              {brand}
            </label>
          ))}
        </div>
      </PanelCardLayout>

      <PanelCardLayout name="Models" className="mb-5">
        <input
          type="text"
          placeholder="Search Models"
          className="p-2 bg-gray-100"
          value={modelFilter}
          onChange={(e) => setModelFilter(e.target.value)}
        />
        <div className="h-48 overflow-y-auto flex flex-col gap-2">
          {filteredModels.map((model) => (
            <label key={model}>
              <input
                type="checkbox"
                name="model"
                value={model}
                onChange={handleModelChange}
                checked={selectedModel === model}
              />{" "}
              {model}
            </label>
          ))}
        </div>
      </PanelCardLayout>
    </aside>
  );
}

export default Sidebar;

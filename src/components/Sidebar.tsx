import { useState, useEffect } from "react";
import PanelCardLayout from "./PanelCardLayout";
import { SortOptions } from "../services/product";

export interface SidebarProps {
  brands: string[];
  models: string[];
  onFilterChange: (filters: {
    sort: SortOptions;
    selectedBrand: string;
    selectedModel: string;
  }) => void;
}

function Sidebar({ brands, models, onFilterChange }: SidebarProps) {
  const [sort, setSort] = useState<SortOptions>(SortOptions.DateAsc);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [modelFilter, setModelFilter] = useState<string>("");

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value as SortOptions);
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const brand = e.target.value;
    setSelectedBrand((prev) => (prev === brand ? "" : brand));
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const model = e.target.value;
    setSelectedModel((prev) => (prev === model ? "" : model));
  };

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(brandFilter.toLowerCase())
  );
  const filteredModels = models.filter((model) =>
    model.toLowerCase().includes(modelFilter.toLowerCase())
  );

  useEffect(() => {
    onFilterChange({ sort, selectedBrand, selectedModel });
  }, [sort, selectedBrand, selectedModel]);

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

      <PanelCardLayout name="Models">
        <input
          type="text"
          placeholder="Search Models"
          value={modelFilter}
          onChange={(e) => setModelFilter(e.target.value)}
        />
        <div className="h-48 overflow-y-auto flex flex-col gap-2">
          {filteredModels.map((model) => (
            <label key={model} className="block">
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

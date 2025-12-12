"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

interface PriceRange {
  min: string;
  max: string;
}

interface PriceSlider {
  min: number;
  max: number;
}

interface ExpandedSections {
  brands: boolean;
  bodyType: boolean;
  priceRange: boolean;
}

export default function MotorcycleFilterSidebar() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedBodyTypes, setSelectedBodyTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: "",
    max: "",
  });
  const [priceSlider, setPriceSlider] = useState<PriceSlider>({
    min: 0,
    max: 1000000,
  });
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    brands: true,
    bodyType: true,
    priceRange: true,
  });

  const brands: string[] = ["QJ Motors", "Honda", "KTM", "Yamaha", "Suzuki"];
  const bodyTypes: string[] = [
    "Commuter",
    "Cruiser",
    "Moped",
    "Naked Sports",
    "Off Road / Dirt",
  ];

  const toggleSection = (section: keyof ExpandedSections): void => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleBrandChange = (brand: string): void => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleBodyTypeChange = (type: string): void => {
    setSelectedBodyTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const removeFilter = (type: string, value?: string): void => {
    if (type === "brand" && value) {
      setSelectedBrands((prev) => prev.filter((b) => b !== value));
    } else if (type === "bodyType" && value) {
      setSelectedBodyTypes((prev) => prev.filter((t) => t !== value));
    } else if (type === "price") {
      setPriceRange({ min: "", max: "" });
      setPriceSlider({ min: 0, max: 1000000 });
    }
  };

  const clearAllFilters = (): void => {
    setSelectedBrands([]);
    setSelectedBodyTypes([]);
    setPriceRange({ min: "", max: "" });
    setPriceSlider({ min: 0, max: 1000000 });
  };

  const hasActiveFilters: boolean =
    selectedBrands.length > 0 ||
    selectedBodyTypes.length > 0 ||
    Boolean(priceRange.min) ||
    Boolean(priceRange.max);

  const handlePriceInputChange = (
    type: keyof PriceRange,
    value: string
  ): void => {
    setPriceRange((prev) => ({ ...prev, [type]: value }));
    if (type === "min") {
      setPriceSlider((prev) => ({ ...prev, min: Number(value) || 0 }));
    } else {
      setPriceSlider((prev) => ({ ...prev, max: Number(value) || 1000000 }));
    }
  };

  const handleSliderChange = (type: keyof PriceSlider, value: string): void => {
    setPriceSlider((prev) => ({ ...prev, [type]: Number(value) }));
    setPriceRange((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <aside className="w-full h-screen lg:w-80 bg-primary-foreground/10 border border-gray-200  rounded-lg shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-primary">Filter</h2>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm  bg-primary px-3 py-1.5 cursor-pointer rounded text-primary-foreground font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Selected Filters Chips */}
      {hasActiveFilters && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            {selectedBrands.map((brand) => (
              <span
                key={brand}
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-200 text-primary rounded-full text-sm font-medium"
              >
                {brand}
                <button
                  onClick={() => removeFilter("brand", brand)}
                  className="hover:text-blue-900 cursor-pointer"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            {selectedBodyTypes.map((type) => (
              <span
                key={type}
                className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
              >
                {type}
                <button
                  onClick={() => removeFilter("bodyType", type)}
                  className="hover:text-green-900 cursor-pointer"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            {(priceRange.min || priceRange.max) && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                ৳{priceRange.min || "0"} - ৳{priceRange.max || "Max"}
                <button
                  onClick={() => removeFilter("price")}
                  className="hover:text-purple-900 cursor-pointer"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Filter Sections */}
      <div className="overflow-y-auto max-h-[calc(100vh-250px)]">
        {/* Brands Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection("brands")}
            className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
          >
            <h3 className="font-semibold text-gray-900">Brands</h3>
            {expandedSections.brands ? (
              <ChevronUp className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-600" />
            )}
          </button>
          {expandedSections.brands && (
            <div className="px-4 pb-4 space-y-3">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection("priceRange")}
            className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
          >
            <h3 className="font-semibold text-gray-900">Price Range</h3>
            {expandedSections.priceRange ? (
              <ChevronUp className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-600" />
            )}
          </button>
          {expandedSections.priceRange && (
            <div className="px-4 pb-4 space-y-4">
              {/* Input Fields */}
              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) =>
                    handlePriceInputChange("min", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) =>
                    handlePriceInputChange("max", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Range Sliders */}
              <div className="space-y-2">
                <label className="text-xs text-gray-600">
                  Min: ৳{priceSlider.min.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="10000"
                  value={priceSlider.min}
                  onChange={(e) => handleSliderChange("min", e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-600">
                  Max: ৳{priceSlider.max.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="10000"
                  value={priceSlider.max}
                  onChange={(e) => handleSliderChange("max", e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Apply Button */}
              <button className="w-full py-2 bg-primary text-white rounded hover:bg-primary/90 cursor-pointer font-medium transition-colors">
                Apply Price Range
              </button>
            </div>
          )}
        </div>

        {/* Body Type Section */}
        <div>
          <button
            onClick={() => toggleSection("bodyType")}
            className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
          >
            <h3 className="font-semibold text-gray-900">Body Type</h3>
            {expandedSections.bodyType ? (
              <ChevronUp className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-600" />
            )}
          </button>
          {expandedSections.bodyType && (
            <div className="px-4 pb-4 space-y-3">
              {bodyTypes.map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedBodyTypes.includes(type)}
                    onChange={() => handleBodyTypeChange(type)}
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

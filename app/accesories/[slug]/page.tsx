"use client";

import { useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  Star,
  ShoppingCart,
  Heart,
  Filter,
  ChevronDown,
  Search,
} from "lucide-react";
import Link from "next/link";

const ACCESSORIES = [
  {
    id: 1,
    name: "Premium Helmet",
    brand: "Yamaha",
    price: 3500,
    originalPrice: 4500,
    image: "🪖",
    rating: 4.8,
    reviews: 245,
    inStock: true,
    discount: 22,
  },
  {
    id: 2,
    name: "Racing Gloves",
    brand: "TVS",
    price: 1200,
    originalPrice: 1800,
    image: "🧤",
    rating: 4.5,
    reviews: 189,
    inStock: true,
    discount: 33,
  },
  {
    id: 3,
    name: "LED Headlight",
    brand: "Bajaj",
    price: 2800,
    originalPrice: 3500,
    image: "💡",
    rating: 4.9,
    reviews: 312,
    inStock: true,
    discount: 20,
  },
  {
    id: 4,
    name: "Riding Jacket",
    brand: "Honda",
    price: 5500,
    originalPrice: 7000,
    image: "🧥",
    rating: 4.7,
    reviews: 156,
    inStock: false,
    discount: 21,
  },
  {
    id: 5,
    name: "Chain Lock",
    brand: "Suzuki",
    price: 1800,
    originalPrice: 2200,
    image: "🔒",
    rating: 4.6,
    reviews: 278,
    inStock: true,
    discount: 18,
  },
  {
    id: 6,
    name: "Phone Holder",
    brand: "Hero",
    price: 450,
    originalPrice: 650,
    image: "📱",
    rating: 4.3,
    reviews: 423,
    inStock: true,
    discount: 31,
  },
  {
    id: 7,
    name: "Tank Bag",
    brand: "Yamaha",
    price: 2200,
    originalPrice: 2800,
    image: "🎒",
    rating: 4.8,
    reviews: 198,
    inStock: true,
    discount: 21,
  },
  {
    id: 8,
    name: "Side Mirror",
    brand: "TVS",
    price: 850,
    originalPrice: 1200,
    image: "🪞",
    rating: 4.4,
    reviews: 167,
    inStock: true,
    discount: 29,
  },
];

export default function AccessoriesListPage() {
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredAccessories = ACCESSORIES.filter(
    (item) =>
      item.price >= priceRange.min &&
      item.price <= priceRange.max &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100">
      {/* Top Filter Bar */}
      <div className="sticky top-0 z-40 bg-white border-b-2 border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Title & Count */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <h1 className="text-2xl md:text-3xl font-black text-gray-900">
                Accessories
              </h1>
              <span className="px-4 py-1 bg-black text-white rounded-full text-sm font-bold">
                {filteredAccessories.length} items
              </span>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search accessories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-black focus:outline-none transition-colors font-medium"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-5 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all lg:hidden w-full lg:w-auto justify-center"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>

          {/* Filter Row */}
          <div
            className={`${
              showFilters ? "flex" : "hidden lg:flex"
            } flex-col lg:flex-row gap-4 mt-4 pt-4 border-t-2 border-gray-200`}
          >
            {/* Min Price */}
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Min Price (৳)
              </label>
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: Number(e.target.value) })
                }
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:border-black focus:outline-none transition-colors font-medium"
                placeholder="0"
              />
            </div>

            {/* Max Price */}
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Max Price (৳)
              </label>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: Number(e.target.value) })
                }
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:border-black focus:outline-none transition-colors font-medium"
                placeholder="10000"
              />
            </div>

            {/* Sort By */}
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Sort By
              </label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:border-black focus:outline-none transition-colors font-medium appearance-none pr-10 bg-white"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Reset */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setPriceRange({ min: 0, max: 10000 });
                  setSortBy("featured");
                  setSearchQuery("");
                }}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-xl font-bold hover:bg-gray-300 transition-all border-2 border-gray-300 hover:border-gray-400"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {filteredAccessories.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-4">🔍</div>
            <h2 className="text-3xl font-black text-gray-800 mb-2">
              No items found
            </h2>
            <p className="text-gray-600">
              Try adjusting your filters or search query
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredAccessories.map((item) => (
              <div
                key={item.id}
                className="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Status Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div
                    className={`text-white text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm ${
                      item.inStock ? "bg-green-500" : "bg-gray-500"
                    }`}
                  >
                    {item.inStock ? `${item.discount}% OFF` : "Out of Stock"}
                  </div>
                </div>

                {/* Wishlist */}
                <button className="absolute top-3 left-3 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-primary cursor-pointer hover:text-white transition-all">
                  <Heart className="h-4 w-4" />
                </button>

                {/* Image */}
                <div className="relative h-80 w-full overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 shrink-0">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-8xl transition-transform duration-500 group-hover:scale-110">
                      <Link href={`/bikedetails/${item.id}`}>{item.image}</Link>
                    </div>
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 space-y-3 grow flex flex-col">
                  <h3 className="text-base font-bold leading-snug text-gray-900 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>

                  {/* Brand */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                      {item.brand}
                    </span>
                  </div>

                  {/* Expected Price */}
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="text-xs text-gray-500">Price</p>
                      <p className="text-lg font-bold text-blue-600">
                        ৳{item.price}
                      </p>
                    </div>
                    {item.originalPrice > item.price && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ৳{item.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Specs Row */}
                  <div className="flex items-center gap-4 pt-2 pb-3 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <Star className="h-3 w-3 text-yellow-500 shrink-0 fill-yellow-500" />
                      <span className="font-medium">{item.rating}</span>
                    </div>
                    <div className="h-1 w-1 bg-gray-300 rounded-full shrink-0"></div>
                    <span className="text-xs text-gray-600 font-medium truncate">
                      {item.reviews} reviews
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto pt-2">
                    <button
                      disabled={!item.inStock}
                      className={`flex-1 rounded-full text-xs font-semibold shadow-md h-10 cursor-pointer flex items-center justify-center gap-1 transition-all ${
                        item.inStock
                          ? "bg-primary hover:bg-primary/90 text-white"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <ShoppingCart className="h-3 w-3" />
                      Add to Cart
                    </button>
                    <button className="flex-1 rounded-full border border-primary/50 text-primary cursor-pointer hover:bg-blue-50 text-xs font-semibold h-10 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Banner */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="relative bg-linear-to-r from-black via-gray-900 to-black text-white rounded-3xl p-12 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent"></div>
          </div>

          <div className="relative z-10 text-center">
            <TrendingUp className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-medium max-w-2xl mx-auto">
              আপনার বাইকের জন্য সঠিক এক্সেসরিজ খুঁজে পেতে আমাদের এক্সপার্টদের
              সাথে কথা বলুন
            </p>
            <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-110 inline-flex items-center gap-3 shadow-2xl">
              Contact Expert
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

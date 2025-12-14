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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Top Filter Bar */}
      <div className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-lg">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAccessories.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-black hover:-translate-y-2"
              >
                {/* Discount Badge */}
                {item.discount > 0 && (
                  <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-black text-white rounded-full text-xs font-bold">
                    -{item.discount}%
                  </div>
                )}

                {/* Wishlist */}
                <button className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-black hover:text-white transition-all">
                  <Heart className="h-5 w-5" />
                </button>

                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center p-8 relative">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full mb-2">
                    {item.brand}
                  </span>

                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-black transition-colors">
                    {item.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-black text-black" />
                      <span className="text-sm font-bold text-gray-900">
                        {item.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({item.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-2xl font-black text-black">
                      ৳{item.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ৳{item.originalPrice}
                    </span>
                  </div>

                  {/* Add to Cart */}
                  <button
                    disabled={!item.inStock}
                    className={`w-full py-3 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                      item.inStock
                        ? "bg-black text-white hover:bg-gray-800 hover:shadow-xl"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {item.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Banner */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-3xl p-12 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
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

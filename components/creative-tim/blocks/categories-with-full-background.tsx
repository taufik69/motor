"use client";

import React from "react";
import {
  Shield,
  Wrench,
  Smartphone,
  Sticker,
  Package,
  Bike,
  ArrowRight,
} from "lucide-react";

const BIKE_CATEGORIES = [
  {
    id: "helmets",
    caption: "Safety First",
    title: "Premium Helmets",
    description:
      "High-quality helmets with advanced safety features for your protection",
    icon: Shield,
  },
  {
    id: "bike-parts",
    caption: "Performance",
    title: "Bike Parts & Accessories",
    description:
      "Upgrade your bike with premium parts and essential accessories",
    icon: Wrench,
  },
  {
    id: "mobile-holders",
    caption: "Convenience",
    title: "Mobile Holders",
    description: "Secure and adjustable phone mounts for safe navigation",
    icon: Smartphone,
  },
  {
    id: "stickers",
    caption: "Style",
    title: "Custom Stickers & Decals",
    description: "Personalize your ride with unique designs and graphics",
    icon: Sticker,
  },
  {
    id: "riding-gear",
    caption: "Comfort",
    title: "Riding Gear",
    description: "Gloves, jackets, and protective gear for comfortable rides",
    icon: Package,
  },
  {
    id: "maintenance",
    caption: "Care",
    title: "Maintenance Tools",
    description: "Essential tools and kits to keep your bike in top condition",
    icon: Bike,
  },
];

export default function BikeAccessoriesCategories() {
  const handleCategoryClick = (categoryId: string) => {
    console.log(`Navigating to: /products/${categoryId}`);
    alert(`Category: ${categoryId} এ যাচ্ছে!`);
  };

  return (
    <section className="py-20 z">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              🏍️ Bike Accessories
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl bg-linear-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
            আপনার বাইকের জন্য সব কিছু
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Premium quality accessories থেকে শুরু করে essential parts - আপনার
            riding experience কে আরো ভালো করুন
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BIKE_CATEGORIES.map(
            ({ id, caption, title, description, icon: Icon }) => (
              <div
                key={id}
                onClick={() => handleCategoryClick(id)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-white to-gray-50 p-6 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 border border-gray-200 hover:border-gray-300">
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-black/0 via-black/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-gray-700 to-gray-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Icon Container */}
                  <div className="mb-6 relative z-10">
                    <div className="relative inline-block">
                      <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary via-primary/80 to-primary/90 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl">
                        <Icon
                          className="h-8 w-8 text-primary-foreground"
                          strokeWidth={2.5}
                        />
                      </div>
                      {/* Icon Glow */}
                      <div className="absolute inset-0 bg-linear-to-br from-primary to-gray-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 relative z-10">
                    <div className="inline-block px-3 py-1 bg-linear-to-r from-gray-100 to-gray-200 rounded-full">
                      <span className="text-xs font-bold tracking-widest uppercase text-gray-700">
                        {caption}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold bg-linear-to-r from-primary to-gray-700 bg-clip-text text-transparent leading-tight group-hover:from-primary group-hover:to-gray-600 transition-all duration-300">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-6 flex items-center justify-between relative z-10">
                    <span className="text-sm font-semibold bg-linear-to-r from-primary to-gray-600 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider">
                      Explore Products
                    </span>
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-black via-gray-800 to-gray-700 flex items-center justify-center transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110 shadow-md group-hover:shadow-lg">
                      <ArrowRight
                        className="h-5 w-5 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  {/* Bottom Corner Decoration */}
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-linear-to-br from-black/10 to-gray-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            )
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-700 mb-6 text-lg font-medium">
            সব products একসাথে দেখতে চান?
          </p>
          <button className="group relative px-10 py-4 bg-linear-to-r from-black via-gray-800 to-gray-700 text-white font-semibold rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-black/30 hover:scale-105 overflow-hidden cursor-pointer">
            <span className="relative z-10 flex items-center justify-center gap-2 ">
              View All Products
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-gray-800 via-gray-700 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

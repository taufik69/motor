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
import Link from "next/link";

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

export default function BikeCategories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            🏍️ Bike Accessories
          </span>

          <h2 className="mt-4 mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            আপনার বাইকের জন্য সব কিছু
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Premium quality accessories থেকে শুরু করে essential parts
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BIKE_CATEGORIES.map(
            ({ id, caption, title, description, icon: Icon }) => (
              <Link
                key={id}
                href={{
                  pathname: `/accesories/${id}`,
                }}
                className="group"
              >
                <div className="cursor-pointer rounded-2xl bg-white p-6 h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <span className="text-xs font-bold uppercase text-gray-500">
                    {caption}
                  </span>

                  <h3 className="mt-2 text-xl font-bold">{title}</h3>

                  <p className="mt-2 text-sm text-gray-600">{description}</p>

                  {/* CTA */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-semibold text-sm">
                      Explore Products
                    </span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="px-10 py-4 bg-black text-white rounded-full hover:scale-105 transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

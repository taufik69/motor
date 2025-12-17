"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Bike,
  Wrench,
  Phone,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const QuickAccess = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const accessInfo = [
    {
      id: 1,
      title: "New Bikes",
      description: "Explore latest models & premium collection",
      icon: Bike,
      image:
        "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&q=80",
      badge: "Popular",
    },
    {
      id: 2,
      title: "Used Bikes",
      description: "Certified pre-owned with warranty",
      icon: Bike,
      image:
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
      badge: "Best Value",
    },
    {
      id: 3,
      title: "Accessories",
      description: "Premium gear, helmets & parts",
      icon: ShoppingBag,
      image:
        "https://images.unsplash.com/photo-1657873961503-89a65459de2b?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Hot Deals",
    },
    {
      id: 4,
      title: "Service Center",
      description: "Expert maintenance & repair services",
      icon: Wrench,
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      badge: "Trusted",
    },
    {
      id: 5,
      title: "Contact Us",
      description: "24/7 support & consultation available",
      icon: Phone,
      image:
        "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80",
      badge: "Available",
    },
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-black text-white text-sm font-semibold rounded-full">
            <Sparkles className="w-4 h-4" />
            Quick Access
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            <span className="mr-3">What Are You</span>
            <span className="relative inline-block">
              Looking For?
              <svg
                className="absolute -bottom-3 left-0 w-full"
                height="20"
                viewBox="0 0 400 20"
                fill="none"
              >
                <path
                  d="M5 15C80 5 160 8 240 12C320 16 360 10 395 8"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8">
            Choose from our premium services and discover everything we have to
            offer
          </p>
        </div>

        {/* Main Grid - Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
          {accessInfo.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-linear-to-br from-white to-gray-50 border border-primary/50 rounded-3xl overflow-hidden hover:shadow transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black text-white text-xs font-bold rounded-full">
                {item.badge}
              </div>

              {/* Image Container */}
              <div className="relative h-64 bg-gray-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{
                    filter:
                      hoveredId === item.id
                        ? "grayscale(0%)"
                        : "grayscale(100%)",
                  }}
                />
                {/* Diagonal Stripe Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-transparent opacity-50"></div>

                {/* Animated Corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-white group-hover:border-t-black transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8 bg-linear-to-br from-white via-gray-50 to-white">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-4 bg-black text-white rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-black mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* CTA Button */}
                <div className="flex items-center gap-2 text-black font-bold group-hover:gap-4 transition-all">
                  <span>Explore Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Number Badge */}
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Two Cards - Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {accessInfo.slice(3).map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-linear-to-r from-primar via-primary to-gray-900 text-white rounded-xl overflow-hidden hover:shadow transition-all duration-300 cursor-pointer "
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Side */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{
                      filter:
                        hoveredId === item.id
                          ? "grayscale(0%)"
                          : "grayscale(100%)",
                    }}
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white text-black text-xs font-bold rounded-full">
                    {item.badge}
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-white text-black rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="w-16 h-1 bg-white group-hover:w-24 transition-all duration-300"></div>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-3 font-bold text-lg group-hover:gap-5 transition-all">
                    <span>Get Started</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </div>

                  {/* Number */}
                  <div className="absolute bottom-8 right-8 text-8xl font-bold opacity-5 group-hover:opacity-10 transition-opacity">
                    0{index + 4}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Elements */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <div className="w-20 h-1 bg-black"></div>
          <div className="flex gap-2">
            <div
              className="w-3 h-3 bg-black rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-3 h-3 bg-black rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-black rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
          <div className="w-20 h-1 bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export { QuickAccess };

"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BikeGrid() {
  const [showAll, setShowAll] = useState(false);

  const products = [
    {
      id: 1,
      title: "HONDA CB 150R EXMOTION",
      price: "৳ 670,000",
      color: "BLACK",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: true,
    },
    {
      id: 2,
      title: "YAMAHA R15 V4",
      price: "৳ 620,000",
      color: "BLUE",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
    },
    {
      id: 3,
      title: "SUZUKI GIXXER SF",
      price: "৳ 389,000",
      color: "RED",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
    },
    {
      id: 4,
      title: "HONDA CBR 150R",
      price: "৳ 550,000",
      color: "RED",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
    },
    {
      id: 5,
      title: "BAJAJ PULSAR NS160",
      price: "৳ 285,000",
      color: "YELLOW",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
    },
    {
      id: 6,
      title: "TVS APACHE RTR 160",
      price: "৳ 300,000",
      color: "BLACK",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: true,
    },
    {
      id: 7,
      title: "HERO XTREME 160R",
      price: "৳ 265,000",
      color: "GREY",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
    },
    {
      id: 8,
      title: "YAMAHA MT 15",
      price: "৳ 435,000",
      color: "DARK BLUE",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
    },
    {
      id: 9,
      title: "HONDA XR 150L",
      price: "৳ 390,000",
      color: "WHITE",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: true,
    },
    {
      id: 10,
      title: "SUZUKI BANDIT",
      price: "৳ 329,000",
      color: "GREEN",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
    },
  ];

  // ✅ show only 4 first or all
  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProducts.map((item) => (
          <div
            key={item.id}
            className="
            cursor-pointer
              relative w-full max-w-[380px] h-[410px]
              rounded-2xl overflow-hidden
              border bg-white shadow
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl
              group
            "
          >
            {/* Stock Badge */}
            {item.stockOut && (
              <div className="absolute top-3 right-4 bg-red-500 text-white text-xs px-4 py-1.5 rounded-full z-10">
                Stock Out
              </div>
            )}

            {/* Image */}
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  w-full h-full object-contain
                  transition-transform duration-300
                  group-hover:scale-110 group-hover:-translate-y-1
                "
                priority
              />
            </div>

            {/* Info */}
            <div className="p-4 space-y-2">
              <h3 className="text-sm font-semibold leading-snug">
                {item.title}
              </h3>

              <h2 className="text-[13px] text-zinc-600">Run: 3000 Km</h2>

              <p className="text-blue-600 font-bold text-lg">{item.price}</p>

              <p className="text-xs text-zinc-600">
                Available Colors:{" "}
                <span className="font-semibold text-black">{item.color}</span>
              </p>

              {/* Buttons */}
              <div className="flex gap-2 pt-3">
                <Button
                  className="flex-1 rounded-full bg-primary hover:bg-primary/90 text-xs"
                  disabled={item.stockOut}
                >
                  BUY NOW
                </Button>

                <Button
                  variant="outline"
                  className="flex-1 rounded-full flex gap-2 text-xs"
                  disabled={item.stockOut}
                >
                  <ShoppingCart size={14} />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ SEE MORE BUTTON */}
      {products.length > 4 && !showAll && (
        <div className="flex justify-center mt-10">
          <Button
            onClick={() => setShowAll(true)}
            className="px-8 py-2 bg-primary hover:bg-primary/90 text-sm cursor-pointer"
          >
            See More Bikes
          </Button>
        </div>
      )}
    </div>
  );
}

"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BikeCard from "../CommonComponents/BikeCard";

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
      run: "100",
    },
    {
      id: 2,
      title: "YAMAHA R15 V4",
      price: "৳ 620,000",
      color: "BLUE",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
      run: "100",
    },
    {
      id: 3,
      title: "SUZUKI GIXXER SF",
      price: "৳ 389,000",
      color: "RED",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
      run: "100",
    },
    {
      id: 4,
      title: "HONDA CBR 150R",
      price: "৳ 550,000",
      color: "RED",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
      run: "100",
    },
    {
      id: 5,
      title: "BAJAJ PULSAR NS160",
      price: "৳ 285,000",
      color: "YELLOW",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
      run: "100",
    },
    {
      id: 6,
      title: "TVS APACHE RTR 160",
      price: "৳ 300,000",
      color: "BLACK",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: true,
      run: "100",
    },
    {
      id: 7,
      title: "HERO XTREME 160R",
      price: "৳ 265,000",
      color: "GREY",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
      run: "100",
    },
    {
      id: 8,
      title: "YAMAHA MT 15",
      price: "৳ 435,000",
      color: "DARK BLUE",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
      run: "100",
    },
    {
      id: 9,
      title: "HONDA XR 150L",
      price: "৳ 390,000",
      color: "WHITE",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: true,
      run: "100",
    },
    {
      id: 10,
      title: "SUZUKI BANDIT",
      price: "৳ 329,000",
      color: "GREEN",
      image:
        "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
      stockOut: false,
      run: "100",
    },
  ];

  // ✅ show only 4 first or all
  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProducts.map((item) => (
          <BikeCard key={item.id} bike={item} className="w-full" />
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

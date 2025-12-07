"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CardFlipProps {
  title?: string;
  price?: string;
  color?: string;
  image?: string;
  stockOut?: boolean;
}

export default function CardFlip({
  title = "HONDA CB 150R EXMOTION",
  price = "৳ 670,000",
  color = "BLACK",
  image = "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
  stockOut = true,
}: CardFlipProps) {
  return (
    <div
      className="
        relative w-full max-w-[380px] h-[380px]
        rounded-2xl overflow-hidden
        border bg-white shadow
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        group
      "
    >
      {/* Stock Badge */}
      {stockOut && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
          Stock Out
        </div>
      )}

      {/* Image */}
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-contain
            transition-transform duration-300
            group-hover:scale-110
            group-hover:-translate-y-1
          "
          priority
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold leading-snug">{title}</h3>

        <p className="text-blue-600 font-bold text-lg">{price}</p>

        <p className="text-xs text-zinc-600">
          Available Colors:{" "}
          <span className="font-semibold text-black">{color}</span>
        </p>

        {/* Buttons */}
        <div className="flex gap-2 pt-3">
          <Button
            type="button"
            className="flex-1 rounded-full bg-primary hover:bg-sky-600 text-xs cursor-p"
            disabled={stockOut}
          >
            BUY NOW
          </Button>

          <Button
            variant="outline"
            className="flex-1 rounded-full flex gap-2 text-xs"
            disabled={stockOut}
          >
            <ShoppingCart size={14} />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

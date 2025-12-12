import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BikeCardProps {
  bike: {
    id: number;
    title: string;
    price: string;
    color: string;
    image: string;
    stockOut: boolean;
    run?: string;
  };
  className?: string;
}

const BikeCard: React.FC<BikeCardProps> = ({ bike, className }) => {
  return (
    <div
      className={`group relative w-full cursor-pointer overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${className}`}
    >
      {/* Stock Badge */}
      {bike.stockOut && (
        <div className="absolute top-3 right-4 bg-red-500 text-white text-xs px-4 py-1.5 rounded-full z-10 shadow-lg">
          Stock Out
        </div>
      )}

      {/* Image */}
      <Link href={`/bikedetails/${bike.id}`}>
        <div className="relative h-[290px] w-full overflow-hidden bg-linear-to-br ">
          <Image
            src={bike.image}
            alt={bike.title}
            fill
            className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110"
            priority
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-5 space-y-2">
        <h3 className="text-sm font-semibold leading-snug text-gray-900 group-hover:text-blue-600 transition-colors">
          {bike.title}
        </h3>

        <h2 className="text-[13px] text-zinc-600">Run: {bike.run}</h2>

        <p className="text-blue-600 font-bold text-lg">{bike.price}</p>

        <p className="text-xs text-zinc-600">
          Available Colors:{" "}
          <span className="font-semibold text-primary">{bike.color}</span>
        </p>

        {/* Buttons */}
        <div className="flex gap-2 pt-3">
          <Button
            className="flex-1 rounded-full bg-primary hover:bg-primary/90 text-xs font-semibold h-9 shadow-sm"
            disabled={bike.stockOut}
          >
            BUY NOW
          </Button>

          <Button
            variant="outline"
            className="flex-1 rounded-full flex gap-2 text-xs font-semibold h-9 border-2"
            disabled={bike.stockOut}
          >
            <ShoppingCart size={14} />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;

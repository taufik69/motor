import React from "react";
import Image from "next/image";
import { Bell, Calendar, Tag, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface UpcomingBikeCardProps {
  bike: {
    id: number;
    title: string;
    expectedPrice: string;
    expectedLaunch: string;
    status: string;
    color: string;
    image: string;
    engine: string;
    features: string;
  };
  className?: string;
}

const UpcomingBikeCard: React.FC<UpcomingBikeCardProps> = ({
  bike,
  className,
}) => {
  return (
    <div
      className={`group relative w-full cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow hover:shadow-lg transition-all duration-300 flex flex-col ${className}`}
    >
      {/* Status Badge */}
      <div className="absolute top-3 right-3 z-10">
        <div
          className={`text-white text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm ${
            bike.status === "Coming Soon"
              ? "bg-linear-to-r from-blue-500 to-blue-600"
              : bike.status === "Pre-Order"
              ? "bg-linear-to-r from-green-500 to-green-600"
              : "bg-linear-to-r from-purple-500 to-purple-600"
          }`}
        >
          {bike.status}
        </div>
      </div>

      {/* Image */}
      <div className="relative h-[300px] w-full overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 shrink-0">
        <Link href={`/upcoming-bikes/${bike.id}`}>
          <Image
            src={bike.image}
            alt={bike.title}
            fill
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </Link>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Info - Removed margin-bottom that was causing overlap */}
      <div className="p-5 space-y-3 grow flex flex-col">
        <h3 className="text-base font-bold leading-snug text-gray-900 group-hover:text-blue-600 transition-colors">
          {bike.title}
        </h3>

        {/* Launch Date */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="h-4 w-4 text-blue-500 shrink-0" />
          <span className="font-medium">Launch: {bike.expectedLaunch}</span>
        </div>

        {/* Expected Price */}
        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4 text-green-500 shrink-0" />
          <div>
            <p className="text-xs text-gray-500">Expected Price</p>
            <p className="text-lg font-bold text-blue-600">
              {bike.expectedPrice}
            </p>
          </div>
        </div>

        {/* Specs Row */}
        <div className="flex items-center gap-4 pt-2 pb-3 border-t border-gray-100">
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <Zap className="h-3 w-3 text-yellow-500 shrink-0" />
            <span className="font-medium">{bike.engine}</span>
          </div>
          <div className="h-1 w-1 bg-gray-300 rounded-full shrink-0"></div>
          <span className="text-xs text-gray-600 font-medium truncate">
            {bike.features}
          </span>
        </div>

        {/* Action Buttons - Push to bottom with mt-auto */}
        <div className="flex gap-2 mt-auto pt-2">
          <Button className="flex-1 rounded-full bg-linear-to-r from-primary to-primary hover:from-primary/60 hover:to-primary text-xs font-semibold shadow-md h-10 cursor-pointer">
            <Bell className="h-3 w-3 mr-1" />
            Notify Me
          </Button>
          <Button
            variant="outline"
            className="flex-1 rounded-full border border-primary/60 text-primary cursor-pointer hover:bg-primary/2 text-xs font-semibold h-10"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBikeCard;

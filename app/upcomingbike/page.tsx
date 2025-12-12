"use client";
import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import MotorcycleFilterSidebar from "@/components/CollectionComponents/Sidebar";
import UpcomingBikeCard from "@/components/UpcomingBike/UpcomingBikeCard";

// Mock upcoming bikes data
const generateUpcomingBikes = (count: number) => {
  const statuses = ["Coming Soon", "Pre-Order", "Expected 2025"];
  const brands = ["HONDA", "YAMAHA", "SUZUKI", "KTM", "KAWASAKI"];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `${brands[i % brands.length]} ${
      ["CBR", "R15", "GSX", "DUKE", "NINJA"][i % 5]
    } ${150 + i * 50}`,
    expectedPrice: `৳ ${(450000 + i * 25000).toLocaleString()}`,
    expectedLaunch: `${
      ["January", "February", "March", "April", "May", "June"][i % 6]
    } 2025`,
    status: statuses[i % statuses.length],
    color: ["Black", "Red", "Blue", "White", "Green"][i % 5],
    image: [
      "https://admin.sawaribd.com/storage/product_image/6D87Ewk3kYbY75nM6yQLAuLAXRnJihUaI4Fn89UH.jpg",
      "https://admin.sawaribd.com/storage/product_image/wLlHWxgVd6xthuNHRBYyWPXLJpJvO2k5EKyreKjs.jpg",
      "https://admin.sawaribd.com/storage/product_image/w5By6Bppqn1On8Jdi2LZXGRbViZafRMR0tr1P7ca.jpg",
      "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
    ][i % 4],
    engine: `${150 + i * 25}cc`,
    features: ["ABS", "LED Lights", "Digital Display", "Fuel Injection"][i % 4],
  }));
};

const UpcomingBikesCollection = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  // Generate upcoming bikes data
  const bikes = generateUpcomingBikes(60); // 60 upcoming bikes

  // Calculate items per row
  const ITEMS_PER_ROW = 3;
  const rows = Math.ceil(bikes.length / ITEMS_PER_ROW);

  // Setup virtualizer - Fixed estimateSize to match actual card height
  const rowVirtualizer = useVirtualizer({
    count: rows,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 620, // Increased from 480 to match actual card height (300px image + 320px content + gap)
    overscan: 2,
  });

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-linear-to-r from-primary/90 to-primary/60  text-white py-12 px-4 my-8 mb-20 rounded-2xl">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Upcoming Bikes</h1>
          <p className="text-blue-100 text-lg">
            Discover the latest motorcycles launching soon in Bangladesh
          </p>
          <div className="flex gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>{bikes.length} Bikes Expected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span>Pre-Orders Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mt-8 gap-6">
          {/* Sidebar */}
          <div className="sticky top-20">
            <MotorcycleFilterSidebar />
          </div>

          {/* Virtualized Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-primary">
                All Upcoming Bikes
                <span className="ml-3 text-sm font-normal text-primary/50">
                  ({bikes.length} results)
                </span>
              </h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:outline-none cursor-pointer">
                <option>Sort by Launch Date</option>
                <option>Sort by Price: Low to High</option>
                <option>Sort by Price: High to Low</option>
                <option>Sort by Brand</option>
              </select>
            </div>

            {/* Virtualized List */}
            <div
              ref={parentRef}
              className="h-[calc(100vh-70px)] overflow-auto"
              style={{ contain: "strict" }}
            >
              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  width: "100%",
                  position: "relative",
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  const startIndex = virtualRow.index * ITEMS_PER_ROW;
                  const rowBikes = bikes.slice(
                    startIndex,
                    startIndex + ITEMS_PER_ROW
                  );

                  return (
                    <div
                      key={virtualRow.key}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${virtualRow.start}px)`,
                      }}
                    >
                      <div className="grid grid-cols-3 place-items-start gap-6 mb-6">
                        {rowBikes.map((bike) => (
                          <UpcomingBikeCard key={bike.id} bike={bike} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBikesCollection;

"use client";
import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import MotorcycleFilterSidebar from "@/components/CollectionComponents/Sidebar";
import BikeCard from "@/components/CommonComponents/BikeCard";

// Mock data - replace with your actual data
const generateBikes = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `HONDA CB 150R EXMOTION ${i + 1}`,
    price: `৳ ${(670000 + i * 1000).toLocaleString()}`,
    color: ["BLACK", "RED", "BLUE", "WHITE"][i % 4],
    image:
      "https://admin.sawaribd.com/storage/product_image/6D87Ewk3kYbY75nM6yQLAuLAXRnJihUaI4Fn89UH.jpg",
    stockOut: i % 7 === 0, // Every 7th item is stock out
    run: `${3000 + i * 100} Km`,
  }));
};

const Collection = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  // Generate bike data
  const bikes = generateBikes(100); // 100 bikes for demo

  // Calculate items per row based on screen size
  const ITEMS_PER_ROW = 3;
  const rows = Math.ceil(bikes.length / ITEMS_PER_ROW);

  // Setup virtualizer with increased row height for proper spacing
  const rowVirtualizer = useVirtualizer({
    count: rows,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 520, // Increased from 450 to accommodate card height + gap
    overscan: 2,
  });

  return (
    <div className="flex justify-between items-start mt-14 gap-6">
      {/* Sidebar */}
      <div className="sticky top-14">
        <MotorcycleFilterSidebar />
      </div>

      {/* Virtualized Grid */}
      <div
        ref={parentRef}
        className="flex-1 h-[calc(100vh-100px)] overflow-auto"
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
                <div className="grid grid-cols-3 place-items-start gap-6 mb-8">
                  {rowBikes.map((bike) => (
                    <BikeCard key={bike.id} bike={bike} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;

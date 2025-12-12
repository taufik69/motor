"use client";

import { useState } from "react";
import {
  Heart,
  Bike,
  Gauge,
  Calendar,
  MapPin,
  PhoneIncomingIcon,
} from "lucide-react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import BikeCard from "@/components/CommonComponents/BikeCard";

const BIKE_IMAGES = [
  {
    id: 1,
    url: "https://admin.sawaribd.com/storage/product_image/gFgmCOJJyRlAK4A5zDp9aOYK60abHKJs01zwdEk3.jpg",
    color: "Black",
  },
  {
    id: 2,
    url: "https://admin.sawaribd.com/storage/product_image/wLlHWxgVd6xthuNHRBYyWPXLJpJvO2k5EKyreKjs.jpg",
    color: "Red",
  },
  {
    id: 3,
    url: "https://admin.sawaribd.com/storage/product_image/w5By6Bppqn1On8Jdi2LZXGRbViZafRMR0tr1P7ca.jpg",
    color: "Blue",
  },
  {
    id: 4,
    url: "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
    color: "White",
  },
];

const SIMILAR_BIKES = [
  {
    id: 101,
    title: "YAMAHA FZ-S V3",
    price: "৳ 285,000",
    color: "Black",
    image:
      "https://admin.sawaribd.com/storage/product_image/gFgmCOJJyRlAK4A5zDp9aOYK60abHKJs01zwdEk3.jpg",
    stockOut: false,
    run: "2500 Km",
  },
  {
    id: 102,
    title: "SUZUKI GIXXER SF 250",
    price: "৳ 475,000",
    color: "Blue",
    image:
      "https://admin.sawaribd.com/storage/product_image/w5By6Bppqn1On8Jdi2LZXGRbViZafRMR0tr1P7ca.jpg",
    stockOut: false,
    run: "1800 Km",
  },
  {
    id: 103,
    title: "KTM DUKE 200",
    price: "৳ 385,000",
    color: "Orange",
    image:
      "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png",
    stockOut: true,
    run: "4200 Km",
  },
  {
    id: 104,
    title: "HONDA CB HORNET 160R",
    price: "৳ 245,000",
    color: "Red",
    image:
      "https://admin.sawaribd.com/storage/product_image/5qKrknLTm43AQGp3YQfTAy7z4Kxx5UfMyUEIGiaq.jpg",
    stockOut: false,
    run: "3500 Km",
  },
];

export default function BikeDetailsComponents() {
  const [selectedImage, setSelectedImage] = useState(BIKE_IMAGES[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Main Product Section */}
        <div className="mb-16 grid grid-cols-1 items-start gap-x-8 gap-y-10 lg:grid-cols-2 bg-primary-foreground/10 rounded-2xl shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden bg-linear-to-br from-gray-50 via-blue-50 to-gray-100 rounded-tr-2xl ">
              <Image
                width={1000}
                height={1000}
                alt="HONDA CB 150R EXMOTION"
                src={selectedImage.url}
                className="w-full h-full cursor-pointer p-8 object-contain rounded-2xl hover:scale-110 transition-transform duration-700 ease-out "
                priority
              />

              {/* Stock Badge */}
              <div className="absolute top-6 right-6 bg-linear-to-r from-green-500 to-green-600 text-white text-sm px-5 py-2.5 rounded-full font-semibold shadow-xl backdrop-blur-sm">
                In Stock
              </div>
            </div>

            {/* Thumbnail Images - Color Selection */}
            <div className="p-6 bg-white">
              <h4 className="mb-4 text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Available Colors
              </h4>
              <div className="flex gap-3">
                {BIKE_IMAGES.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(image)}
                    className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
                      selectedImage.id === image.id
                        ? "ring-2 ring-primary/90 scale-105 shadow-lg"
                        : "ring-2 ring-primary/50 hover:ring-gray-300 hover:scale-105"
                    }`}
                  >
                    <div className="w-20 h-20 bg-linear-to-br from-gray-50 to-gray-100 p-2">
                      <Image
                        src={image.url}
                        alt={image.color}
                        width={1080}
                        height={1080}
                        className="w-full h-full object-contain cursor-pointer rounded-md transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Selected Indicator */}
                    {selectedImage.id === image.id && (
                      <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center">
                        <div className="bg-primary rounded-full p-1">
                          <svg
                            className="h-4 w-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8 lg:p-12">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
                  HONDA CB 150R EXMOTION
                </h1>
                <p className="text-gray-600 text-sm uppercase tracking-wide font-medium">
                  Sport Bike • 150cc
                </p>
              </div>
            </div>

            <p className="text-blue-600 text-5xl font-bold mb-6 tracking-tight">
              ৳ 670,000
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              The Honda CB 150R Exmotion delivers an exceptional riding
              experience with its powerful 150cc engine, sporty design, and
              advanced features. Perfect for city commutes and weekend rides.
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-5 bg-linear-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200/50 hover:shadow-md transition-shadow">
                <div className="bg-blue-600 p-2.5 rounded-lg">
                  <Gauge className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Mileage</p>
                  <p className="font-bold text-gray-900">3000 Km</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5 bg-linear-to-br from-green-50 to-green-100/50 rounded-xl border border-green-200/50 hover:shadow-md transition-shadow">
                <div className="bg-green-600 p-2.5 rounded-lg">
                  <Bike className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Engine</p>
                  <p className="font-bold text-gray-900">150cc</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5 bg-linear-to-br from-purple-50 to-purple-100/50 rounded-xl border border-purple-200/50 hover:shadow-md transition-shadow">
                <div className="bg-purple-600 p-2.5 rounded-lg">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Year</p>
                  <p className="font-bold text-gray-900">2023</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5 bg-linear-to-br from-orange-50 to-orange-100/50 rounded-xl border border-orange-200/50 hover:shadow-md transition-shadow">
                <div className="bg-orange-600 p-2.5 rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Location</p>
                  <p className="font-bold text-gray-900">Dhaka</p>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="mb-8 flex items-center gap-3 pb-6 border-b border-gray-200">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    className="h-6 w-6 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <svg className="h-6 w-6 fill-gray-300" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-gray-700">
                4.0 <span className="text-gray-500">(128 Reviews)</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1 h-14 text-base font-semibold rounded-xl bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                <PhoneIncomingIcon className="mr-2 h-5 w-5" />
                Talks On WhatsApp
              </Button>
              <Button
                variant="outline"
                className="flex-1 h-14 text-base font-semibold rounded-xl border border-primay text-primary hover:bg-primary-foreground cursor-pointer transition-all"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* More Info & Similar Items Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* More Info Section - 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">More Info</h3>
            <Accordion
              type="single"
              collapsible
              defaultValue="description"
              className="w-full"
            >
              <AccordionItem value="description">
                <AccordionTrigger className="text-base font-semibold text-gray-900">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    The Honda CB 150R Exmotion is designed for riders who demand
                    both performance and style. With its aggressive
                    streetfighter design and powerful engine, this bike turns
                    heads wherever it goes.
                  </p>
                  <p>
                    Equipped with LED headlights, digital instrument cluster,
                    and disc brakes on both wheels, it offers a premium riding
                    experience with top-notch safety features.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="delivery">
                <AccordionTrigger className="text-base font-semibold text-gray-900">
                  Delivery & Returns
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    <strong>Free Delivery:</strong> Available within Dhaka city.
                    Delivery typically takes 3-5 business days.
                  </p>
                  <p className="mb-4">
                    <strong>Test Ride:</strong> Schedule a free test ride at our
                    showroom before purchase.
                  </p>
                  <p>
                    <strong>Returns:</strong> 7-day return policy with full
                    inspection. Bike must be in original condition.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contact" className="border-b-0">
                <AccordionTrigger className="text-base font-semibold text-gray-900">
                  Contact Us
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  <p className="mb-3">
                    Have questions about this bike? We're here to help!
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> support@bikeshop.com
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> +880 1711-123456
                  </p>
                  <p>
                    <strong>Hours:</strong> Sat-Thu, 10AM-8PM
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Similar Bikes Section - 3 columns */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Similar Bikes
              </h3>
              <Button
                variant="link"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                View All →
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SIMILAR_BIKES.map((bike) => (
                <BikeCard key={bike.id} bike={bike} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

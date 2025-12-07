"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Marquee } from "../ui/marquee";

export function CustomerReview() {
  const testimonial = {
    text: "In terms of after sales service usually bikers are getting too much pain all the time. Alhamdulillah sawari gives good service even after sales and this is amazing!",
    name: "Mahadi Hassan Mithun",
    location: "Gazipur, Dhaka, Bangladesh",
    avatar: "/avatar.png", // replace with your image path
  };

  return (
    <Marquee pauseOnHover={true} repeat={4}>
      <Card className="max-w-md mx-auto p-6 shadow-lg rounded-lg cursor-pointer">
        <CardContent className="flex flex-col gap-4">
          {/* Testimonial text */}
          <p className="text-gray-700 text-base">{testimonial.text}</p>

          {/* Footer: Avatar + Name + Location */}
          <div className="flex items-center gap-4 mt-4">
            <div className="relative w-12 h-12 rounded-full border overflow-hidden">
              <Image
                src={
                  "https://admin.sawaribd.com/storage/product_image/eMnz3Y2DVHREFyeFKVRxiSOR0dgbIec5r4TZWNTt.png"
                }
                alt={testimonial.name}
                fill
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-gray-900">
                {testimonial.name}
              </span>
              <span className="text-gray-500 text-sm">
                {testimonial.location}
              </span>
            </div>
            <Quote className="ml-auto text-blue-400 w-6 h-6" />
          </div>
        </CardContent>
      </Card>
    </Marquee>
  );
}

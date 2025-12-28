"use client";
import { Headphones } from "lucide-react";

const Hotline = () => {
  return (
    <div>
      {/* Scrolling Hotline Banner */}
      <div className="bg-linear-to-r from-black via-gray-800 to-black text-white py-3 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee  cursor-pointer">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="inline-flex items-center gap-3 mx-8">
              <Headphones className="h-5 w-5" />
              <span className="font-semibold">24/7 Hotline:</span>
              <span className="font-bold text-lg">+880 1234-567890</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-300">আমাদের সাথে যোগাযোগ করুন</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Hotline;

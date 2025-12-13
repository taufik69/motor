"use client";
import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  Shield,
  Clock,
  Star,
} from "lucide-react";

const BRANDS = [
  {
    id: 1,
    name: "Yamaha",
    models: ["R15", "FZ", "MT-15", "Ray ZR"],
    icon: "🏍️",
    gradient: "from-gray-900 via-gray-800 to-black",
  },
  {
    id: 2,
    name: "TVS",
    models: ["Apache", "Ntorq", "Raider", "Jupiter"],
    icon: "⚡",
    gradient: "from-black via-gray-900 to-gray-800",
  },
  {
    id: 3,
    name: "Bajaj",
    models: ["Pulsar", "Dominar", "Avenger", "Platina"],
    icon: "🔥",
    gradient: "from-gray-800 via-black to-gray-900",
  },
  {
    id: 4,
    name: "Suzuki",
    models: ["Gixxer", "Access", "Burgman", "Intruder"],
    icon: "💨",
    gradient: "from-gray-900 via-black to-gray-800",
  },
  {
    id: 5,
    name: "Hero",
    models: ["Xpulse", "Splendor", "Passion", "Glamour"],
    icon: "⭐",
    gradient: "from-black via-gray-800 to-gray-900",
  },
  {
    id: 6,
    name: "Honda",
    models: ["CB Shine", "Hornet", "Dio", "Activa"],
    icon: "🚀",
    gradient: "from-gray-800 via-gray-900 to-black",
  },
];

export default function SellBrandsComponent() {
  const [hoveredBrand, setHoveredBrand] = React.useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-full shadow-xl">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm font-bold">Sell or Exchange Now</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-black via-gray-700 to-gray-900 bg-clip-text text-transparent">
              আমরা যে সকল ব্র্যান্ড
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-800 via-black to-gray-600 bg-clip-text text-transparent">
              কিনি ও এক্সচেঞ্জ করি
            </span>
          </h1>

          <p className="text-2xl text-gray-600 leading-relaxed mb-10 font-medium">
            আপনার পুরাতন বাইক বিক্রি করুন বা নতুন বাইকের সাথে এক্সচেঞ্জ করুন
            সেরা দামে
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-lg border-2 border-gray-200 hover:border-black hover:scale-105 transition-all">
              <CheckCircle2 className="h-5 w-5 text-black" />
              <span className="text-sm font-bold text-gray-800">
                সেরা মূল্য গ্যারান্টি
              </span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-lg border-2 border-gray-200 hover:border-black hover:scale-105 transition-all">
              <Zap className="h-5 w-5 text-black" />
              <span className="text-sm font-bold text-gray-800">
                দ্রুত পেমেন্ট
              </span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-lg border-2 border-gray-200 hover:border-black hover:scale-105 transition-all">
              <Shield className="h-5 w-5 text-black" />
              <span className="text-sm font-bold text-gray-800">
                ঝামেলামুক্ত প্রক্রিয়া
              </span>
            </div>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              onMouseEnter={() => setHoveredBrand(brand.id)}
              onMouseLeave={() => setHoveredBrand(null)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-black hover:-translate-y-3 hover:scale-105"
            >
              {/* Top Gradient Bar */}
              <div className={`h-2 bg-gradient-to-r ${brand.gradient}`}></div>

              {/* Icon Section */}
              <div className="relative p-8 text-center bg-gradient-to-br from-gray-50 to-white">
                <div
                  className={`inline-block mb-4 p-6 bg-gradient-to-br ${brand.gradient} rounded-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <span className="text-6xl filter drop-shadow-lg">
                    {brand.icon}
                  </span>
                </div>

                <h3 className="text-4xl font-black mb-2 text-gray-900 group-hover:scale-110 transition-transform duration-300">
                  {brand.name}
                </h3>

                <div className="h-1 w-20 bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-4"></div>
              </div>

              {/* Content Section */}
              <div className="relative px-6 pb-6 bg-white">
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Star className="h-5 w-5 text-black" />
                  জনপ্রিয় মডেল
                </h4>

                <div className="flex flex-wrap gap-2 mb-6">
                  {brand.models.map((model, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 bg-gray-100 text-gray-800 text-sm font-bold rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                        hoveredBrand === brand.id
                          ? "border-black bg-black text-white shadow-lg"
                          : "border-gray-300 hover:border-gray-500"
                      }`}
                    >
                      {model}
                    </span>
                  ))}
                </div>

                <button
                  className={`w-full py-4 bg-gradient-to-r ${brand.gradient} text-white rounded-2xl font-black text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group-hover:gap-4 hover:scale-105`}
                >
                  <span>বিক্রি বা এক্সচেঞ্জ করুন</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-20 h-20 bg-black rounded-full blur-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            </div>

            <div className="relative z-10">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                আপনার ব্র্যান্ড খুঁজে পাচ্ছেন না?
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-medium">
                অন্যান্য ব্র্যান্ডের বাইকও আমরা কিনি এবং এক্সচেঞ্জ করি। আমাদের
                সাথে যোগাযোগ করুন।
              </p>
              <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-110 inline-flex items-center gap-3 shadow-2xl hover:shadow-white/20">
                <Clock className="h-6 w-6" />
                এখনই যোগাযোগ করুন
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Cards - Black & White */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-gray-900 to-black text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform border-2 border-gray-700">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-xl font-bold mb-2">সেরা দাম</h3>
            <p className="text-gray-300 text-sm">
              বাজারের সর্বোচ্চ মূল্যে আপনার বাইক বিক্রি করুন
            </p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform border-2 border-black">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-2">দ্রুত সেবা</h3>
            <p className="text-gray-600 text-sm">
              ৩০ মিনিটে মূল্যায়ন এবং তাৎক্ষণিক পেমেন্ট
            </p>
          </div>

          <div className="bg-gradient-to-br from-black to-gray-900 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform border-2 border-gray-700">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="text-xl font-bold mb-2">নির্ভরযোগ্য</h3>
            <p className="text-gray-300 text-sm">
              ১০০% নিরাপদ এবং স্বচ্ছ লেনদেন প্রক্রিয়া
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  Wrench,
  Calendar,
  Clock,
  CheckCircle2,
  Package,
  Headphones,
  Shield,
  Zap,
  Settings,
  Gauge,
  Droplets,
  AlertCircle,
} from "lucide-react";

const SERVICE_PACKAGES = [
  {
    id: "basic",
    name: "Basic Service",
    price: "৳800",
    duration: "1-2 Hours",
    icon: Wrench,
    features: [
      "Engine Oil Change",
      "Oil Filter Replacement",
      "Chain Cleaning & Lubrication",
      "Basic Inspection",
      "Tire Pressure Check",
    ],
    popular: false,
  },
  {
    id: "standard",
    name: "Standard Service",
    price: "৳1,500",
    duration: "2-3 Hours",
    icon: Settings,
    features: [
      "All Basic Service Items",
      "Brake Pad Inspection",
      "Spark Plug Check",
      "Air Filter Cleaning",
      "Battery Check",
      "Complete Wash",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Service",
    price: "৳2,500",
    duration: "3-4 Hours",
    icon: Shield,
    features: [
      "All Standard Service Items",
      "Complete Engine Tuning",
      "Suspension Check",
      "Electrical System Check",
      "Detailing & Polishing",
      "Free Pickup & Drop",
    ],
    popular: false,
  },
];

const TIME_SLOTS = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
];

export default function ServiceBookingPage() {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bikeModel: "",
    registrationNumber: "",
    date: "",
    timeSlot: "",
    additionalNotes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!selectedService) {
      alert("Please select a service package!");
      return;
    }
    console.log("Booking submitted:", {
      ...formData,
      service: selectedService,
    });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedService("");
      setFormData({
        name: "",
        phone: "",
        email: "",
        bikeModel: "",
        registrationNumber: "",
        date: "",
        timeSlot: "",
        additionalNotes: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Scrolling Hotline Banner */}
      <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-3 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="inline-flex items-center gap-3 mx-8">
              <Headphones className="h-5 w-5" />
              <span className="font-semibold">Service Hotline:</span>
              <span className="font-bold text-lg">+880 1234-567890</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-300">Book Your Service Now!</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-gray-500/5 to-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-full shadow-sm">
              <Wrench className="h-5 w-5 text-black" />
              <span className="text-sm font-semibold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                Professional Service
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent leading-tight">
              বাইক সার্ভিসিং বুকিং
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional servicing by expert mechanics. আপনার পছন্দের সময়ে
              booking করুন এবং সেরা service পান।
            </p>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent mb-4">
              Choose Your Service Package
            </h2>
            <p className="text-gray-600">
              আপনার বাইকের জন্য সঠিক service package নির্বাচন করুন
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SERVICE_PACKAGES.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedService(pkg.id)}
                  className={`
                    group relative cursor-pointer rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2
                    ${
                      selectedService === pkg.id
                        ? "bg-gradient-to-br from-black via-gray-800 to-gray-700 text-white shadow-2xl scale-105"
                        : "bg-white hover:shadow-2xl border-2 border-gray-200 hover:border-gray-400"
                    }
                    ${pkg.popular ? "ring-4 ring-black/20" : ""}
                  `}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-1 bg-gradient-to-r from-black to-gray-700 text-white text-xs font-bold rounded-full shadow-lg">
                        POPULAR
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div
                      className={`
                      w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-500
                      ${
                        selectedService === pkg.id
                          ? "bg-white/20"
                          : "bg-gradient-to-br from-black via-gray-800 to-gray-700"
                      }
                    `}
                    >
                      <Icon
                        className={`h-8 w-8 ${
                          selectedService === pkg.id
                            ? "text-white"
                            : "text-white"
                        }`}
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        selectedService === pkg.id ? "text-white" : "text-black"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <div
                      className={`text-4xl font-bold mb-1 ${
                        selectedService === pkg.id
                          ? "text-white"
                          : "bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
                      }`}
                    >
                      {pkg.price}
                    </div>
                    <div
                      className={`flex items-center justify-center gap-2 text-sm ${
                        selectedService === pkg.id
                          ? "text-gray-300"
                          : "text-gray-600"
                      }`}
                    >
                      <Clock className="h-4 w-4" />
                      {pkg.duration}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                            selectedService === pkg.id
                              ? "text-white"
                              : "text-black"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            selectedService === pkg.id
                              ? "text-gray-200"
                              : "text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`
                      w-full py-3 rounded-xl font-semibold transition-all duration-300
                      ${
                        selectedService === pkg.id
                          ? "bg-white text-black hover:bg-gray-100"
                          : "bg-gradient-to-r from-black to-gray-700 text-white hover:from-gray-800 hover:to-gray-600"
                      }
                    `}
                  >
                    {selectedService === pkg.id
                      ? "Selected ✓"
                      : "Select Package"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-200">
              <div className="mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent mb-3">
                  Book Your Service
                </h2>
                <p className="text-gray-600">
                  নিচের ফর্মটি পূরণ করুন এবং আপনার service booking confirm করুন
                </p>
              </div>

              {!selectedService && (
                <div className="mb-6 p-4 bg-gray-100 border-l-4 border-gray-600 rounded-lg flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Please select a service package above before filling the
                    booking form.
                  </p>
                </div>
              )}

              <div className="space-y-6">
                {/* Personal Info */}
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="আপনার নাম"
                        disabled={!selectedService}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="+880 1234-567890"
                        disabled={!selectedService}
                      />
                    </div>
                  </div>
                </div>

                {/* Bike Info */}
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">
                    Bike Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Bike Model *
                      </label>
                      <input
                        type="text"
                        name="bikeModel"
                        value={formData.bikeModel}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="e.g., Honda CB150R"
                        disabled={!selectedService}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Registration Number
                      </label>
                      <input
                        type="text"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="ঢাকা মেট্রো-গ ১২-৩৪৫৬"
                        disabled={!selectedService}
                      />
                    </div>
                  </div>
                </div>

                {/* Schedule */}
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">
                    Select Date & Time
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all bg-gray-50 focus:bg-white"
                        disabled={!selectedService}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Time Slot *
                      </label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all bg-gray-50 focus:bg-white"
                        disabled={!selectedService}
                      >
                        <option value="">Select Time Slot</option>
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                    placeholder="কোনো বিশেষ সমস্যা বা নির্দেশনা লিখুন..."
                    disabled={!selectedService}
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={!selectedService}
                  className={`
                    group relative w-full py-4 font-semibold rounded-xl transition-all duration-500 overflow-hidden
                    ${
                      selectedService
                        ? "bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white hover:shadow-2xl hover:shadow-black/30 hover:scale-[1.02]"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" />
                        Booking Confirmed!
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        Confirm Booking
                      </>
                    )}
                  </span>
                  {selectedService && (
                    <>
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent mb-4">
              Why Choose Our Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Certified Mechanics",
                desc: "Expert technicians",
              },
              {
                icon: Zap,
                title: "Quick Service",
                desc: "Fast turnaround time",
              },
              {
                icon: Package,
                title: "Genuine Parts",
                desc: "100% original parts",
              },
              {
                icon: Gauge,
                title: "Free Check-up",
                desc: "Complimentary inspection",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-black via-gray-800 to-gray-700 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
      `}</style>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  User,
  Mail,
  Phone,
  MapPin,
  Package,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  Truck,
  Clock,
  Tag,
  Headphones,
} from "lucide-react";

const PRODUCT_CATEGORIES = [
  { id: "electronics", name: "Electronics" },
  { id: "fashion", name: "Fashion & Apparel" },
  { id: "home", name: "Home & Living" },
  { id: "sports", name: "Sports & Fitness" },
  { id: "books", name: "Books & Media" },
  { id: "other", name: "Other" },
];

const PAYMENT_METHODS = [
  { id: "bkash", name: "bKash" },
  { id: "nagad", name: "Nagad" },
  { id: "rocket", name: "Rocket" },
  { id: "card", name: "Credit/Debit Card" },
  { id: "cod", name: "Cash on Delivery" },
];

export default function PreOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    productName: "",

    additionalInfo: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.productName) {
      alert("Please fill in all required fields!");
      return;
    }

    console.log("Pre-order submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        productName: "",
        additionalInfo: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-black/5 via-gray-500/5 to-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-linear-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-full shadow-sm">
              <Package className="h-5 w-5 text-black" />
              <span className="text-sm font-semibold bg-linear-to-r from-black to-gray-600 bg-clip-text text-transparent">
                Pre-Order System
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent leading-tight">
              প্রি-অর্ডার করুন
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              আপনার পছন্দের পণ্য প্রি-অর্ডার করুন এবং বিশেষ ছাড় পান। আগে অর্ডার
              করুন, আগে পান!
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 w-full cursor-pointer mx-auto">
            {[
              {
                icon: Clock,
                title: "Early Access",
                desc: "পণ্য লঞ্চের আগেই পান",
              },
              {
                icon: Tag,
                title: "Special Discount",
                desc: "প্রি-অর্ডারে বিশেষ ছাড়",
              },
              {
                icon: Truck,
                title: "Priority Delivery",
                desc: "অগ্রাধিকার ডেলিভারি",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-linear-to-br from-black via-gray-800 to-gray-700 flex items-center justify-center mb-4">
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

      {/* Pre-Order Form */}
      <section className="py-16 bg-linear-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-200">
              <div className="mb-8">
                <h2 className="text-3xl font-bold bg-linear-to-r from-black to-gray-700 bg-clip-text text-transparent mb-3">
                  Pre-Order Form
                </h2>
                <p className="text-gray-600">
                  নিচের ফর্মটি পূরণ করুন এবং আপনার প্রি-অর্ডার confirm করুন
                </p>
              </div>

              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="আপনার পুরো নাম"
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
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-black mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Delivery Address
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Full Address *
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                        placeholder="বাসা/ফ্ল্যাট নং, রোড নং, এলাকা..."
                      />
                    </div>
                  </div>
                </div>

                {/* Product Information */}
                <div>
                  <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Product Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="পণ্যের নাম লিখুন"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                    placeholder="বিশেষ কোনো নির্দেশনা বা তথ্য লিখুন..."
                  />
                </div>

                {/* Info Box */}
                <div className="p-4 bg-gray-100 border-l-4 border-black rounded-lg flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-black shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-1">Important Note:</p>
                    <p>
                      আমরা শীঘ্রই আপনার সাথে যোগাযোগ করে প্রি-অর্ডার confirm
                      করব। অনুগ্রহ করে সঠিক তথ্য প্রদান করুন।
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="group relative w-full py-4 font-semibold rounded-xl transition-all duration-500 overflow-hidden bg-linear-to-r from-black via-gray-800 to-gray-700 text-white hover:shadow-2xl hover:shadow-black/30 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" />
                        Pre-Order Submitted Successfully!
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        Submit Pre-Order
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                  <div className="absolute inset-0 bg-linear-to-r from-gray-700 via-gray-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Headphones,
} from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+880 1234-567890", "+880 9876-543210"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@bikestore.com", "info@bikestore.com"],
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Bike Street, Dhaka", "Bangladesh - 1200"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
  },
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100">
      {/* Scrolling Hotline Banner */}
      <div className="bg-linear-to-r from-black via-gray-800 to-black text-white py-3 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
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

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-black/5 via-gray-500/5 to-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-linear-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-full shadow-sm">
              <span className="text-2xl">📞</span>
              <span className="text-sm font-semibold bg-linear-to-r from-black to-gray-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent leading-tight">
              আমাদের সাথে যোগাযোগ করুন
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              আপনার যেকোনো প্রশ্ন বা সহায়তার জন্য আমরা সর্বদা প্রস্তুত। আমাদের
              সাথে যোগাযোগ করুন এবং আমরা দ্রুত সাড়া দেব।
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_INFO.map(({ icon: Icon, title, details }, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 hover:border-gray-400 overflow-hidden"
              >
                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-black via-gray-600 to-gray-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-black via-gray-800 to-gray-700 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-md">
                    <Icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-lg font-bold bg-linear-to-r from-black to-gray-700 bg-clip-text text-transparent mb-3">
                  {title}
                </h3>
                <div className="space-y-2">
                  {details.map((detail, i) => (
                    <p key={i} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>

                {/* Corner Decoration */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-linear-to-br from-black/5 to-gray-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-200">
              <div className="mb-8">
                <h2 className="text-3xl font-bold bg-linear-to-r from-black to-gray-700 bg-clip-text text-transparent mb-3">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  আপনার বার্তা পাঠান এবং আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব
                </p>
              </div>

              <div className="space-y-6">
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
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Phone Number
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
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="বিষয়"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                    placeholder="আপনার বার্তা লিখুন..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="group relative w-full py-4 bg-linear-to-r from-black via-gray-800 to-gray-700 text-white font-semibold rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-black/30 hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
                  </span>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-linear-to-r from-gray-700 via-gray-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </div>
            </div>

            {/* Right Side - Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 h-[400px]">
                <div className="w-full h-full bg-linear-to-br from-gray-100 via-gray-50 to-white flex items-center justify-center relative overflow-hidden">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    />
                  </div>
                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 rounded-full bg-linear-to-br from-black via-gray-700 to-gray-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MapPin className="h-10 w-10 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-black">
                      Map Location
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      123 Bike Street, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-linear-to-br from-black via-gray-800 to-gray-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

                <h3 className="text-2xl font-bold mb-6 relative z-10">
                  Why Contact Us?
                </h3>
                <ul className="space-y-4 relative z-10">
                  {[
                    "24/7 Customer Support",
                    "Expert Consultation",
                    "Fast Response Time",
                    "Quality Service Guaranteed",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-linear-to-br from-white/30 to-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-linear-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-black via-gray-700 to-gray-600 bg-clip-text text-transparent mb-4">
              সাধারণ প্রশ্নাবলী
            </h2>
            <p className="text-gray-600">
              আপনার প্রশ্নের উত্তর এখানে পেতে পারেন
            </p>
          </div>

          <div className=" grid grid-cols-3 gap-5 mx-auto space-y-4">
            {[
              {
                q: "কত দিনে ডেলিভারি হয়?",
                a: "সাধারণত ঢাকার মধ্যে ১-২ দিন এবং ঢাকার বাইরে ৩-৫ দিনের মধ্যে ডেলিভারি হয়।",
              },
              {
                q: "রিটার্ন পলিসি কি?",
                a: "পণ্য পাওয়ার ৭ দিনের মধ্যে আপনি রিটার্ন করতে পারবেন।",
              },
              {
                q: "পেমেন্ট মেথড কি কি?",
                a: "আমরা ক্যাশ অন ডেলিভারি, বিকাশ, নগদ এবং ব্যাংক ট্রান্সফার গ্রহণ করি।",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-400"
              >
                <h4 className="font-bold bg-linear-to-r from-black to-gray-700 bg-clip-text text-transparent mb-2">
                  {faq.q}
                </h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
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

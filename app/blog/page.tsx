"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Tag,
  TrendingUp,
  FacebookIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Xpulse 200 4V, V Storm 250SX & NX200 নিয়ে নতুন যুগের অ্যাডভেঞ্চার",
    excerpt:
      "বাংলাদেশের মোটরসাইকেল বাজারে আডভেঞ্চার সেগমেন্ট এখন বেশ জনপ্রিয়। বিশেষ করে Hero Xpulse 200 4V, Suzuki V-Strom 250SX এবং Honda NX200 – বাজারে আসার পরবর্তী নিয়ে রাইডারদের মধ্যে আগ্রহ ব্যাপক বেড়েছে।",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
    category: "Adventure Bikes",
    author: "মোটরসাইকেল বিশেষজ্ঞ",
    date: "২০ ডিসেম্বর, ২০২৪",
    readTime: "৫ মিনিট",
    tags: ["Hero Xpulse", "Suzuki V-Strom", "Honda NX200"],
    fullContent: `
      <h2>নতুন যুগের অ্যাডভেঞ্চার বাইক</h2>
      <p>বাংলাদেশের মোটরসাইকেল বাজারে আডভেঞ্চার সেগমেন্ট এখন বেশ জনপ্রিয়। বিশেষ করে Hero Xpulse 200 4V, Suzuki V-Strom 250SX এবং Honda NX200 – বাজারে আসার পরবর্তী নিয়ে রাইডারদের মধ্যে আগ্রহ ব্যাপক বেড়েছে। এই তিনটি বাইকই মিডিল ওয়েট এডভেঞ্চার ক্যাটাগরিতে অসাধারণ পারফরম্যান্স প্রদান করে।</p>
      
      <h3>Hero Xpulse 200 4V - অফরোডের রাজা</h3>
      <p>Hero Xpulse 200 4V বাংলাদেশে সবচেয়ে জনপ্রিয় অ্যাডভেঞ্চার বাইক। এর ৪ ভালভ ইঞ্জিন টেকনোলজি এবং দুর্দান্ত সাসপেনশন সিস্টেম যেকোনো রাস্তায় আরাম দেয়। লং ট্রাভেল সাসপেনশন, হাই গ্রাউন্ড ক্লিয়ারেন্স এবং LED হেডল্যাম্প এই বাইকের মূল আকর্ষণ।</p>
      
      <h3>Suzuki V-Strom 250SX - পাওয়ার এবং স্টাইল</h3>
      <p>Suzuki V-Strom 250SX একটি প্রিমিয়াম অ্যাডভেঞ্চার বাইক যা ২৪৯cc ইঞ্জিন এবং অসাধারণ বিল্ড কোয়ালিটি নিয়ে আসে। এর এগ্রেসিভ ডিজাইন, ডুয়েল চ্যানেল ABS এবং স্মুথ পারফরম্যান্স এটিকে একটি কমপ্লিট প্যাকেজ করে তুলেছে।</p>
      
      <h3>Honda NX200 - নতুন প্রতিদ্বন্দ্বী</h3>
      <p>Honda NX200 বাংলাদেশে নতুন এন্ট্রি হলেও এর ফিচার এবং পারফরম্যান্স অসাধারণ। Honda এর নির্ভরযোগ্যতা, ভালো মাইলেজ এবং কমফোর্টেবল রাইডিং পজিশন এটিকে ডেইলি কমিউট এবং উইকএন্ড ট্যুরিং উভয়ের জন্য আদর্শ করে তোলে।</p>
      
      <h3>তুলনামূলক বিশ্লেষণ</h3>
      <p>তিনটি বাইকই আলাদা আলাদা দিক থেকে অসাধারণ। Xpulse সবচেয়ে সাশ্রয়ী এবং অফরোডে সেরা, V-Strom সবচেয়ে পাওয়ারফুল এবং প্রিমিয়াম, আর NX200 ব্যালেন্সড পারফরম্যান্স এবং Honda এর নির্ভরযোগ্যতা অফার করে। আপনার বাজেট এবং রাইডিং স্টাইলের উপর নির্ভর করে যেকোনো একটি বেছে নিতে পারেন।</p>
    `,
  },
  {
    id: 2,
    title: "Honda NX200 বনাম প্রতিদ্বন্দ্বীরা – কোন বাইকটি আপনার জন্য সেরা?",
    excerpt:
      "বাংলাদেশের মোটরসাইকেল বাজারে আডভেঞ্চার সেগমেন্ট দিন দিন জনপ্রিয় হচ্ছে। বিশেষ করে Honda এর নতুন এন্ট্রি Honda NX200 বাজারে বেশ আলোড়ন তৈরি করেছে।",
    image:
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=800&q=80",
    category: "Comparison",
    author: "টেক রিভিউয়ার",
    date: "১৮ ডিসেম্বর, ২০২৪",
    readTime: "৭ মিনিট",
    tags: ["Honda NX200", "Comparison", "Adventure"],
    fullContent: `
      <h2>Honda NX200 - নতুন অ্যাডভেঞ্চার প্রতিদ্বন্দ্বী</h2>
      <p>বাংলাদেশের মোটরসাইকেল বাজারে আডভেঞ্চার সেগমেন্ট দিন দিন জনপ্রিয় হচ্ছে। বিশেষ করে Honda এর নতুন এন্ট্রি Honda NX200 বাজারে বেশ আলোড়ন তৈরি করেছে। এই বাইকটি কতটা ভালো এবং প্রতিদ্বন্দ্বীদের সাথে কেমন পারফরম্যান্স দেয় তা নিয়েই আজকের আলোচনা।</p>
      
      <h3>ইঞ্জিন এবং পারফরম্যান্স</h3>
      <p>Honda NX200 এ রয়েছে ১৮৪.৪cc সিঙ্গেল সিলিন্ডার ইঞ্জিন যা ১৭.৩ PS পাওয়ার এবং ১৬.১ Nm টর্ক জেনারেট করে। এর পারফরম্যান্স মসৃণ এবং ফুয়েল এফিশিয়েন্ট, যা ডেইলি কমিউটিং এর জন্য পারফেক্ট।</p>
      
      <h3>ডিজাইন এবং বিল্ড কোয়ালিটি</h3>
      <p>Honda NX200 এর ডিজাইন মডার্ন এবং রাগড। LED হেডলাইট, ডিজিটাল ইন্সট্রুমেন্ট ক্লাস্টার এবং দুর্দান্ত ফিনিশিং এর বিল্ড কোয়ালিটি প্রশংসনীয়। Honda এর ঐতিহ্যবাহী বিল্ড স্ট্যান্ডার্ড এই বাইকেও বজায় রাখা হয়েছে।</p>
      
      <h3>প্রতিদ্বন্দ্বীদের সাথে তুলনা</h3>
      <p>Hero Xpulse 200 4V এর তুলনায় NX200 রোডে বেশি কমফোর্টেবল কিন্তু অফরোড ক্যাপাবিলিটি কিছুটা কম। Suzuki V-Strom 250SX এর চেয়ে দামে সাশ্রয়ী কিন্তু পাওয়ারে কিছুটা পিছিয়ে। তবে মোট মিলিয়ে Honda NX200 একটি ব্যালেন্সড প্যাকেজ যা বেশিরভাগ রাইডারের চাহিদা পূরণ করতে পারে।</p>
      
      <h3>মূল্য এবং ভ্যালু ফর মানি</h3>
      <p>Honda NX200 এর দাম প্রায় ৩.২০ লক্ষ টাকা যা মিড-রেঞ্জ অ্যাডভেঞ্চার বাইকের জন্য যুক্তিসঙ্গত। Honda এর আফটার সেলস সার্ভিস এবং রিসেল ভ্যালু বিবেচনা করলে এটি একটি ভালো ইনভেস্টমেন্ট।</p>
    `,
  },
  {
    id: 3,
    title: "মোটরসাইকেলের ইঞ্জিন অয়েল কখন ও কেন পরিবর্তন করবেন?",
    excerpt:
      "বাইকের ইঞ্জিন অয়েল পরিবর্তনের সময় মেয়াদ কেন বা কোনটা জানা বিশেষ গুরুত্বপূর্ণ। ইঞ্জিনের দীর্ঘায়ু এবং পারফরম্যান্স বজায় রাখতে নিয়মিত সময় মতো অয়েল পরিবর্তন করা জরুরি।",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    category: "Maintenance",
    author: "মেকানিক্স এক্সপার্ট",
    date: "১৫ ডিসেম্বর, ২০২৪",
    readTime: "৬ মিনিট",
    tags: ["Engine Oil", "Maintenance", "Tips"],
    fullContent: `
      <h2>ইঞ্জিন অয়েলের গুরুত্ব</h2>
      <p>বাইকের ইঞ্জিন অয়েল পরিবর্তনের সময় মেয়াদ কেন বা কোনটা জানা বিশেষ গুরুত্বপূর্ণ। ইঞ্জিনের দীর্ঘায়ু এবং পারফরম্যান্স বজায় রাখতে নিয়মিত সময় মতো অয়েল পরিবর্তন করা জরুরি। ইঞ্জিন অয়েল ইঞ্জিনের অভ্যন্তরীণ পার্টস গুলোকে লুব্রিকেট করে, ঘর্ষণ কমায় এবং তাপ নিয়ন্ত্রণে সাহায্য করে।</p>
      
      <h3>কখন অয়েল পরিবর্তন করবেন?</h3>
      <p>সাধারণত প্রতি ২০০০-৩০০০ কিলোমিটার পর বা প্রতি ৩-৪ মাসে একবার ইঞ্জিন অয়েল পরিবর্তন করা উচিত। তবে এটি নির্ভর করে আপনার বাইকের মডেল, ইঞ্জিন টাইপ এবং ব্যবহারের উপর। যদি আপনি শহরে বেশি ট্রাফিকে চালান, তাহলে আরো ঘন ঘন অয়েল পরিবর্তন করা প্রয়োজন।</p>
      
      <h3>কেন অয়েল পরিবর্তন জরুরি?</h3>
      <ul>
        <li><strong>লুব্রিকেশন:</strong> পুরাতন অয়েল লুব্রিকেশন ক্ষমতা হারায়</li>
        <li><strong>ক্লিনিং:</strong> নতুন অয়েল ইঞ্জিনের ময়লা পরিষ্কার করে</li>
        <li><strong>কুলিং:</strong> অয়েল ইঞ্জিনের তাপমাত্রা নিয়ন্ত্রণ করে</li>
        <li><strong>পারফরম্যান্স:</strong> নতুন অয়েল ইঞ্জিনের পারফরম্যান্স বাড়ায়</li>
        <li><strong>ফুয়েল এফিশিয়েন্সি:</strong> ভালো অয়েল মাইলেজ বাড়াতে সাহায্য করে</li>
      </ul>
      
      <h3>সঠিক অয়েল নির্বাচন</h3>
      <p>আপনার বাইকের ম্যানুয়ালে উল্লেখিত গ্রেড অনুযায়ী অয়েল ব্যবহার করুন। সাধারণত 10W-30, 10W-40, 20W-40 এই গ্রেডের অয়েল বাংলাদেশে বেশি ব্যবহৃত হয়। ব্র্যান্ডেড অয়েল ব্যবহার করুন এবং নকল অয়েল থেকে সাবধান থাকুন।</p>
      
      <h3>অয়েল পরিবর্তনের লক্ষণ</h3>
      <p>যদি আপনার বাইকে এই লক্ষণগুলো দেখেন তাহলে দেরি না করে অয়েল পরিবর্তন করুন: ইঞ্জিন থেকে অস্বাভাবিক শব্দ, কালো ধোঁয়া বের হওয়া, মাইলেজ কমে যাওয়া, অয়েলের রং কালো হয়ে যাওয়া, বা ইঞ্জিনের তাপমাত্রা বেড়ে যাওয়া।</p>
    `,
  },
  {
    id: 4,
    title: "মোটরসাইকেল রেসিং এর উত্তেজনা - সব পথের শেষে বিজয়ের আনন্দ",
    excerpt:
      "মোটরসাইকেল রেসিং শুধু একটি খেলা নয়, এটি আবেগ, দক্ষতা এবং সাহসের এক অনন্য মিশ্রণ। যারা স্পীড এবং এড্রেনালিন রাশ ভালোবাসেন তাদের জন্য রেসিং একটি স্বপ্নের জগত।",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    category: "Racing",
    author: "রেসিং এন্থুসিয়াস্ট",
    date: "১২ ডিসেম্বর, ২০২৪",
    readTime: "৮ মিনিট",
    tags: ["Racing", "MotoGP", "Sports"],
    fullContent: `
      <h2>মোটরসাইকেল রেসিং - এড্রেনালিনের খেলা</h2>
      <p>মোটরসাইকেল রেসিং শুধু একটি খেলা নয়, এটি আবেগ, দক্ষতা এবং সাহসের এক অনন্য মিশ্রণ। যারা স্পীড এবং এড্রেনালিন রাশ ভালোবাসেন তাদের জন্য রেসিং একটি স্বপ্নের জগত। প্রতিটি রেসে রাইডাররা তাদের সীমা অতিক্রম করে, প্রতিটি কর্নারে সাহস দেখায় এবং প্রতিটি ওভারটেকে দক্ষতার পরিচয় দেয়।</p>
      
      <h3>বিভিন্ন ধরনের মোটরসাইকেল রেসিং</h3>
      <p><strong>MotoGP:</strong> বিশ্বের সবচেয়ে প্রিমিয়াম এবং প্রতিযোগিতামূলক মোটরসাইকেল রেসিং সিরিজ। এখানে সর্বোচ্চ প্রযুক্তির বাইক এবং বিশ্বমানের রাইডাররা প্রতিদ্বন্দ্বিতা করেন।</p>
      
      <p><strong>Superbike Racing:</strong> প্রোডাকশন বেসড সুপারবাইকগুলো এই ক্যাটাগরিতে রেস করে। WSBK (World Superbike Championship) এর জনপ্রিয়তা অসাধারণ।</p>
      
      <p><strong>Motocross:</strong> অফরোড ট্র্যাকে জাম্প এবং হাই স্পীড অ্যাকশনের জন্য বিখ্যাত। এটি সবচেয়ে ফিজিক্যালি ডিমান্ডিং রেসিং ফরম্যাট।</p>
      
      <h3>রেসিং এর জন্য প্রয়োজনীয় দক্ষতা</h3>
      <p>একজন সফল রেসার হতে হলে শুধু স্পীড নয়, দরকার অসাধারণ বাইক কন্ট্রোল, রেস স্ট্র্যাটেজি বোঝার ক্ষমতা, ফিজিক্যাল ফিটনেস এবং মানসিক দৃঢ়তা। প্রতিটি কর্নারে সঠিক লাইন নিতে হবে, ব্রেকিং পয়েন্ট মনে রাখতে হবে এবং প্রতিদ্বন্দ্বীদের মুভমেন্ট প্রিডিক্ট করতে হবে।</p>
      
      <h3>বাংলাদেশে মোটরসাইকেল রেসিং</h3>
      <p>বাংলাদেশে মোটরসাইকেল রেসিং ধীরে ধীরে জনপ্রিয় হচ্ছে। BMA (Bangladesh Motorcycle Association) নিয়মিত ট্র্যাক ডে এবং রেসিং ইভেন্ট আয়োজন করছে। অনেক তরুণ রাইডার এই খেলায় আগ্রহী হচ্ছেন এবং আন্তর্জাতিক মানের প্রতিযোগিতায় অংশ নেওয়ার স্বপ্ন দেখছেন।</p>
      
      <h3>নিরাপত্তা সর্বাগ্রে</h3>
      <p>রেসিং অত্যন্ত বিপজ্জনক হতে পারে। তাই সব সময় সঠিক সেফটি গিয়ার পরিধান করা জরুরি - ফুল ফেস হেলমেট, রেসিং স্যুট, গ্লাভস, বুটস এবং ব্যাক প্রোটেক্টর। ট্র্যাকে সব সময় রুলস ফলো করুন এবং নিজের সীমা জানুন।</p>
    `,
  },
  {
    id: 5,
    title: "Two-Wheeler Culture in Africa: A Snapshot",
    excerpt:
      "In many African countries, motorcycles and scooters are the lifeblood of local transport. They are essential for daily commuting, goods transport, small business operations, and connecting remote areas.",
    image:
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80",
    category: "Global Culture",
    author: "International Correspondent",
    date: "১০ ডিসেম্বর, ২০২৪",
    readTime: "৯ মিনিট",
    tags: ["Africa", "Culture", "Transport"],
    fullContent: `
      <h2>Two-Wheeler Revolution in Africa</h2>
      <p>In many African countries, motorcycles and scooters are the lifeblood of local transport. They are essential for daily commuting, goods transport, small business operations, and connecting remote areas. The two-wheeler culture in Africa is unique, vibrant, and continually evolving with economic development.</p>
      
      <h3>Economic Impact</h3>
      <p>Motorcycles have become a significant economic driver across Africa. They provide employment opportunities through taxi services (known as "boda-boda" in East Africa or "okada" in West Africa), delivery services, and small business transportation. Millions of families depend on motorcycle-related income for their livelihoods.</p>
      
      <h3>Popular Models and Brands</h3>
      <p>Chinese manufacturers dominate the African motorcycle market, offering affordable and fuel-efficient models. Brands like Bajaj, TVS, and Hero from India are also popular. These bikes are designed for durability, easy maintenance, and rough road conditions prevalent in many African regions.</p>
      
      <h3>Challenges and Solutions</h3>
      <p>Road safety remains a major concern, with many riders lacking proper training and safety gear. However, various NGOs and government initiatives are working to improve rider education, helmet usage, and road infrastructure. Financing schemes are also making motorcycle ownership more accessible.</p>
      
      <h3>Future Outlook</h3>
      <p>The two-wheeler market in Africa is expected to grow significantly. Electric motorcycles are beginning to enter the market, promising cleaner and more sustainable transportation. As infrastructure improves and economies grow, motorcycles will continue to play a crucial role in African mobility.</p>
      
      <h3>Cultural Significance</h3>
      <p>Beyond transportation, motorcycles have become part of African urban culture. They represent freedom, entrepreneurship, and progress. Many young people see motorcycle ownership as a step toward economic independence and social mobility.</p>
    `,
  },
  {
    id: 6,
    title:
      "বাংলাদেশের বাইকের ফুয়েল ট্যাঙ্কের রহস্য: কারণ, সমাধান ও রক্ষণাবেক্ষণ",
    excerpt:
      "বাংলাদেশে বাইক ব্যবহারকারীদের জন্য একটি সাধারণ সমস্যা হলো ফুয়েল ট্যাঙ্কে মরিচা পড়া এবং ভেতরে ময়লা জমা হওয়া। বহু বাইক রাইডার এই সমস্যার সম্মুখীন হন।",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Maintenance",
    author: "বাইক মেইনটেনেন্স গাইড",
    date: "০৮ ডিসেম্বর, ২০২৪",
    readTime: "৭ মিনিট",
    tags: ["Fuel Tank", "Rust Prevention", "Maintenance"],
    fullContent: `
      <h2>ফুয়েল ট্যাঙ্কের সমস্যা এবং সমাধান</h2>
      <p>বাংলাদেশে বাইক ব্যবহারকারীদের জন্য একটি সাধারণ সমস্যা হলো ফুয়েল ট্যাঙ্কে মরিচা পড়া এবং ভেতরে ময়লা জমা হওয়া। বহু বাইক রাইডার এই সমস্যার সম্মুখীন হন, বিশেষত যারা তাদের বাইক দীর্ঘসময় পার্ক করে রাখেন বা নিয়মিত রক্ষণাবেক্ষণ করেন না।</p>
      
      <h3>কেন ফুয়েল ট্যাঙ্কে মরিচা পড়ে?</h3>
      <ul>
        <li><strong>আর্দ্রতা:</strong> বাংলাদেশের আবহাওয়ায় আর্দ্রতা বেশি থাকে যা ট্যাঙ্কে কনডেনসেশন সৃষ্টি করে</li>
        <li><strong>নিম্নমানের জ্বালানি:</strong> ভেজাল বা পানি মিশ্রিত পেট্রোল মরিচার কারণ হতে পারে</li>
        <li><strong>দীর্ঘদিন ফাঁকা রাখা:</strong> ট্যাঙ্ক খালি থাকলে ভেতরে বাতাস ঢুকে মরিচা সৃষ্টি করে</li>
        <li><strong>পুরাতন বাইক:</strong> স্টিল ট্যাঙ্ক সহজেই মরিচা ধরে</li>
      </ul>
      
      <h3>মরিচার ক্ষতিকর প্রভাব</h3>
      <p>ফুয়েল ট্যাঙ্কের মরিচা ফুয়েল লাইন ও কার্বুরেটর/ইনজেক্টর ব্লক করে দিতে পারে। এতে ইঞ্জিন মিসফায়ারিং, কম পাওয়ার এবং শেষ পর্যন্ত ইঞ্জিন ড্যামেজ হতে পারে। ফুয়েল পাম্পও ক্ষতিগ্রস্ত হতে পারে মরিচার কারণে।</p>
      
      <h3>মরিচা প্রতিরোধের উপায়</h3>
      <p><strong>১. ট্যাঙ্ক ফুল রাখুন:</strong> যখন বাইক ব্যবহার করছেন না তখন ট্যাঙ্ক ফুল রাখুন যাতে বাতাস প্রবেশ না করে।</p>
      <p><strong>২. ভালো মানের জ্বালানি:</strong> সবসময় বিশ্বস্ত পাম্প থেকে জ্বালানি নিন।</p>
      <p><strong>৩. নিয়মিত চালান:</strong> বাইক নিয়মিত চালালে ফুয়েল সার্কুলেশন হয় এবং মরিচা কম হয়।</p>
      <p><strong>৪. ফুয়েল স্ট্যাবিলাইজার:</strong> দীর্ঘদিন পার্ক করলে ফুয়েল স্ট্যাবিলাইজার ব্যবহার করুন।</p>
      
      <h3>মরিচা পরিষ্কার করার পদ্ধতি</h3>
      <p>যদি ট্যাঙ্কে মরিচা পড়ে যায়, তাহলে পেশাদার মেকানিকের সাহায্য নিন। ট্যাঙ্ক খুলে ভিনেগার বা রাস্ট রিমুভার দিয়ে পরিষ্কার করতে হয়। এরপর ভালোভাবে ধুয়ে শুকিয়ে ট্যাঙ্ক সিলার ব্যবহার করা যেতে পারে। DIY পদ্ধতি না জেনে ট্রাই করবেন না, এতে ক্ষতি হতে পারে।</p>
    `,
  },
];

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<
    (typeof BLOG_POSTS)[number] | null
  >(null);

  const handleReadMore = (blog: (typeof BLOG_POSTS)[number]) => {
    setSelectedBlog(blog);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = (platform: string, blog: any) => {
    const url = window.location.href;
    const text = blog.title;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      copy: url,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } else {
      window.open(
        shareUrls[platform as keyof typeof shareUrls],
        "_blank",
        "width=600,height=400"
      );
    }
  };

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100">
        {/* Header */}
        <div className="bg-linear-to-r from-black via-gray-800 to-black text-white py-4">
          <div className="container mx-auto px-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Back to All Blogs</span>
            </button>
          </div>
        </div>

        {/* Blog Detail */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
                <Image
                  width={1500}
                  height={1000}
                  quality={100}
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Blog Header */}
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8 border border-gray-200">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-linear-to-r from-black to-gray-700 text-white text-sm font-semibold rounded-full">
                    {selectedBlog.category}
                  </span>
                  {selectedBlog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center gap-1"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent mb-6 leading-tight">
                  {selectedBlog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>{selectedBlog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{selectedBlog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{selectedBlog.readTime} পড়তে</span>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-3 pb-8 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Share:</span>
                  <button
                    onClick={() => handleShare("facebook", selectedBlog)}
                    className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-110"
                  >
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter", selectedBlog)}
                    className="p-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white transition-all hover:scale-110"
                  >
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin", selectedBlog)}
                    className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white transition-all hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare("copy", selectedBlog)}
                    className="p-2 rounded-lg bg-gray-700 hover:bg-gray-800 text-white transition-all hover:scale-110"
                  >
                    <LinkIcon className="h-5 w-5" />
                  </button>
                </div>

                {/* Blog Content */}
                <div
                  className="prose prose-lg max-w-none mt-8 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.fullContent }}
                  style={{
                    lineHeight: "1.8",
                  }}
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-linear-to-r from-black via-gray-800 to-black text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-semibold">Our Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Latest Blog Posts
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              মোটরসাইকেল সম্পর্কিত সর্বশেষ তথ্য, টিপস এবং গাইড
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((blog) => (
              <div
                key={blog.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <Image
                    width={1000}
                    height={1000}
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-linear-to-r from-black to-gray-700 text-white text-sm font-semibold rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blog.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleReadMore(blog)}
                      className="px-6 py-2.5 bg-linear-to-r from-black to-gray-700 text-white rounded-xl font-semibold hover:from-gray-800 hover:to-gray-600 cursor-pointer transition-all duration-300 flex items-center gap-2"
                    >
                      Read More
                      <TrendingUp className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => handleReadMore(blog)}
                      className="cursor-pointer"
                    >
                      <Share2 className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Navbar from "@/components/header/Header";
import { Hero } from "@/components/hero";
import CardFlip from "@/components/kokonutui/card-flip";
import { QuickAccess } from "@/components/QuickAccess/QuickAcces";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <QuickAccess />
      <CardFlip />
    </div>
  );
};

export default Home;

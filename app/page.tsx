import { CustomerReview } from "@/components/CustomerReview/CustomerReview";

import { Hero } from "@/components/hero";

import { QuickAccess } from "@/components/QuickAccess/QuickAcces";
import UsedBike from "@/components/UsedBike/UsedBike";
import VedioReview from "@/components/VedioReview/VedioReview";
import { Headphones } from "lucide-react";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero />

      <QuickAccess />
      <UsedBike title="Used Bike" className="mt-0 text-3xl" />
      <UsedBike title="Featured Bike" className="mt-10 text-3xl" />
      <UsedBike
        title="Popular Bikes in Bangladesh"
        className="mt-10 text-3xl"
      />
      <VedioReview />
      <CustomerReview />
    </div>
  );
};

export default Home;

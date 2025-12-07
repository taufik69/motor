import { CustomerReview } from "@/components/CustomerReview/CustomerReview";
import { Footer } from "@/components/footer2";
import Navbar from "@/components/header/Header";
import { Hero } from "@/components/hero";

import { QuickAccess } from "@/components/QuickAccess/QuickAcces";
import UsedBike from "@/components/UsedBike/UsedBike";
import VedioReview from "@/components/VedioReview/VedioReview";

const Home = () => {
  return (
    <div>
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
      <div className="w-40 h-20 bg-BlueTeal"></div>
      <div className="w-40 h-20 bg-deepTeal"></div>
      <div className="w-40 h-20 bg-OceanTeal"></div>
      <div className="w-40 h-20 bg-Blackdark"></div>
      <div className="w-40 h-20 bg-Ivorylight"></div>
    </div>
  );
};

export default Home;

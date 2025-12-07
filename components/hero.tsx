import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Marquee } from "@/components/ui/marquee";
import { imageProvider } from "@/public/image/image";
import imagelksdjf from "@/public/image/bannerfour.jpg";
import Image from "next/image";
import { FlickeringGrid } from "./ui/flickering-grid";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const Hero = ({
  badge = "✨ Your Dream Bike Here",
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Discover all Bikes",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Contact Us",
      url: "https://www.shadcnblocks.com",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  const { bannerOne, bannerTwo, bannerThree, bannerFour } = imageProvider();
  return (
    <section className="">
      <div className="container">
        <div className=" ">
          {/* marqure image */}
          <Marquee pauseOnHover={true} repeat={4}>
            <Image
              src={
                "https://img.pikbest.com/origin/10/09/97/47rpIkbEsTF3q.jpg!w700wp"
              }
              width={1000}
              height={400}
              alt={image.alt}
              className="max-h-96 w-[30vw] rounded-md object-cover cursor-pointer"
            />
            <Image
              src={
                "https://img.freepik.com/premium-psd/new-motorcycle-social-media-instagram-post-template-design-bike-sales-template-bike-banner-post_217752-5343.jpg"
              }
              width={1000}
              height={400}
              alt={image.alt}
              className="max-h-96 w-[40vw] rounded-md object-cover cursor-pointer"
            />
            <Image
              src={
                "https://img.pikbest.com/origin/10/10/56/73upIkbEsT7pS.jpg!w700wp"
              }
              width={1000}
              height={400}
              alt={image.alt}
              className="max-h-96 w-[20vw] rounded-md object-cover cursor-pointer"
            />
            <Image
              src={
                "https://img.freepik.com/premium-psd/new-motorcycle-social-media-instagram-post-template-design-bike-sales-template-bike-banner-post_217752-5343.jpg"
              }
              width={1000}
              height={400}
              alt={image.alt}
              className="max-h-96 w-[40vw] rounded-md object-cover cursor-pointer"
            />
          </Marquee>
        </div>

        {/* hero contet */}

        <div className=" flex justify-center w-full py-10 rounded ">
          <TypingAnimation
            words={[
              "যেকোনো বাইক এক্সচেঞ্জ করলেই Hornet 2.0-তে পাচ্ছেন 💸 ৫,০০০ টাকা ক্যাশব্যাক! 🎉 পুরোনো বাইক দিন → নতুন Hornet 2.0 নিন 💰 পাচ্ছেন ৫,০০০৳ ক্যাশব্যাক!",

              "এখনই এক্সচেঞ্জ করুন আপনার বাইক এবং নিশ্চিতভাবে পান ক্যাশব্যাক অফার 🎯 এক্সচেঞ্জ অফার চলছে! যেকোনো বাইক → 💰 ক্যাশব্যাক!",
            ]}
            blinkCursor={true}
            className="text-4xl font-bold w-full lg:text-3xl leading-14"
            startOnView={true}
            typeSpeed={200}
            loop
          />
        </div>

        {/* <div className="flex justify-center  items-center gap-x-7">
          {buttons.primary && (
            <RainbowButton variant="default">
              {buttons.primary.text}
            </RainbowButton>
          )}
          {buttons.secondary && (
            <RainbowButton variant="outline">
              {buttons.secondary.text}
              <ArrowRight className="size-4" />
            </RainbowButton>
          )}
        </div> */}
      </div>
    </section>
  );
};

export { Hero };

//

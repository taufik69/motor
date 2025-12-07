"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { SparklesText } from "../ui/sparkles-text";

const videos = [
  { id: 1, video: "https://www.youtube.com/embed/qh3NGpYRG3I" },
  { id: 2, video: "https://www.youtube.com/embed/w7ejDZ8SWv8" },
  { id: 3, video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 4, video: "https://www.youtube.com/embed/LXb3EKWsInQ" },
  { id: 5, video: "https://www.youtube.com/embed/LXb3EKWsInQ" },
  { id: 6, video: "https://www.youtube.com/embed/g7xEPiiygF0" },
];

const getYoutubeThumb = (url: string) => {
  const id = url.split("embed/")[1]?.split("?")[0];
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
};

const Arrow = ({ onClick, dir }: any) => (
  <button
    onClick={onClick}
    className={`hidden sm:flex items-center justify-center cursor-pointer absolute ${
      dir === "left" ? "-left-14" : "-right-14"
    } top-1/2 -translate-y-1/2 
    bg-black text-white p-3 rounded-full hover:bg-black/80 z-10`}
  >
    {dir === "left" ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
  </button>
);

const VedioReview = () => {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const playVideo = (url: string) => {
    setActiveVideo(url);
    setOpen(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    swipeToSlide: true,
    prevArrow: <Arrow dir="left" />,
    nextArrow: <Arrow dir="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="my-12 px-3 relative">
      <SparklesText className="text-3xl sm:text-4xl font-bold text-center pb-8">
        Video Review
      </SparklesText>

      <Slider {...settings}>
        {videos.map((item) => (
          <div key={item.id} className="px-2">
            <div
              onClick={() => playVideo(item.video)}
              className="relative cursor-pointer group"
            >
              <img
                src={getYoutubeThumb(item.video)}
                alt="video thumb"
                className="w-full h-[190px] sm:h-[230px] lg:h-[280px] object-cover rounded-xl"
              />

              {/* PLAY OVERLAY */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-xl">
                <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full">
                  <Play size={30} className="text-black ml-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* ✅ MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 max-w-5xl aspect-video">
          {activeVideo && (
            <iframe
              src={`${activeVideo}?autoplay=1`}
              className="w-full h-full rounded-lg"
              allow="autoplay; fullscreen"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VedioReview;

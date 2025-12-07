import React from "react";
import CardFlip from "@/components/kokonutui/card-flip";
import { SparklesText } from "@/components/ui/sparkles-text";
const UsedBike = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div>
      <SparklesText
        className={`text-2xl font-bold text-center ${className || ""}`}
      >
        {title || "Used Bike"}
      </SparklesText>
      {/* <h2 className="text-2xl font-bold "></h2> */}
      <CardFlip />
    </div>
  );
};

export default UsedBike;

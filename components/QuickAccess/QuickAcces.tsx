import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BorderBeam } from "@/components/ui/border-beam";
import { ArrowRightLeft, Bike } from "lucide-react";
import Image from "next/image";
import { SparklesText } from "@/components/ui/sparkles-text";

export function QuickAccess() {
  const accesinfo = [
    {
      id: 1,
      title: "New Bikes",
      img: "https://static.vecteezy.com/system/resources/previews/033/879/388/non_2x/speed-unleashed-sports-bike-mastery-on-the-road-ins-sports-bike-magic-vector.jpg",
    },
    {
      id: 2,
      title: "Used Bikes",
      img: "https://cdn.vectorstock.com/i/500p/45/38/cartoon-biker-motorcycle-rider-vector-21024538.jpg",
    },
    {
      id: 3,
      title: " Accessories",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcRIfHMI6yEJiNCLRs0iWkW2YMqWjezZeMDEsvbWEBm-ihsKcKVjvaIo&s",
    },
    {
      id: 4,
      title: "Repairs Shops",
      img: "https://cdn.vectorstock.com/i/1000v/36/32/automotive-repair-shop-vector-15143632.jpg",
    },
  ];
  return (
    <div className="py-20 flex  items-center justify-center gap-x-6 overflow-x-auto">
      {accesinfo.map((item) => (
        <Card
          className="relative w-[350px] overflow-hidden hover:shadow-lg p-4 rounded-lg transition-shadow duration-300"
          key={item.id}
        >
          <CardContent>
            <div className="cursor-pointer flex flex-col gap-y-7 items-center justify-center py-5">
              <span>
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  alt="new bikes"
                  className="w-full h-20 object-cover"
                />
              </span>

              <div className="flex items-center gap-x-2">
                <h1 className="text-2xl font-medium">{item.title}</h1>
                <ArrowRightLeft />
              </div>
            </div>
          </CardContent>

          <BorderBeam duration={8} size={100} />
        </Card>
      ))}
    </div>
  );
}

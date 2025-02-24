"use client";
import { Button } from "@/components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IrestaurantHeaderProps {
  restaurant: Pick<Restaurant, "coverImageUrl" | "name">;
}
const RestaurantHeader = ({ restaurant }: IrestaurantHeaderProps) => {
  //volta na rota anterior
  const router = useRouter();
  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant={"secondary"}
        size={"icon"}
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon />
      </Button>

      <Image
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        fill
        className="object-contain"
      />

      <Button
        variant={"secondary"}
        size={"icon"}
        className="absolute right-4 top-4 z-50 rounded-full"
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default RestaurantHeader;

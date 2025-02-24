import { Button } from "@/components/ui/button";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import { db } from "@/lib/prisma";
import { ConsuptionMethod } from "@prisma/client";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ConsuptionMethodOption from "./_components/consuptionMethodOption";

export const metadata: Metadata = {
  title: "Nome da página",
  description: "Descrição da página",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function RestaurantPage({ params }: Props) {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>

      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="text-center opacity-55">
          escolha como prefere aproveitar a sua refeição. Estamos querendo
          oferecer praticidade e qualidade para você.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 pt-14">
        <ConsuptionMethodOption
          imageURL="/hamburgue-comer-aqui.png"
          alt="comer aqui"
          textButton="Para comer aqui"
          option="DINE_IN"
          slug={slug}
        />

        <ConsuptionMethodOption
          imageURL="/pacote-levar.png"
          alt="levar para comer"
          textButton="Levar para comer"
          option="TAKEAWAY"
          slug={slug}
        />
      </div>
    </div>
  );
}

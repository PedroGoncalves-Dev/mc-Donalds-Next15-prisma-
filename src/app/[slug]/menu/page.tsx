import { notFound } from "next/navigation";
import RestaurantHeader from "./_components/restaurant-header";
import RestaurantCategory from "./_components/category";
import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

interface IRestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consuptionMethod: string }>;
}

const isConsuptionMethodValid = (consuptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consuptionMethod.toUpperCase());
};

export default async function RestaurantMenuPage({
  params,
  searchParams,
}: IRestaurantMenuPageProps) {
  const { slug } = await params;
  const { consuptionMethod: option } = await searchParams;

  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant) {
    return notFound();
  }

  //   se o searchParas for invalido retorna 404
  if (!isConsuptionMethodValid(option)) {
    return notFound();
  }
  return (
    <div className="">
      <RestaurantHeader restaurant={restaurant} />

      <RestaurantCategory restaurant={restaurant} />
    </div>
  );
}

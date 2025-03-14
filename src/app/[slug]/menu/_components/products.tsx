import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface IProductsProps {
  products: Product[];
}

const Products = ({ products }: IProductsProps) => {
  return (
    <div className="space-y-3 divide-y px-1.5">
      {products.map((product) => (
        <Link
          key={product.id}
          href={""}
          className="flex items-center justify-between gap-10 py-3"
        >
          <div className="flex flex-col">
            <h3>{product.name}</h3>
            <p className="line-clamp-2 text-muted-foreground">
              {product.description}
            </p>

            <p className="pt-3 text-sm font-semibold">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>
          </div>

          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;

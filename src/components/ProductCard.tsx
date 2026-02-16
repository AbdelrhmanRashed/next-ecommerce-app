import type { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const productAvailability = product.availabilityStatus.toLowerCase();

  const badgeColor = productAvailability.includes("in")
    ? "bg-green-600"
    : productAvailability.includes("low")
    ? "bg-amber-600"
    : "bg-red-600";

  const discountedPrice = (
    product.price -
    product.price * (product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <Card
      className="
        group relative mx-auto w-full max-w-sm pt-0 overflow-hidden
        shadow-sm hover:shadow-md
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      <div
        className="
          absolute inset-0 z-30 aspect-video 
          bg-black/15 group-hover:bg-black/5
          transition-colors duration-300
        "
      />
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={350}
        height={350}
        className="
          relative z-20 aspect-video w-full object-cover
          transition-transform duration-300
          group-hover:scale-105
        "
      />

      <CardHeader>
        <CardAction>
          <Badge
            className={`
              ${badgeColor}
              transition-transform duration-300
              group-hover:scale-105
            `}
          >
            {product.availabilityStatus}
          </Badge>
        </CardAction>

        <CardTitle>{product.title}</CardTitle>

        <CardDescription className="line-clamp-3">
          {product.description}
        </CardDescription>
      </CardHeader>

      <div className="px-6 pb-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-green-600">
              ${discountedPrice}
            </span>

            <span className="text-sm text-gray-400 line-through">
              ${product.price}
            </span>
          </div>
          <Badge
            className="
              bg-red-600 rounded-full px-3
            "
          >
            -{product.discountPercentage}%
          </Badge>
        </div>

        <div className="h-px bg-gray-200/50 w-full" />
        <Button
          variant="ghost"
          className="
            w-full justify-between text-sm
            hover:bg-gray-100
            transition-all duration-200
            cursor-pointer
          "
          asChild
        >
          <Link href={`/products/${product.id}`}>
            More Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      <CardFooter className="mt-auto">
        <Button
          className="
            w-full cursor-pointer gap-2
            transition-all duration-300
            hover:scale-[1.02]
          "
        >
          <ShoppingCart className="w-4 h-4" />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

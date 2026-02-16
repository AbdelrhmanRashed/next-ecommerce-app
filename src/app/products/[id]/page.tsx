import { notFound } from "next/navigation";
import Image from "next/image";
import type { Product } from "@/types/product";

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  return res.json();
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const discountedPrice = (
    product.price -
    product.price * (product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <main className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground capitalize">
            {product.category}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-green-600">
              ${discountedPrice}
            </span>
            <span className="text-lg text-muted-foreground line-through">
              ${product.price}
            </span>
            <span className="text-sm text-destructive">
              -{product.discountPercentage}% off
            </span>
          </div>
          <p className="text-sm">
            <span className="font-medium">Availability:</span>{" "}
            {product.availabilityStatus}
          </p>
        </div>
      </div>
    </main>
  );
}

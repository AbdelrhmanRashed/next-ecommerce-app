import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

const Page = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  const products: Product[] = data.products;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Products
        </h1>
        <p className="text-muted-foreground mt-2">
          Browse our latest collection
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Page;

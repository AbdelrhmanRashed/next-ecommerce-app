import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import ProductList from "./productList";
import Filter from "@/components/Filter";
import { SlidersHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
};

interface props {
  searchParams: Promise<{
    stock: string;
  }>;
}

//ISR => Incremental Static Regeneration
export const revalidate = 15;

const Page = async ({ searchParams }: props) => {
  const { stock } = await searchParams;
  const filteredValue = stock ?? "all";
  console.log(filteredValue);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Products
          </h1>
        </div>
        <p className="text-muted-foreground mt-2">
          Browse our latest collection
        </p>
      </div>

      <Suspense fallback={<Loading />}>
        <div className="flex items-center justify-between mb-6 pb-4 border-b">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
            <span className="text-lg font-semibold">Filters</span>
          </div>

          <Filter />
        </div>
        <ProductList filteredValue={filteredValue} />
      </Suspense>
    </section>
  );
};

export default Page;

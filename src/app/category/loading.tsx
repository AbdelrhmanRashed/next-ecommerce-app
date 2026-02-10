import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <Skeleton className="h-6 w-40 mb-6 rounded-full" />

      <div
        className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      gap-6
      "
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
};

export default Loading;

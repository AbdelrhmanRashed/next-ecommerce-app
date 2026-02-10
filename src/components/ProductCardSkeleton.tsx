import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
const ProductCardSkeleton = () => {
  return (
    <Card className="mx-auto w-full max-w-sm overflow-hidden pb-6 pt-0">
      <Skeleton className="w-full aspect-video rounded-t-lg" />
      <CardHeader className="space-y-3">
        <Skeleton className="h-6 w-28 rounded-full" />

        <Skeleton className="h-6 w-3/4" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </CardHeader>

      <CardFooter className="mt-auto">
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;

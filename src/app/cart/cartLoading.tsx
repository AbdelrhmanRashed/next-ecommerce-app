import { Skeleton } from "@/components/ui/skeleton";

const CartLoading = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 border rounded-lg"
          >
            <Skeleton className="h-20 w-20 rounded-lg" />

            <div className="flex-1 space-y-2">
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>

            <div className="flex flex-col items-end gap-2">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-9 w-24 rounded" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border rounded-lg space-y-3">
        <Skeleton className="h-6 w-40" />

        <div className="flex justify-between">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-20" />
        </div>

        <Skeleton className="h-10 w-full rounded" />
      </div>
    </div>
  );
};

export default CartLoading;

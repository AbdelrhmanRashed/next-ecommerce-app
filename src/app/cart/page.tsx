import { Suspense } from "react";
import CartContent from "./cartContent";
import CartLoading from "./cartLoading";
import { ShoppingCart } from "lucide-react";

export const revalidate = 0;

const Page = () => {
  return (
    <div>
      <h1 className="my-6 text-2xl font-semibold flex items-center gap-2">
        <ShoppingCart strokeWidth={2.3} />
        Cart
      </h1>

      <Suspense fallback={<CartLoading />}>
        <CartContent />
      </Suspense>
    </div>
  );
};

export default Page;

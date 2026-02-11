import { CartProduct, CartResponse } from "@/types/cartProduct";
import Image from "next/image";

const getCart = async (): Promise<CartResponse> => {
  try {
    const res = await fetch("https://dummyjson.com/carts/1");

    if (!res.ok) {
      throw new Error("Failed to load cart");
    }

    return res.json();
  } catch (err) {
    console.error(err);
    throw new Error("Error fetching Cart");
  }
};

const CartContent = async () => {
  const cart = await getCart();
  const products: CartProduct[] = cart.products;

  return (
    <div className="space-y-6 my-6">
      <div className="space-y-4">
        {products.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 border rounded-lg"
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="font-medium line-clamp-1">{item.title}</h3>

                <div className="text-sm text-muted-foreground">
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>

              <div className="text-right">
                <div className="font-semibold">
                  ${item.discountedTotal.toFixed(2)}
                </div>
                <div className="text-xs text-muted-foreground line-through">
                  ${item.total.toFixed(2)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 border rounded-lg space-y-3">
        <h2 className="font-semibold">Order Summary</h2>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${cart.total.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Discounted Total</span>
          <span className="text-green-600">
            ${cart.discountedTotal.toFixed(2)}
          </span>
        </div>

        <div className="h-px bg-gray-200" />

        <div className="flex justify-between font-semibold">
          <span>Total Products</span>
          <span>{cart.totalProducts}</span>
        </div>

        <div className="flex justify-between font-semibold">
          <span>Total Quantity</span>
          <span>{cart.totalQuantity}</span>
        </div>

        <button className="w-full mt-3 bg-primary text-white py-2 rounded cursor-pointer">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartContent;

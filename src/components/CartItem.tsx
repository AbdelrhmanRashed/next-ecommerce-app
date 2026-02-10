"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./ui/badge";

const CartItem = () => {
  const [cartCount] = useState(3);

  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-6 h-6" />
      {cartCount > 0 && (
        <Badge
          variant={"destructive"}
          className="absolute -top-2 -right-2 h-5 min-w-5 flex items-center justify-center px-1 text-xs"
        >
          {cartCount}
        </Badge>
      )}
    </Link>
  );
};

export default CartItem;

"use client";

import Link from "next/link";
import CartItem from "./CartItem";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

interface Navigation {
  path: string;
  title: string;
}
type Variant = "desktop" | "mobile";

const navigation: Navigation[] = [
  { path: "/", title: "Home" },
  { path: "/products", title: "Products" },
  { path: "/category", title: "Categories" },
];

const NavLinks = ({ variant }: { variant: Variant }) => {
  const pathName = usePathname();
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated" && !!session?.user;

  const isActive = (path: string) => path === pathName;

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  const authButton = isLoggedIn ? (
    <Button variant="default" className="cursor-pointer" onClick={handleLogout}>
      Logout
    </Button>
  ) : (
    <Button variant="default" className="cursor-pointer" asChild>
      <Link href="/login">Login</Link>
    </Button>
  );

  if (variant === "desktop")
    return (
      <>
        {navigation.map((item) => (
          <li key={item.title}>
            <Link
              href={item.path}
              className={`text-md font-medium transition duration-300 text-gray-600 hover:text-gray-800 ${
                isActive(item.path) && "text-gray-800"
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <CartItem />
        {authButton}
      </>
    );

  if (variant === "mobile")
    return (
      <>
        <CartItem />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {navigation.map((item) => (
              <DropdownMenuItem asChild key={item.title}>
                <Link
                  href={item.path}
                  className={`${isActive(item.path) && "font-semibold"}`}
                >
                  {item.title}
                </Link>
              </DropdownMenuItem>
            ))}
            {isLoggedIn ? (
              <DropdownMenuItem onClick={handleLogout}>
                Logout
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem asChild>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
};

export default NavLinks;

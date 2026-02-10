"use client";
import { Category } from "@/types/category";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarListProps {
  categories: Category[];
}

const SidebarList = ({ categories }: SidebarListProps) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <ul className="space-y-2">
      {categories.map((category) => {
        const isActive = pathname === `/category/${category.slug}`;
        return (
          <li key={category.slug}>
            <Link
              href={`/category/${category.slug}`}
              className={`
                block px-3 py-2 rounded-md text-sm font-medium transition-all
                ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary hover:text-primary-foreground"
                }
              `}
            >
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarList;

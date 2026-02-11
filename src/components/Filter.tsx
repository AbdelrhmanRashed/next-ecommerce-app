"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Filter as FilterIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("stock", filter);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <FilterIcon className="w-4 h-4" />
          Filter
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={() => handleFilter("all")}>
          All
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleFilter("in_stock")}>
          In Stock
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleFilter("low_stock")}>
          Low Stock
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleFilter("out_of_stock")}>
          Out Of Stock
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Filter;

import ProductCard from "@/components/ProductCard";
import type { Product, ProductsResponse } from "@/types/product";

interface ProductListProps {
  filteredValue: string;
}

const getProducts = async (): Promise<ProductsResponse> => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=0");

    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data!");
  }
};

const ProductList = async ({ filteredValue }: ProductListProps) => {
  const data = await getProducts();
  const products: Product[] = data.products;
  let filteredProducts: Product[] = [];

  if (filteredValue === "all") filteredProducts = products;

  if (filteredValue === "in_stock")
    filteredProducts = products.filter(
      (product) => product.availabilityStatus === "In Stock",
    );
  if (filteredValue === "low_stock")
    filteredProducts = products.filter(
      (product) => product.availabilityStatus === "Low Stock",
    );

  if (filteredValue === "out_of_stock")
    filteredProducts = products.filter(
      (product) => product.availabilityStatus === "Out of Stock",
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

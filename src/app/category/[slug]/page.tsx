import ProductCard from "@/components/ProductCard";
import { Product, ProductsResponse } from "@/types/product";

const getProductsByCategory = async (
  slug: string,
): Promise<ProductsResponse> => {
  try {
    const res = await fetch(`https://dummyjson.com/products/category/${slug}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Could not load products");
  }
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await getProductsByCategory(slug);
  const products: Product[] = data.products ?? [];

  return (
    <>
      <div className="text-xl font-semibold capitalize mb-6">{slug}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Page;

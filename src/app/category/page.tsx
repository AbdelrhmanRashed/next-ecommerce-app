import { ArrowLeft, ShoppingBag } from "lucide-react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-87.5 text-center space-y-4">
      <div className="bg-muted p-6 rounded-full">
        <ShoppingBag className="w-14 h-14 text-primary" />
      </div>
      <h1 className="text-2xl font-bold">Browse Products by Category</h1>

      <p className="text-muted-foreground max-w-md">
        Select any category from the sidebar to view its products.
      </p>

      <div className="flex items-center gap-2 text-primary font-medium">
        <ArrowLeft className="w-5 h-5" />
        Choose from the left
      </div>
    </div>
  );
};

export default Page;

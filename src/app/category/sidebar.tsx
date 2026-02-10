import { Category } from "@/types/category";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SidebarList from "@/components/SidebarList";

async function getCategories() {
  const res = await fetch("https://dummyjson.com/products/categories");
  return res.json();
}

const Sidebar = async () => {
  const categories: Category[] = await getCategories();
  return (
    <aside className="col-span-3">
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>

        <Separator />

        <CardContent className="mt-4">
          <SidebarList categories={categories} />
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;

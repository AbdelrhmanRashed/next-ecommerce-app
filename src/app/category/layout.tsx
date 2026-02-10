import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "./sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
};

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-6 grid grid-cols-12 gap-6">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main className="col-span-9">
        <Card className="min-h-100">
          <CardContent className="pt-6">{children}</CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Layout;

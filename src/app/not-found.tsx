import { PackageSearch, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-112.5">
      <Card className="max-w-md w-full text-center">
        <CardContent className="pt-10 pb-10 space-y-5">
          <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-muted">
            <PackageSearch className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-2xl font-bold">Page not found</h1>

          <p className="text-muted-foreground text-sm px-6">
            We couldn’t find what you’re looking for. The page may have been
            removed or the link may be incorrect.
          </p>

          <Link href="/">
            <Button className="gap-2 mt-2 cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;

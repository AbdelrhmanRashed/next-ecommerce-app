"use client";
import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ErrorProps {
  error: Error;
}

const Error = ({ error }: ErrorProps) => {
  return (
    <div className="flex items-center justify-center min-h-100">
      <Card className="max-w-md w-full text-center">
        <CardContent className="pt-8 pb-8 space-y-4">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertCircle className="w-8 h-8" />
          </div>

          <h2 className="text-xl font-semibold">Something went wrong</h2>

          <p className="text-muted-foreground text-sm px-4">
            {error?.message || "Failed to load data. Please try again."}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Error;

"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      Continue with Google
    </Button>
  );
}
